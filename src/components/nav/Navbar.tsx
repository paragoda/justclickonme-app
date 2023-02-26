import { router } from "@/utils/router"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png"

const NavbarLinks = () => {
  return (
    <>
      <Link href={router.pricing}>Pricing</Link>
      <Link href={router.benefits}>Benefits</Link>
    </>
  )
}

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b mb-2 py-3">
      <div>
        {/* <div className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavbarLinks />
          </ul>
        </div> */}
        <Link href="/">
          <Image
            src={logo}
            alt="JustClickOnMe"
            className="h-6 w-auto mx-2"
            quality={100}
          />
        </Link>
      </div>
      <div className="hidden lg:flex gap-8">
        <NavbarLinks />
      </div>
      <Link
        className=" py-2 px-6 border-blue-100 text-blue-600 hover:bg-blue-100 border-2"
        href={router.auth}
      >
        Get a plan
      </Link>
    </nav>
  )
}
