

/*

Describes interaction with server

*/

const domain = 'https://localhost:44350'

const url = (path: string) => `${domain}${path}` 

export const googleAuth = async(token: string) => {
  try {
    const data = await fetch(url('/api/auth/google'), {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({
        idToken: token
      })
    })

    if (data.ok) {
      const accessToken = await data.text()
      return [accessToken, null]
    }

    return [null, new Error('Auth with google failed')]
  }
  catch (err: any) {
    return [null, err as Error]
  }
}

export const passwordLogin = async(email: string, password:string) => {
  try {
    const data = await fetch(url('/api/auth/login'), {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })

    if (data.ok) {
      const accessToken = await data.text()
      return [accessToken, null]
    }

    return [null, new Error('Auth with google failed')]
  }
  catch (err: any) {
    return [null, err as Error]
  }
}