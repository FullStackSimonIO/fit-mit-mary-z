"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev: any) => !prev);
  };

  return (
    <nav className="bg-[#EEFFF3] fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/logos/logoGreen.png"
            className="h-8"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="self-center text-[#2D4542] text-sm lg:text-2xl  font-semibold whitespace-nowrap">
            FIT-MIT-MARY
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.button
            type="button"
            className="hidden md:block text-white bg-[#2D4542] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#3b6563",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            TERMIN SICHERN
          </motion.button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#2D4542] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#EEFFF3]">
            <li>
              <motion.a
                href="/"
                className="block py-2 px-3 text-white rounded md:text-[#2D4542] md:p-0"
                aria-current="page"
                whileHover={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/ueber-mich"
                className="block py-2 px-3 text-white rounded md:text-[#2D4542] md:p-0"
                whileHover={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
              >
                Über Mich
              </motion.a>
            </li>
            <li>
              <motion.a
                href="angebote"
                className="block py-2 px-3 text-white rounded md:text-[#2D4542] md:p-0"
                whileHover={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
              >
                Angebote
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/kurstermine"
                className="block py-2 px-3 text-white rounded md:text-[#2D4542] md:p-0"
                whileHover={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
              >
                Kurstermine
              </motion.a>
            </li>
            <li>
              <motion.a
                href="/kontakt"
                className="block py-2 px-3 text-white rounded md:text-[#2D4542] md:p-0"
                whileHover={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  scale: 1.1,
                  color: "#3b6563",
                  transition: { duration: 0.3 },
                }}
              >
                Kontakt
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
