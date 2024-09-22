"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Resourcen",
      links: [
        { href: "/ueber-mich", text: "Über Mich" },
        { href: "/angebote", text: "Angebote" },
        { href: "/kurse", text: "Kursübersicht" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { href: "/teilnahmebedingungen", text: "Teilnahmebedingungen" },
        { href: "/datenschutzverordnung", text: "Datenschutzverordnung" },
        { href: "/impressum", text: "Impressum" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { href: "https://www.facebook.com/maria.zillinger", text: "Facebook" },
        { href: "https://www.instagram.com/fitmitmaryz", text: "Instagram" },
        { href: "/kontakt", text: "Kontakt" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/simon.edh/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://github.com/fullstacksimonio",
      icon: FaGithub,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/simon-edholzer-433431262/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.discordapp.com/users/786536339604242434",
      icon: FaDiscord,
      label: "Discord",
    },
  ];

  return (
    <footer className="bg-[#2D4542] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/assets/logos/LogoNoTextWhite.png"
                className="h-10 w-auto mr-3"
                alt="FIT-MIT-MARIA Logo"
                width={40}
                height={48}
                unoptimized
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                FIT-MIT-MARIA
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Entdecken Sie Ihre innere Stärke und Balance durch unsere
              maßgeschneiderten Yoga-Kurse.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="bg-white text-gray-900"
              />
              <Button
                type="submit"
                className="bg-[#EEFFF3] text-[#2D4542] hover:bg-[#C1FFD7]"
              >
                Newsletter
              </Button>
            </form>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-4 text-sm font-semibold uppercase">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-[#EEFFF3] transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © {currentYear}{" "}
            <a href="https://fullstacksimon.dev" className="hover:underline">
              FullStackSimon™
            </a>
            . Alle Rechte vorbehalten.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
