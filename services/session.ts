import { LoginPayloadType, LoginResponseType } from '@/types/session';
import { UserType } from '@/types/user';
import { getCookie as cookieGetter, deleteCookie, setCookie } from 'cookies-next';
import queryString from 'qs';
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

  async login(payload: LoginPayloadType) {
    try {
      const loginResponse: LoginResponseType = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
        {
          method: 'POST',
          body: JSON.stringify({ ...payload }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
      )?.then((response) => {
        if (!response?.ok) {
          throw new Error(`Response status: ${response?.status}`);
        }

        return response?.json();
      });

      const { user, jwt } = loginResponse;

      if (!jwt) {
        return;
      }

      const populateQuery = queryString.stringify({
        populate: {
          role: { fields: ['name'] },
          applicant: { fields: ['*'] },
        },
      });

      const fullUser = await gerapi.get(`users/me?${populateQuery}`, jwt);

      if (!!fullUser?.id) {
        const { role = null, applicant = null } = fullUser;
        const userRole = role?.name || 'applicant';

        this.createCookie({ ...user, role: role?.name || 'applicant', applicant }, 'session', jwt);

        return `/${userRole}/dashboard/new`;
      }

      return;
    } catch (error) {
      console.error(`[SESSION SERVICE] login - an error occured: `, error);
    }
  },
};
