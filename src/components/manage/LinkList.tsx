import { LinkType } from "@/utils/types"
import { Dispatch, SetStateAction } from "react"
import { LinkIcon } from "../ui/icons"

const LinkListItem = () => {}

export const LinkList = ({
  items,
  active,
  onClick,
}: {
  items: LinkType[]
  active: LinkType | null
  onClick: (link: LinkType) => void
}) => {
  return (
    <div className=" border-b-2 lg:basis-1/5 lg:border-b-0 lg:border-r-2">
      {items.map((folder) => (
        <div
          className={`flex gap-3 items-center cursor-pointer py-3 px-5 ${
            active?.slug == folder.slug ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          key={folder.slug}
          onClick={() => onClick(folder)}
        >
          <LinkIcon />
          {folder.slug}
        </div>
      ))}
    </div>
  )
}
