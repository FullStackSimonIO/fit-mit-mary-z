import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2D4542]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                src="/assets/logos/LogoNoTextWhite.png"
                className="h-8 me-3"
                alt="Logo"
                width={40}
                height={48}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                FIT-MIT-MARIA
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resourcen:
              </h2>
              <ul className="text-gray-50 font-medium">
                <li className="mb-2">
                  <a href="/ueber-mich" className="hover:underline">
                    Über Mich
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/angebote" className="hover:underline">
                    Angebote
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/kurse" className="hover:underline">
                    Kursübersicht
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Rechtliches:
              </h2>
              <ul className="text-gray-50 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline ">
                    Nutzungsbedingungen
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Lizenzvereinbarung
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    AGB
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Kontakt:
              </h2>
              <ul className="text-gray-50 font-medium">
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/maria.zillinger"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/fitmitmaryz"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/kontakt" className="hover:underline">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-50 sm:text-center ">
            © 2024{" "}
            <a href="https://fullstacksimon.dev" className="hover:underline">
              FullStackSimon™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/fitmitmaryz/"
              className="text-gray-50 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagram className="w-5 h-5 " />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/maria.zillinger"
              className="text-gray-50 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaFacebook className="w-5 h-5" />

              <span className="sr-only">Facebook Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
