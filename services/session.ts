import { LoginPayloadType, LoginResponseType } from '@/types/session';
import { UserType } from '@/types/user';
import nookies from 'nookies';
import { calculator } from './calculator';
import gerapi from './geriapi';
import secrets from './secrets';

const DAYS_TO_ADD = 7;

function handleSetCookie(key: string, data: string, expiresAt: Date) {
  nookies.set(undefined, `ger.ia.${key}`, data, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export const session = {
  async createCookie(user: UserType, key: string, token: string) {
    const expiresAt = calculator.addDays(DAYS_TO_ADD, new Date());
    const data = await secrets.encrypt({ user, expiresAt, token });

    handleSetCookie(key, data, expiresAt);
  },

  async getCookie(key: string, context = undefined) {
    const targetCookie = nookies.get(context)[`ger.ia.${key}`];

    return secrets.verify(targetCookie);
  },

  async updateCookie(key: string, context = undefined) {
    const oldCookie = nookies.get(context)?.value;
    const payload = await secrets.verify(oldCookie);

    if (!oldCookie || !payload) {
      return null;
    }

    const expiresAt = calculator.addDays(DAYS_TO_ADD, new Date());

    handleSetCookie(key, oldCookie, expiresAt);
  },

  async deleteCookie(key: string) {
    nookies.destroy(null, key);
  },

  async login(payload: LoginPayloadType, role: string) {
    try {
      return gerapi.mutate('auth/local', payload)?.then((response: LoginResponseType) => {
        const { user, jwt } = response;

        if (!jwt) {
          return;
        }

        this.createCookie({ ...user, role }, 'session', jwt);

        return `/${role}/dashboard/new`;
      });
    } catch (error) {
      console.error(`[SESSION SERVICE] login - an error occured: `, error);
    }
  },

  async logout(keys: string[]) {
    for (const key in keys) {
      this.deleteCookie(key);
    }

    return '/';
  },
};
