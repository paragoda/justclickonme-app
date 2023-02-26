import { Dispatch, SetStateAction } from "react"

type InputProps = {
  label: string
  className?: string
  placeholder: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export const Input = ({
  label,
  className,
  placeholder,
  value,
  setValue,
}: InputProps) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 border-2 py-3 px-6 block w-full focus:border-gray-300"
        placeholder={placeholder}
      />
    </div>
  )
}

export const Textarea = ({
  label,
  className,
  placeholder,
  value,
  setValue,
}: InputProps) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea
        value={value}
        rows={5}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 border-2 py-3 px-6 block w-full min-h-10 focus:border-gray-300"
        placeholder={placeholder}
      />
    </div>
  )
}
