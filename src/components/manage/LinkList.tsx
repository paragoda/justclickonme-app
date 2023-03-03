import { LinkType } from "@/shared/utils/types"
import { Dispatch, SetStateAction } from "react"
import { LinkIcon } from "@/shared/ui/icons"

const LinkListItem = () => {}

export const LinkList = ({
  items,
  active,
  onClick,
}: {
  items: LinkType[]
  active: LinkType | null
  onClick: (link: string) => void
}) => {
  return (
    <div className=" border-b lg:basis-1/5 lg:border-b-0 lg:border-r">
      {items.map((folder) => (
        <div
          className={`flex gap-3 items-center cursor-pointer py-3 px-5 ${
            active?.slug == folder.slug ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
          key={folder.slug}
          onClick={() => onClick(folder.slug)}
        >
          <LinkIcon />
          {folder.slug.substring(folder.slug.lastIndexOf("/") + 1)}
        </div>
      ))}
    </div>
  )
}
