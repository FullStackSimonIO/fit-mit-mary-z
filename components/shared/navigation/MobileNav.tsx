"use client";
import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "startseite", path: "/" },
  { name: "über mich", path: "/ueber-mich" },
  { name: "angebote", path: "/angebote" },
  { name: "kursübersicht", path: "/kursuebersicht" },
  { name: "kontakt", path: "/kontakt" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close the menu when the pathname changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary-buttonGreen" />
      </SheetTrigger>
      <SheetContent className="flex bg-primary-backgroundGreen flex-col">
        {/* Logo */}
        <div className="my-12 flex items-center justify-center text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-3xl font-semibold">Fit Mit Mary</h1>
            <div className="flex items-center justify-center pt-4">
              <Image
                src="/assets/logos/logoGreen.png"
                alt="logo"
                width={48}
                height={48}
                unoptimized
              />
            </div>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-primary-buttonGreen border-b-2 border-primary-buttonGreen"
              } text-xl capitalize hover:text-primary-buttonGreen transition-all`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
