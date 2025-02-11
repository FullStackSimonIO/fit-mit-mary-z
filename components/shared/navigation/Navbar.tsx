"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

const links = [
  {
    name: "startseite",
    path: "/",
  },
  {
    name: "über mich",
    path: "/ueber-mich",
  },
  {
    name: "angebote",
    path: "/angebote",
  },
  {
    name: "kursübersicht",
    path: "/kursuebersicht",
  },
  {
    name: "kontakt",
    path: "/kontakt",
  },
  {
    name: "yoga retreat",
    path: "/yoga-retreat",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${link.path === pathname && "text-primary-buttonGreen border-b-2 border-primary-buttonGreen"} text-black capitalize font-semibold text-xl hover:text-primary-buttonGreen transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
