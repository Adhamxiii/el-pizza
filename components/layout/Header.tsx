"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;

  if (userName && userName?.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="" className="text-2xl font-bold text-primary">
        EL PIZZA
      </Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      <nav className="flex items-center gap-4">
        {status === "authenticated" && (
          <>
            <Link href="/profile" className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href="/login">Login</Link>
            <Link
              href="/register"
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
