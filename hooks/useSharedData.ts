import geriapi from '@/services/geriapi';
import { session } from '@/services/session';
import { useQuery } from '@tanstack/react-query';
import queryString from 'qs';

export function useSharedData() {
  const { data: sessionCookie } = useQuery({
    queryKey: ['sessionCookie'],
    queryFn: () => session.getCookie('session'),
  });

  const getFullUser = async (token: string) => {
    const populateQuery = queryString.stringify({
      populate: {
        wallet: { fields: ['*'] },
        applicant: { fields: ['*'] },
      },
    });

    const fullUser = await geriapi.get(`users/me?${populateQuery}`, token);

    return fullUser;
  };

  const { data: fullUser } = useQuery({
    queryKey: ['fullUser', sessionCookie?.user?.id],
    enabled: !!sessionCookie?.token?.trim() && !!sessionCookie?.user?.id,
    queryFn: async () => getFullUser(sessionCookie?.token?.trim() as string),
  });

  return {
    user: sessionCookie?.user,
    token: sessionCookie?.token,
    fullUser,
    wallet: fullUser?.wallet,
  };
}
