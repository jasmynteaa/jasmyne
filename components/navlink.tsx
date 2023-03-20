import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

export default function NavLink({ path, children }: NavLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={path}
      className={`${
        router.pathname === path ? "text-gray-700" : ""
      } transition hover:text-gray-700`}
    >
      {children}
    </Link>
  );
}
