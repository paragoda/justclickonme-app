import { Navbar } from "@/components/nav/Navbar"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function Home() {
  useEffect(() => {}, [])

  return (
    <div className="h-full">
      <Head>
        <title>Shorten and customize your URLs | Just Click On Me</title>
        <meta
          name="description"
          content="Shorten and customize your URLs with Just Click On Me"
        />
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
      </main>
    </div>
  )
}
