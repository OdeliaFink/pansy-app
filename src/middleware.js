import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  const client = createClient();
  
  // Bypass locale redirect for these paths
  if (
    request.nextUrl.pathname.startsWith("/sitemap") ||
    request.nextUrl.pathname.startsWith("/robots") ||
    request.nextUrl.pathname.startsWith("/icons/")
  ) {
    return;
  }
  
  // Default to French if the path is root ("/") and no locale is present
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/fr-ca";
    return Response.redirect(url, 302);  // Temporary redirect to /fr-ca
  }
  
  // Otherwise, rely on Prismic's locale redirect logic
  const redirect = await createLocaleRedirect({ client, request });

  if (redirect) {
    return redirect;
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!_next|_next/static|_next/image|_ipx|api|slice-simulator|icon.svg).*)"],
};
