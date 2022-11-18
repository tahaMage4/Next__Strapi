import { NextResponse } from "next/server";

export function middleware(req) {
  //   console.log("Middleware File", req.nextUrl);
  //   return NextResponse.rewrite(new URL("/success", req.nextUrl));

  //   // Validate Auth
  //   if (isAuthValid(req)) {
  //     return NextResponse.next();
  //   }
  //   //   if its not Auth
  //   const LoginUrl = new URL("/login", req.url);
  //   LoginUrl.search.Params.set("from".req.nextUrl.pathname);
  //   return NextResponse.redirect(LoginUrl);

  // For Cookies Setup
  const response = new NextResponse();
  //   set cookies
  response.cookies.set("auth", "secret");
  //   set cookies with options
  response.cookies.set("nextjs", "awesome", { path: "/test" });
  //   get all the deatails of the cookies
  const { value, options } = response.cookies.getWithOptions("auth");
  console.log(value);
  console.log(options);

  //   if delete the cookies
  response.cookies.delete("auth");
  // clear all the cookies
  response.cookies.clear();

  //   final step
  return NextResponse.rewrite(req.nextUrl);
}

// Middleware only for About Page

export const config = {
  matcher: ["/about/:path*", "/success/:path*"],
};
