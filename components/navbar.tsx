import Link from "next/link";
import NavLink from "./navlink";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 md:px-32 fixed top-0">
      <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider">
        <span className="text-yellow-500">My</span>TrashBin
      </Link>
      <ul className="md:inline-flex hidden items-center gap-5 text-gray-500">
        <NavLink path="/">Home</NavLink>
        <NavLink path="/monitoring">Monitoring</NavLink>
        <NavLink path="/about">About</NavLink>
        <NavLink path="/component">Component</NavLink>
        <NavLink path="/contact">Contact</NavLink>
      </ul>
      <NavbarMobile />
    </nav>
  );
}
