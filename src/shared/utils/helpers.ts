export const env = {
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
  paddleVendorId: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID ?? "",
}

export const router = {
  home: "/",
  auth: "/auth",
  manage: "/manage",
  pricing: "/pricing",
  benefits: "/benefits",
}

export const constants = {
  refreshTokenCookie: "freshme",
}
