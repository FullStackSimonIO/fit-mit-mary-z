import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import CTAButton from "../CTA";

const Navigation = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image
              src="/assets/logos/logoGreen.png"
              alt="fit mit mary logo"
              width={32}
              height={32}
              unoptimized
            />
            <h1 className="text-4xl font-semibold text-primary-buttonGreen pl-4">
              Fit-Mit-Mary
            </h1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <CTAButton />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
