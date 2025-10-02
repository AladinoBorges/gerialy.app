import { getCookie as cookieGetter, deleteCookie, setCookie } from 'cookies-next';
import { calculator } from './calculator';
import secrets from './secrets';

const DAYS_TO_ADD = 7;

function handleSetCookie(key: string, data: string, expiresAt: Date) {
  setCookie(`gerialy_${key}`, data, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export const session = {
  async createCookie(key: string, token: string) {
    const expiresAt = calculator.addDays(DAYS_TO_ADD, new Date());
    const data = await secrets.encrypt({ expiresAt, token });

    handleSetCookie(key, data, expiresAt);
  },

  async getCookie(key: string, context = undefined) {
    const targetCookie = cookieGetter(`gerialy_${key}`);

    if (!targetCookie) {
      return null;
    }

    const decryptedCookie = await secrets.verify(targetCookie);

    return decryptedCookie;
  },

  async updateCookie(key: string, context = undefined) {
    const oldCookie = cookieGetter(`gerialy_${key}`);
    const payload = await secrets.verify(oldCookie);

    if (!oldCookie || !payload) {
      return null;
    }

    const expiresAt = calculator.addDays(DAYS_TO_ADD, new Date());

    handleSetCookie(key, oldCookie, expiresAt);
  },

  async eraseCookie(key: string) {
    deleteCookie(`gerialy_${key}`);

    return true;
  },
};
