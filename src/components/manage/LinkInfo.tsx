import { LinkType } from "@/utils/types"
import Link from "next/link"
import { ArrowRightIcon, DocumentsIcon, EditIcon } from "../icons"

export const LinkInfo = ({ link }: { link: LinkType }) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{link.title}</h1>
          <small>{link.created}</small>
        </div>

        <button className="py-2 px-10 hidden lg:flex justify-between gap-x-2 items-center border-2">
          <EditIcon />
          Edit
        </button>
      </div>
      <p className="mt-3">{link.description}</p>

      <div className="flex justify-between items-center">
        <Link
          href={`https://${link.link}`}
          className="text-xl font-semibold mt-12 block text-blue-500"
        >
          {link.link}
        </Link>
        <button className="py-2 px-10  justify-between gap-x-2 items-center border-2 hidden lg:flex">
          <DocumentsIcon />
          Copy
        </button>
      </div>

      <div className="mt-3 flex gap-2 items-start">
        <ArrowRightIcon className="w-10 lg:w-5 mt-1 lg:mt-1.5" />
        <Link className="break-all" href={link.destination}>
          {link.destination}
        </Link>
      </div>
    </div>
  )
}
