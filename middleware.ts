import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  console.log(request, 'middleware')
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
