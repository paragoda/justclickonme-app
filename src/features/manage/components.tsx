import { ArrowRightIcon, DocumentsIcon, EditIcon } from "@/shared/ui/icons"
import { Input, Textarea } from "@/shared/ui/inputs"
import { LinkType } from "@/shared/utils/types"
import Link from "next/link"
import { FormEvent, useState } from "react"

type LinkFormProps = {
  slug?: string
  title?: string
  description?: string
  destination?: string
  onSubmit?: () => void
}

export const LinkForm = ({
  slug = "",
  title = "",
  description = "",
  destination = "",
}: LinkFormProps) => {
  const [slugInput, setSlugInput] = useState("")
  const [titleInput, setTitleInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [destinationInput, setDestinationInput] = useState("")

  const submit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <button className="py-2 px-10 hidden lg:flex justify-between gap-x-2 items-center border-2 border-green-200 text-green-700">
        Confirm
      </button>

      <Input label="Slug" placeholder="slug" value={slug} setValue={setSlugInput} />

      <Input label="Title" placeholder="title" value={title} setValue={setTitleInput} />

      <Textarea
        value={description}
        setValue={setDescriptionInput}
        label="Description"
        placeholder="description to remember for what it's used"
      />

      <Input
        value={destination}
        setValue={setDestinationInput}
        label="Destination"
        placeholder="where to redirect"
      />
    </form>
  )
}

export const LinkInfo = ({ link, onEditClick }: { link: LinkType; onEditClick: () => void }) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{link.title}</h1>
          <small>{link.created}</small>
        </div>

        <button
          className="py-2 px-10 hidden lg:flex justify-between gap-x-2 items-center border-2"
          onClick={onEditClick}
        >
          <EditIcon />
          Edit
        </button>
      </div>
      <p className="mt-3">{link.description}</p>

      {link.description == "" ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
