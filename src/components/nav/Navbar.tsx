import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const NavbarLinks = () => {
  return (
    <>
      <li>
        <Link href="/plans">Subscription plans</Link>
      </li>
      <li>
        <Link href="/benefits">Benefits</Link>
      </li>
      <li>
        <Link href="/">Why you need it?</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
    </>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar shadow-sm mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavbarLinks />
          </ul>
        </div>
        <Link className="normal-case text-xl" href="/">
          <img src="/logo.svg" alt="JustClickOnMe" className="h-7 mx-2" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary" href="/auth">
          Get started
        </Link>
      </div>
    </nav>
  );
};
