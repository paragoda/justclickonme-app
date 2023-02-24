import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

const folders = [
  {
    slug: "flurium",
    title: "Flurium team github",
    created: "February 24, 2023 1:50 PM",
    description: "Link with same slug as folder",
    link: "justclickon.me/flurium",
    destination: "https://github.com/flurium",
  },
]
const subfolders = [
  {
    slug: "auth",
    title: "Auth confirmation at JustClickOnMe",
    created: "February 24, 2023 1:50 PM",
    description: "Link to auth of JustClickOnMe.",
    link: "justclickon.me/flurium/auth",
    destination: "https://github.com/flurium/justclickonme-front",
  },
  {
    slug: "front",
    title: "Frontend on JustClickOnMe",
    created: "February 24, 2023 1:50 PM",
    description:
      "Link to frontend of JustClickOnMe, should be used for redirects. It’s small description to better understand purpose of link.",
    link: "justclickon.me/flurium/front",
    destination: "https://github.com/flurium/justclickonme-front",
  },
]

const Manage: NextPage = () => {
  const [active, setActive] = useState<null | {
    slug: string
    title: string
    created: string
    description: string
    link: string
    destination: string
  }>(null)

  return (
    <>
      <Head>
        <title>Manage your links | JustClickOnMe</title>
      </Head>

      <nav className="mb-5 border-b py-3 flex items-center justify-between">
        <div className="flex gap-3">
          <Link href="/">
            <img src="/logo.svg" alt="JustClickOnMe" className="h-6 mx-2" />
          </Link>
          <Link href="/profile">Profile</Link>
        </div>

        <div className="flex gap-3">
          <button className=" py-2 px-7 border-2 border-blue-100 text-sm flex items-center font-medium text-blue-600">
            Create new
          </button>
          <Link
            href="/plans"
            className="py-2 px-7 text-sm flex items-center font-medium text-red-600  bg-red-100"
          >
            Upgrade plan
          </Link>
        </div>
      </nav>

      <main>
        <div>path</div>
        <div className="border-2 min-h-[75vh] flex">
          <div className="basis-1/5 border-r-2">
            {folders.map((folder) => (
              <div
                className={`  py-3 px-5 ${
                  active?.slug == folder.slug
                    ? "bg-gray-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActive(folder)}
              >
                {folder.slug}
              </div>
            ))}
          </div>
          <div className="basis-1/5 border-r-2">
            {subfolders.map((folder) => (
              <div
                className={`  py-3 px-5 ${
                  active?.slug == folder.slug
                    ? "bg-gray-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActive(folder)}
              >
                {folder.slug}
              </div>
            ))}
          </div>
          <div className="basis-3/5 py-6 px-8">
            {active ? (
              <>
                <div>
                  <h1 className="text-xl font-semibold">{active.title}</h1>
                  <small>{active.created}</small>
                </div>

                <p className="mt-3">{active.description}</p>

                <Link
                  href={`https://${active.link}`}
                  className="text-xl font-semibold mt-12 block text-blue-500"
                >
                  {active.link}
                </Link>
                <Link href={active.destination} className="mt-3 block">
                  {active.destination}
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Manage
