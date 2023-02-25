import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png"

export const ManageNavbar = () => {
  return (
    <nav className="mb-5 border-b py-3 flex items-center justify-between">
      <div className="flex gap-3">
        <Link href="/">
          <Image
            src={logo}
            alt="JustClickOnMe"
            className="h-6 w-auto mx-2"
            quality={100}
          />
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
  )
}
