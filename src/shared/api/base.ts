import { constants } from "../utils/helpers"
import jwtDecode from "jwt-decode"
import { callRefreshToken, getAccessToken, setAccessToken } from "./auth"
import { AccessToken } from "./types"
const domain = "http://localhost:5125"

const url = (path: string) => `${domain}${path}`

type CallInput = {
  path: string
  method: "POST" | "GET" | "PUT" | "DELETE"
  input?: object
  accessToken?: string
  refreshToken?: string
}

type CallResponse<T> = [T, null, "success"] | [null, Response, "fail"] | [null, null, "error"]

let apiStore: {
  accessToken: string | null
} = {
  accessToken: null,
}

const isAccessTokenExpired = (token: string) => {
  let decoded = jwtDecode<{ exp: number }>(token)
  return Date.now() >= decoded.exp * 1000
}

// just click on me specific fetch
export const call = async <T>({
  path,
  method,
  input,
  refreshToken,
}: CallInput): Promise<CallResponse<T>> => {
  let headers: Record<string, string> = {
    "content-type": "application/json",
  }

  if (apiStore.accessToken && !isAccessTokenExpired(apiStore.accessToken)) {
    headers["authorization"] = apiStore.accessToken
  } else if (refreshToken) {
    const refreshRes = await fetch(url("/api/auth/refresh"), {
      method: "GET",
      headers: {
        cookie: `${constants.refreshTokenCookie}=${refreshToken}`,
      },
    })

    if (refreshRes.ok) {
      const data = (await refreshRes.json()) as AccessToken
      apiStore.accessToken = data.accessToken
      headers["authorization"] = `bearer ${data.accessToken}`
    }
  }

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
