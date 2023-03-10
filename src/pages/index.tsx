import { Navbar } from "@/components/nav/Navbar"
import { callRefreshToken } from "@/shared/api/auth"
import { constants, router } from "@/shared/utils/helpers"
import { GetServerSideProps } from "next"
import Head from "next/head"

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

      <main className="pb-20">
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

        <div className="flex flex-col gap-4 justify-center items-center text-xl">
          <a className="text-blue-500" href="https://www.youtube.com/watch?v=rnfAVasBkQc">
            www.youtube.com/watch?v=rnfAVasBkQc
          </a>
          <div className="flex w-full items-center gap-4">
            <hr className="flex-1" />
            <span className="mb-1">become</span>
            <hr className="flex-1" />
          </div>
          {/* change it to realy JustClickOnMe link */}
          <a href="https://www.youtube.com/watch?v=rnfAVasBkQc" className="text-blue-500">
            justclickon.me/go-all-the-way
          </a>
        </div>

        <section className="text-xl flex mt flex-col gap-4 text-center mt-20">
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

  if (res) {
    return {
      props: {},
      redirect: {
        destination: router.manage,
        permanent: false,
      },
    }
  }

  return {
    props: {
      isAuthed: res,
    },
  }
}
