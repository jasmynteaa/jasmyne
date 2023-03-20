import { BiChevronDown } from "react-icons/bi";
import NavLink from "./navlink";
import React from "react";

export default function NavbarMobile() {
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
        className={`${
          show ? "visible" : "invisible"
        } absolute border-[1px] border-yellow-100 shadow-md rounded-md h-fit w-72 -right-5 p-4 flex flex-col gap-4`}
      >
        <NavLink path="/">Home</NavLink>
        <NavLink path="/monitoring">Monitoring</NavLink>
      </div>
    </ul>
  );
}
