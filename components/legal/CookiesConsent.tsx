"use client";
import React, { useEffect, useState } from "react";

import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});

    if (showConsent) return null;

    return (
      <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
        <div className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-primary-buttonGreen">
          <span className="text-gray-900 text-base mr-16">
            Diese Webseite verwendet Cookies, um die Benutzererfahrung zu
            verbessern. Durch die Nutzung dieser Webseite erklären Sie sich mit{" "}
            <Link href="/nutzungsbedingungen">unseren Nutzungsbedingungen</Link>{" "}
            einverstanden.
          </span>
          <button
            className="bg-primary-buttonGreen py-2 px-10 rounded text-white"
            onClick={() => acceptCookie()}
          >
            Akzeptieren
          </button>
        </div>
        CookiesConsent
      </div>
    );
  };
}
