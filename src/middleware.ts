import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl
  console.log(pathname)

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  if (!token) {
    // Redirect to login if token is not available
    return NextResponse.redirect(new URL("/login", req.url))
  }
  const userRole = token.role

  if (pathname.startsWith("/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
}
