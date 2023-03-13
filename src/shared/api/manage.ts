import { call } from "./base"
import { AccessToken } from "./types"

export const getLinks = async (prefix: string, refreshToken: string) => {
  const data = await call<any>({
    path: "/api/links",
    method: "GET",
    refreshToken,
  })

  return data
}
