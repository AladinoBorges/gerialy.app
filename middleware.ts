import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import secrets from './services/secrets';

// 1. Specify protected and public routes
const routes = {
  protected: ['/dashboard', '/dashboard/new'],
  public: ['/', '/signup', '/pricings', '/about', '/faq'],
};

export default async function middleware(request: NextRequest) {
  // 2. Check if the current route is protected or public
  const currentPathname = request.nextUrl.pathname;
  const isCurrentPathPublic = routes.public.includes(currentPathname);
  const isCurrentPathProtected = routes.protected.some((protectedItem) =>
    currentPathname.includes(protectedItem),
  );

  // 2. Decrypt the session from the raw cookie
  const rawCookies = cookies().get('gerialy_session')?.value;
  const sessionCookies = await secrets.verify(rawCookies);
  const user = sessionCookies?.user;

  // 3. Redirect to homepage if the user is not authenticated
  if (isCurrentPathProtected && !user?.id) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // 4. Redirect to the target user role /dashboard if the user is authenticated
  if (isCurrentPathPublic && !!user?.id && !currentPathname.includes('/dashboard')) {
    return NextResponse.redirect(new URL(`/${user?.role}/dashboard`, request.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
