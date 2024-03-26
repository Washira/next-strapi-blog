import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// let headers = { 'accept-language': 'en-US,en;q=0.5' }
// let languages = new Negotiator({ headers }).languages()
let locales = ['th', 'en-US']
// let defaultLocale = 'en-US'

// match(languages, locales, defaultLocale) // -> 'th'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return

  //   // Redirect if there is no locale
  //   const locale = getLocale(request)
  //   request.nextUrl.pathname = `/${locale}${pathname}`
  //   // e.g. incoming request is /products
  //   // The new URL is now /en-US/products
  //   return NextResponse.redirect(request.nextUrl)
  // }
  //   return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/about/:path*',
}
