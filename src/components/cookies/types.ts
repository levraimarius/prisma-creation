export interface Cookie {
  name: string;
  type: "necessary" | "functional" | "analytics" | "marketing";
  purpose: string;
  provider: string;
  duration: string;
}

export interface CookieCategory {
  name: string;
  description: string;
  cookies: Cookie[];
}
