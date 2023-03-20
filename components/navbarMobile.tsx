import { BiChevronDown } from "react-icons/bi";
import NavLink from "./navlink";
import React from "react";
import Link from "next/link";

interface NavbarMobileProps {
  isScroll: boolean;
}

export default function NavbarMobile({ isScroll }: NavbarMobileProps) {
  const [show, setShow] = React.useState(false);

  const toggleShow = React.useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <ul className="inline-block md:hidden relative">
      <button
        onClick={toggleShow}
        className="flex items-center text-base text-zinc-200"
      >
        Browse
        <BiChevronDown
          className={`${show ? "rotate-180" : "rotate-0"} transition`}
        />
      </button>
      <div
        className={`${show ? "visible" : "invisible"} ${
          isScroll ? "bg-white text-zinc-900" : "text-zinc-200"
        } absolute border-[1px] border-yellow-100 shadow-md rounded-md h-fit w-72 -right-5 p-4 flex flex-col gap-4`}
      >
        <Link
          href="/"
          onClick={() => {
            setShow(false);
          }}
        >
          Home
        </Link>
        <Link
          href="/monitor"
          onClick={() => {
            setShow(false);
          }}
        >
          Monitoring
        </Link>
      </div>
    </ul>
  );
}
