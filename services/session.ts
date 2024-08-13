import { LoginPayloadType, LoginResponseType } from '@/types/session';
import { UserType } from '@/types/user';
import nookies from 'nookies';
import gerapi from './geriapi';
import secrets from './secrets';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

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
    const expiresAt = new Date(Date.now() + SEVEN_DAYS);
    const data = await secrets.encrypt({ user, expiresAt, token });

    handleSetCookie(key, data, expiresAt);
  },

  async updateCookie(key: string, context = undefined) {
    const oldCookie = nookies.get(context)?.value;
    const payload = await secrets.verify(oldCookie);

    if (!oldCookie || !payload) {
      return null;
    }

    const expiresAt = new Date(Date.now() + SEVEN_DAYS);

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

        this.createCookie(user, 'session', jwt);

        return `/${role}/dashboard`;
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
