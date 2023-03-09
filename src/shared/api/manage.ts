import { call } from "./base"
import { AccessToken } from "./types"

export const getAll = async () => {
  const data = await call<any>({
    path: "/api/links",
    method: "GET",
  })

  console.log(data)
}
