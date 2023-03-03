import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { DocumentsIcon, EditIcon } from "@/shared/ui/icons"
import { LinkCreate } from "@/components/manage/LinkCreate"
import { LinkInfo } from "@/components/manage/LinkInfo"
import { LinkList } from "@/components/manage/LinkList"
import { ManageNavbar } from "@/components/nav/ManageNavbar"
import { Fragment, useEffect, useRef, useState } from "react"
import { LinkType } from "@/shared/utils/types"
import { constants } from "@/shared/utils/helpers"
import { callRefreshToken } from "@/shared/api/auth"
import { listlinks } from "@/shared/api/test"
import autoAnimate from "@formkit/auto-animate"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const Manage: NextPage = () => {
  const [activeSlug, setActiveSlug] = useState<string>("")
  const [links, setLinks] = useState<LinkType[]>(listlinks)

  const activeLink = links.find((l) => l.slug == activeSlug)

  const changeActiveLink = (slug: string) => {
    setActiveSlug(slug)

    // TODO: add marker that iditifies is already requested

    if (links.some((l) => l.slug.substring(0, l.slug.lastIndexOf("/")) == slug)) {
      console.log("exist")
    } else {
      console.log("not exist")
    }
  }
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 150,
  })

  return (
    <>
      <Head>
        <title>Manage your links | JustClickOnMe</title>
      </Head>

      <div className="h-full flex flex-col ">
        <ManageNavbar />

        <main className="flex-1 flex flex-col pb-5">
          <div className="border-x border-t flex items-center">
            <button
              className="hover:bg-gray-50 p-3 h-full"
              onClick={() => {
                setActiveSlug(activeSlug.substring(0, activeSlug.lastIndexOf("/")))
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

            <div className="flex gap-2 px-5 items-center" ref={parent}>
              {activeSlug.split("/").map((part, i, arr) => {
                const click = () =>
                  setActiveSlug(activeSlug.substring(0, activeSlug.indexOf(part)).concat(part))

                if (i == arr.length - 1) return <span key={part}>{part}</span>
                return (
                  <Fragment key={part}>
                    <span className="cursor-pointer" onClick={click}>
                      {part}
                    </span>
                    <span>/</span>
                  </Fragment>
                )
              })}
            </div>
          </div>
          <div className="border  flex-1 flex flex-col lg:flex-row">
            <LinkList
              items={links.filter((l) => {
                return (
                  l.slug.substring(0, l.slug.lastIndexOf("/")) ==
                  (activeSlug ? activeSlug.substring(0, activeSlug.lastIndexOf("/")) : "")
                )
              })}
              active={activeLink ?? null}
              onClick={changeActiveLink}
            />
            <LinkList
              items={
                activeSlug != ""
                  ? links.filter((l) => {
                      const slash = l.slug.lastIndexOf("/")
                      if (slash == -1) return false
                      return l.slug.substring(0, slash) == activeSlug
                    })
                  : []
              }
              active={activeLink ?? null}
              onClick={changeActiveLink}
            />
            <div className="flex-1 lg:basis-3/5 py-6 px-8">
              {activeSlug ? <LinkInfo link={activeLink!} /> : <LinkCreate />}
            </div>

            {activeSlug && (
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
                      await navigator.clipboard.writeText(activeSlug)
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
