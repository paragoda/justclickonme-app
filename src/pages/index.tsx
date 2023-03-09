import { Navbar } from "@/components/nav/Navbar"
import { getAccessToken, callRefreshToken } from "@/shared/api/auth"
import { getAll } from "@/shared/api/manage"
import { constants } from "@/shared/utils/helpers"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function Home({ isAuthed }: { isAuthed: boolean }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const refresh = async () => {
      const res = await callRefreshToken()
      if (res) setLoading(false)
    }
    refresh()
  }, [])

  return (
    <div className="h-full">
      <Head>
        <title>Shorten and customize your URLs | Just Click On Me</title>
        <meta name="description" content="Shorten and customize your URLs with Just Click On Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1 className="text-center text-5xl lg:text-7xl font-bold mt-12">
          Shorten and
          <br />
          customize your URLs
        </h1>

        <button
          onClick={async () => {
            console.log(getAccessToken())
            await getAll()
          }}
        >
          call
        </button>

        <h2>{loading ? "loading" : "user"}</h2>
        <h2>{isAuthed ? "server user" : "not server user"}</h2>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{ isAuthed: boolean }> = async (ctx) => {
  const refreshCookie = ctx.req.cookies[constants.refreshTokenCookie]
  const res = await callRefreshToken(refreshCookie)

  return {
    props: {
      isAuthed: res,
    },
  }
}
