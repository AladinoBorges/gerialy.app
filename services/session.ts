import { LoginPayloadType, LoginResponseType } from '@/types/session';
import { UserType } from '@/types/user';
import { getCookie as cookieGetter, deleteCookie, setCookie } from 'cookies-next';
import { calculator } from './calculator';
import gerapi from './geriapi';
import secrets from './secrets';

const DAYS_TO_ADD = 7;

function handleSetCookie(key: string, data: string, expiresAt: Date) {
  setCookie(`ger.ia.${key}`, data, {
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
    const targetCookie = cookieGetter(`ger.ia.${key}`);

    if (!targetCookie) {
      return null;
    }

    const decryptedCookie = await secrets.verify(targetCookie);

    return decryptedCookie;
  },

  async updateCookie(key: string, context = undefined) {
    const oldCookie = cookieGetter(`ger.ia.${key}`);
    const payload = await secrets.verify(oldCookie);

    if (!oldCookie || !payload) {
      return null;
    }

    const expiresAt = calculator.addDays(DAYS_TO_ADD, new Date());

    handleSetCookie(key, oldCookie, expiresAt);
  },

  async eraseCookie(key: string) {
    deleteCookie(`ger.ia.${key}`);

    return true;
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
};
