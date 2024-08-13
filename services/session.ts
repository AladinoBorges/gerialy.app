import { LoginPayloadType, LoginResponseType } from '@/types/session';
import { UserType } from '@/types/user';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import 'server only';
import gerapi from './geriapi';
import secrets from './secrets';

const SEVE_DAYS = 7 * 24 * 60 * 60 * 1000;

function handleSetCookie(key: string, session: string, expiresAt: Date) {
  cookies().set(key, session, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

export const session = {
  async createCookie(user: UserType, key: string, token: string) {
    const expiresAt = new Date(Date.now() + SEVE_DAYS);
    const newCookie = await secrets.encrypt({ user, expiresAt, token });

    handleSetCookie(key, newCookie, expiresAt);
  },

  async updateCookie(key: string) {
    const oldCookie = cookies().get(key)?.value;
    const payload = await secrets.verify(oldCookie);

    if (!oldCookie || !payload) {
      return null;
    }

    const expiresAt = new Date(Date.now() + SEVE_DAYS);

    handleSetCookie(key, oldCookie, expiresAt);
  },

  async deleteCookie(key: string) {
    cookies().delete(key);
  },

  async login(payload: LoginPayloadType) {
    try {
      await gerapi.mutate('auth/local', payload)?.then((response: LoginResponseType) => {
        const { user, jwt } = response?.data;

        this.createCookie(user, 'session', jwt);

        if (['applicant', 'manager', 'company'].includes(user?.role?.toLowerCase())) {
          redirect(`/${user?.role}/dashboard`);
        }
      });
    } catch (error) {
      console.error(`[SESSION SERVICE] login - an error occured: `, error);

      return null;
    }
  },

  async logout(keys: string[]) {
    for (const key in keys) {
      this.deleteCookie(key);
    }

    redirect('/');
  },
};
