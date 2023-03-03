import { constants } from "../utils/helpers"
import jwtDecode from "jwt-decode"
import { callRefreshToken, getAccessToken } from "./auth"
const domain = "http://localhost:5125"

const url = (path: string) => `${domain}${path}`

type CallInput = {
  path: string
  method: "POST" | "GET" | "PUT" | "DELETE"
  input?: object
  accessToken?: string
  refreshToken?: string
}

type CallOutput<T> = [T, null, "success"] | [null, Response, "fail"] | [null, null, "error"]

// just click on me specific fetch
export const call = async <T>({
  path,
  method,
  input,
  accessToken,
  refreshToken,
}: CallInput): Promise<CallOutput<T>> => {
  let headers: Record<string, string> = {
    "content-type": "application/json",
  }
  if (accessToken) {
    let decoded = jwtDecode<{
      exp: number
    }>(accessToken)

    if (Date.now() >= decoded.exp * 1000 && refreshToken) {
      if (!refreshToken) return [null, null, "error"]

      const refreshRes = await callRefreshToken(refreshToken)
      if (!refreshRes) return [null, null, "error"]

      const access = getAccessToken()
      accessToken = access ? access : ""
    }

    headers["authorization"] = accessToken
  }
  if (refreshToken) headers["cookie"] = `${constants.refreshTokenCookie}=${refreshToken}`

  try {
    const data = await fetch(url(path), {
      method: method,
      credentials: "include",
      headers,
      body: input && JSON.stringify(input),
    })

    if (data.ok) {
      const json = (await data.json()) as T
      return [json, null, "success"]
    }

    return [null, data, "fail"]
  } catch {
    return [null, null, "error"]
  }
}
