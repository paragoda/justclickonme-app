import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { DocumentsIcon, EditIcon } from "@/shared/ui/icons"
import { LinkCreate } from "@/components/manage/LinkCreate"
import { LinkInfo } from "@/components/manage/LinkInfo"
import { LinkList } from "@/components/manage/LinkList"
import { ManageNavbar } from "@/components/nav/ManageNavbar"
import { useState } from "react"
import { LinkType } from "@/shared/utils/types"
import { constants } from "@/shared/utils/helpers"
import { callRefreshToken } from "@/shared/api/auth"
import { listlinks } from "@/shared/api/test"

const Manage: NextPage = () => {
  const [active, setActive] = useState<string>("")

  const [top, setTop] = useState<LinkType[]>(listlinks)

  const changeActiveLink = (link: string) => {
    setActive(link)
  }

  console.log(active)
  return (
    <>
      <Head>
        <title>Manage your links | JustClickOnMe</title>
      </Head>

      <div className="h-full flex flex-col ">
        <ManageNavbar />

        <main className="flex-1 flex flex-col pb-5">
          <div className="border-x border-t flex  items-center">
            <button
              className="hover:bg-gray-50 p-3 h-full"
              onClick={() => {
                setActive(active.substring(0, active.lastIndexOf("/")))
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="border-r h-full" />
            <span className="px-5 py-1">{top.find((l) => l.slug == active)?.slug}</span>
          </div>
          <div className="border  flex-1 flex flex-col lg:flex-row">
            <LinkList
              items={top.filter((l) => {
                return (
                  l.slug.substring(0, l.slug.lastIndexOf("/")) ==
                  (active ? active.substring(0, active.lastIndexOf("/")) : "")
                )
              })}
              active={top.find((l) => l.slug == active) ?? null}
              onClick={setActive}
            />
            <LinkList
              items={
                active != ""
                  ? top.filter((l) => {
                      const slash = l.slug.lastIndexOf("/")
                      if (slash == -1) return false
                      return l.slug.substring(0, slash) == active
                    })
                  : []
              }
              active={top.find((l) => l.slug == active) ?? null}
              onClick={setActive}
            />
            <div className="flex-1 lg:basis-3/5 py-6 px-8">
              {active ? <LinkInfo link={top.find((l) => l.slug == active)!} /> : <LinkCreate />}
            </div>

            {active && (
              <div className="flex border-t lg:hidden">
                <button className="flex-grow py-3 flex justify-center gap-x-2 items-center ">
                  <EditIcon />
                  Edit
                </button>
                <div className="border-r"></div>
                <button
                  className="py-3 flex-grow justify-center gap-x-2 items-center  flex "
                  onClick={async () => {
                    if (navigator.clipboard) {
                      await navigator.clipboard.writeText(
                        top.find((l) => l.slug == active)?.slug ?? ""
                      )
                    } else {
                      alert("Sorry can't copy")
                    }
                  }}
                >
                  <DocumentsIcon />
                  Copy
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default Manage

export const getServerSideProps: GetServerSideProps<{ isAuthed: boolean }> = async (ctx) => {
  // auth
  const refreshCookie = ctx.req.cookies[constants.refreshTokenCookie]
  const res = await callRefreshToken(refreshCookie)

  return {
    props: {
      isAuthed: res,
    },
  }
}
