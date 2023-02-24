import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png"

const NavbarLinks = () => {
  return (
    <>
      <Link href="/plans">Subscription plans</Link>
      <Link href="/benefits">Benefits</Link>
      <Link href="/">Why you need it?</Link>
      <Link href="/faq">FAQ</Link>
    </>
  )
}

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow-sm mb-2 py-3">
      <div className="navbar-start">
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
          <img src="/logo.svg" alt="JustClickOnMe" className="h-7 mx-2" />
        </Link>
      </div>
      <div className="hidden lg:flex gap-8">
        <NavbarLinks />
      </div>
      <Link
        className=" py-2 px-6 border-blue-100 text-blue-600 hover:bg-blue-100 border-2"
        href="/auth"
      >
        Get a plan
      </Link>
    </nav>
  )
}
