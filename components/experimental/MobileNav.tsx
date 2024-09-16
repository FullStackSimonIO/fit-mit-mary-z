"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    name: "kontakt",
    path: "/kontakt",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex  justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary-buttonGreen" />
      </SheetTrigger>
      <SheetContent className="flex bg-primary-backgroundGreen flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 flex items-center justify-center text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">Fit Mit Mary</h1>
            <div className="flex items-center justify-center pt-4">
              <Image
                src="/assets/logos/logoGreen.png"
                alt="logo"
                width={48}
                height={48}
              />
            </div>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${link.path === pathname && "text-primary-buttonGreen border-b-2 border-primary-buttonGreen"} text-xl capitalize hover:textprimary-buttonGreen transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
