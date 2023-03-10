import { GoogleBtn } from "@/components/integrations/GoogleBtn"
import { Navbar } from "@/components/nav/Navbar"
import { passwordLogin } from "@/shared/api/auth"
import { Input } from "@/shared/ui/inputs"
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
        <h1 className="text-center text-5xl lg:text-7xl font-bold mt-12 mb-8 mx-6">Get Started</h1>

        <div className="flex flex-col items-center gap-4 max-w-xs m-auto">
          <div className="flex text-xl gap-3  items-center">
            <GoogleBtn user={user} />
            Google
          </div>

          <div className="flex w-full items-center gap-4">
            <hr className="flex-1" />
            <span className="mb-1">or</span>
            <hr className="flex-1" />
          </div>

          <Input
            type="email"
            placeholder="email"
            setValue={setEmail}
            className="w-full"
            value={email}
            label="Email"
          />
          <Input
            type="password"
            placeholder="password"
            setValue={setPassword}
            className="w-full"
            value={password}
            label="Password"
          />

          <button
            className=" py-3 px-6 border-blue-100 text-blue-600 hover:bg-blue-100 border  w-full"
            onClick={loginWithPassword}
          >
            Start
          </button>
        </div>
      </main>
    </>
  )
}
export default Auth
