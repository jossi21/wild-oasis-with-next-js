// To more secure use auth function which existed in next
import { auth } from "@/app/_lib/auth";
// export auth function as middleware
export const proxy = auth;

// based on too many redirects we have to setup matcher
export const config = {
  matcher: ["/account"],
};
