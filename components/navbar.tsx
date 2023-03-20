import Link from "next/link";
import NavLink from "./navlink";
import NavbarMobile from "./navbarMobile";
import React from "react";

export default function Navbar() {
  const [isScroll, setIsScroll] = React.useState(false);

  const onScroll = React.useCallback(() => {
    const { pageYOffset } = window;
    if (pageYOffset > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <nav
      className={`${
        isScroll ? "shadow-md bg-black" : "bg-transparent"
      } z-50 w-full h-20 flex items-center justify-between px-10 md:px-32 fixed top-0`}
    >
      <Link
        href="/"
        className={`text-xl md:text-2xl font-bold tracking-wider ${
          isScroll ? "text-white" : "text-inherit"
        } transition`}
      >
        <span className="text-yellow-500">My</span>TrashBin
      </Link>
      <ul className="md:inline-flex hidden items-center gap-5 text-gray-500">
        <NavLink path="/">Home</NavLink>
        <NavLink path="/monitor">Monitoring</NavLink>
      </ul>
      <NavbarMobile isScroll={isScroll} />
    </nav>
  );
}
