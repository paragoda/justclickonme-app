import { call } from "./base"
import { AccessToken } from "./types"

let accessToken: string | null = null
export const getAccessToken = () => accessToken

export const callRefreshToken = async (refreshToken?: string) => {
  const [data, res] = await call<AccessToken>({
    path: "/api/auth/refresh",
    method: "GET",
    refreshToken,
  })

  if (data) {
    accessToken = data.accessToken
    return true
  }
  return false
}

export const passwordLogin = async (email: string, password: string) => {
  const [data, res] = await call<AccessToken>({
    path: "/api/auth/login",
    method: "POST",
    input: {
      email,
      password,
    },
  })

  if (data) {
    accessToken = data.accessToken
    console.log(accessToken)
  }
}

export const passwordRegister = () => {}

export const googleLogin = async (token: string) => {
  const [data, res] = await call<AccessToken>({
    path: "/api/auth/google",
    method: "POST",
    input: {
      idToken: token,
    },
  })

  if (data) {
    accessToken = data.accessToken
    console.log(accessToken)
  }
}

// IN FUTURE
export const githubLogin = () => {}
