import { perimeterx } from "perimeterx-nextjs";

const pxConfig = {
  px_app_id: process.env.PX_APP_ID,
  px_cookie_secret: process.env.PX_COOKIE_SECRET,
  px_auth_token: process.env.PX_AUTH_TOKEN,
};

export const middleware = perimeterx(pxConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
