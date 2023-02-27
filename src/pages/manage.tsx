import { DocumentsIcon, EditIcon } from "@/shared/ui/icons"
import { LinkCreate } from "@/components/manage/LinkCreate"
import { LinkInfo } from "@/components/manage/LinkInfo"
import { LinkList } from "@/components/manage/LinkList"
import { ManageNavbar } from "@/components/nav/ManageNavbar"
import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import { LinkType } from "@/shared/utils/types"

const folders = [
  {
    slug: "flurium",
    title: "Flurium team github",
    created: "February 24, 2023 1:50 PM",
    description: "Link with same slug as folder",
    link: "justclickon.me/flurium",
    destination: "https://github.com/flurium",
    sublinks: [
      {
        slug: "auth",
        title: "Auth confirmation at JustClickOnMe",
        created: "February 24, 2023 1:50 PM",
        description: "Link to auth of JustClickOnMe.",
        link: "justclickon.me/flurium/auth",
        destination:
          "https://drive.google.com/file/d/1leYgFAsa5Gwc4g59N9gbiVSGZE5i0v-B/view?usp=share_link",
      },
      {
        slug: "front",
        title: "Frontend on JustClickOnMe",
        created: "February 24, 2023 1:50 PM",
        description:
          "Link to frontend of JustClickOnMe, should be used for redirects. It’s small description to better tcrs ntncrsm trcstn rcmst trcs tnmrcnmst nrcnst tc tcxrgqo cogqc qpgc orqofg cxqgckqlyeaintcrsiantrcst ohcrhtso crht rcst rcsxt xyl grgq csrqrcsqq tcrsqt qcrsqt crxsqqu;qlqrnes rnegqr tqersqgfcqfb gofcqgcq gqg oyqtoqnderstand purpose of link.",
        link: "justclickon.me/flurium/front",
        destination: "https://github.com/flurium/justclickonme-front",
      },
    ],
  },
]

const Manage: NextPage = () => {
  const [active, setActive] = useState<null | LinkType>(null)

  const [top, setTop] = useState<LinkType[]>(folders)

  const changeActiveLink = (link: LinkType, list: LinkType[]) => {
    setActive(link)
    if (list.length != 0) {
      setTop(list)
    }
  }

  return (
    <>
      <Head>
        <title>Manage your links | JustClickOnMe</title>
      </Head>

      <div className="h-full flex flex-col ">
        <ManageNavbar />

        <main className="flex-1 flex flex-col pb-5">
          <button onClick={() => setTop([])}>{"<"}</button>
          <div className="border-2  flex-1 flex flex-col lg:flex-row">
            <LinkList items={top} active={active} onClick={setActive} />
            <LinkList
              items={active?.sublinks ?? []}
              active={active}
              onClick={(link) => changeActiveLink(link, active?.sublinks ?? [])}
            />
            <div className="flex-1 lg:basis-3/5 py-6 px-8">
              {active ? <LinkInfo link={active} /> : <LinkCreate />}
            </div>

            {active && (
              <div className="flex border-t-2 lg:hidden">
                <button className="flex-grow py-3 flex justify-center gap-x-2 items-center ">
                  <EditIcon />
                  Edit
                </button>
                <div className="border-r-2 "></div>
                <button
                  className="py-3 flex-grow justify-center gap-x-2 items-center  flex "
                  onClick={async () => {
                    if (navigator.clipboard) {
                      await navigator.clipboard.writeText(active?.link ?? "")
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
