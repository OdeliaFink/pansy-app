import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  const client = createClient();
  if (
    request.nextUrl.pathname.startsWith("/sitemap") ||
    request.nextUrl.pathname.startsWith("/robots")
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
  matcher: ["/((?!_next|api|slice-simulator|icon.svg).*)"],
};
