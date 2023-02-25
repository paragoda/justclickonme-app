import { SetStateAction, useState } from "react"
import { Input, Textarea } from "../ui/Input"

export const LinkCreate = () => {
  const [slug, setSlug] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [destination, setDestination] = useState("")

  return (
    <div>
      <button className="py-2 px-10 hidden lg:flex justify-between gap-x-2 items-center border-2 border-green-200 text-green-700">
        Confirm
      </button>

      <Input label="Slug" placeholder="slug" value={slug} setValue={setSlug} />

      <Input
        label="Title"
        placeholder="title"
        value={title}
        setValue={setTitle}
      />

      <Textarea
        value={description}
        setValue={setDescription}
        label="Description"
        placeholder="description to remember for what it's used"
      />

      <Input
        value={destination}
        setValue={setDestination}
        label="Destination"
        placeholder="where to redirect"
      />
    </div>
  )
}
