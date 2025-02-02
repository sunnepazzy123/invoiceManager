import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose";
import { cookies } from 'next/headers';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export async function getSessionUser() {
  try {
    const cookieStore = cookies();
    const jwt = cookieStore.get("jwt")?.value || '';
    const { payload } = await jwtVerify(jwt, SECRET_KEY);
    return { isAuthenticated: true, user: payload };
  } catch (error) {
    return { isAuthenticated: false };
  }
}
 
export async function middleware(request: NextRequest) {

  const session = await getSessionUser();

  if (!session.isAuthenticated) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth|login|register).*)",
  ],
};