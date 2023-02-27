const domain = "https://localhost:44350"

const url = (path: string) => `${domain}${path}`

type CallInput = {
  path: string
  method: "POST" | "GET" | "PUT" | "DELETE"
  input?: object
}

type CallOutput<T> = [T, null] | [null, Response]

// just click on me specific fetch
export const call = async <T>({ path, method, input }: CallInput): Promise<CallOutput<T>> => {
  const data = await fetch(url(path), {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: input && JSON.stringify(input),
  })

  if (data.ok) {
    const json = (await data.json()) as T
    return [json, null]
  }

  return [null, data]
}
