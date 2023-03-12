import { Navbar } from "@/components/nav/Navbar"
import { getAccessToken, callRefreshToken } from "@/shared/api/auth"
import { getAll } from "@/shared/api/manage"
import { constants } from "@/shared/utils/helpers"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function Home({ isAuthed }: { isAuthed: boolean }) {
  return (
    <div className="h-full">
      <Head>
        <title>Shorten and customize your links | Just Click On Me</title>
        <meta
          name="description"
          content="Shorten and customize your links with JustClickOnMe. An Open Source alternative to Bitly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="h-[50vh] flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black max-w-3xl">
              Shorten and customize your links
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mt-8">
              An Open Source alternative to Bitly
            </h2>
          </div>
        </div>

        <section className="text-xl flex flex-col gap-4 text-center">
          <p>
            Each link <b>encourages</b> people <b>to click</b> on it because of the domain which{" "}
            <b>calls to action</b>
          </p>
          <p>
            <b>Readable</b> and <b>understandable</b> links as usual sentences or very short ones
          </p>
          <p>Developer friendly, communicate with JustClickOnMe through API</p>
        </section>
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
