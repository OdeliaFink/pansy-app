import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  const client = createClient();
  if (
    request.nextUrl.pathname.startsWith("/sitemap") ||
    request.nextUrl.pathname.startsWith("/robots") ||
    request.nextUrl.pathname.startsWith("/icons/")
  ) {
    return;
  }
  const redirect = await createLocaleRedirect({ client, request });

  if (redirect) {
    return redirect;
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!_next|_next/static|_next/image|_ipx|api|slice-simulator|icon.svg).*)"],
};
