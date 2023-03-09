import { GoogleBtn } from "@/components/integrations/GoogleBtn"
import { Navbar } from "@/components/nav/Navbar"
import { passwordLogin } from "@/shared/api/auth"
import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"

// TODO: auto_select for google only on
const Auth: NextPage = () => {
  const [user, setUser] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginWithPassword = async () => {
    await passwordLogin(email, password)

    //    console.log(token, err)
  }

  return (
    <>
      <Head>
        <title>Shorten and customize your URLs | Just Click On Me</title>
        <meta name="description" content="Shorten and customize your URLs with Just Click On Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-center text-5xl lg:text-7xl font-bold mt-12 mb-8 mx-6">
          Get started with:
        </h1>

        <div className="flex flex-col items-center gap-4 max-w-xs m-auto">
          <div className="flex text-xl gap-3  items-center">
            <GoogleBtn user={user} />
            Google
          </div>

          <span>or</span>
          <input
            className="input input-bordered w-full px-6"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="input input-bordered w-full px-6"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="btn" onClick={loginWithPassword}>
            Start
          </button>
        </div>
      </main>
    </>
  )
}
export default Auth
