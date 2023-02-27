import { call } from "./base"
import { AccessToken } from "./types"

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
  }
}

export const passwordRegister = () => {}

export const googleLogin = () => {}

// IN FUTURE
export const githubLogin = () => {}
