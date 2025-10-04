import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import appPublicUrls from './mocks/appPublicUrls';
import protectedLinks from './mocks/protectedLinks.json';
import secrets from './services/secrets';

export default async function middleware(request: NextRequest) {
  const currentPathname = request.nextUrl.pathname;

  const isCurrentPathPublic = appPublicUrls.some(({ href }) => currentPathname.includes(href));
  const isCurrentPathProtected = protectedLinks.some(({ href }) => currentPathname.includes(href));

  const rawCookies = cookies().get('gerialy_session')?.value;
  const sessionCookies = await secrets.verify(rawCookies);
  const user = sessionCookies?.user as { id: string; role: string } | null;

  if (isCurrentPathProtected && !user?.id) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (isCurrentPathPublic && !!user?.id && !currentPathname.includes('/dashboard')) {
    return NextResponse.redirect(new URL(`/${user?.role}/dashboard`, request.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
