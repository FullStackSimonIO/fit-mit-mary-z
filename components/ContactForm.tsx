// /app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { useTransition } from "react";
import { sendEmail } from "../app/actions/sendEmail";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        const result = await sendEmail(formData);
        if (result.success) {
          setStatus("sent");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    });
  };

  return (
    <section className="bg-primary-backgroundGreen w-full h-screen flex-col items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
          <h2 className="mb-4 pt-10 text-4xl tracking-tight font-extrabold text-primary-buttonGreen">
            Kontaktiere Mich:
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Vorname:
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="block p-3 w-full placeholder:text-primary-backgroundGreen text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-primary-paragraph shadow-sm focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="Sabine"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Nachname:
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="block p-3 w-full text-sm placeholder:text-primary-backgroundGreen text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="Mustermann"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  E-Mail:
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow-sm bg-primary-buttonGreen placeholder:text-primary-backgroundGreen border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-paragraph focus:border-primary-paragraph block w-full p-2.5"
                  placeholder="sabine@mustermann.de"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Telefonnummer:
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="block p-3 w-full text-sm text-gray-900 placeholder:text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="+151 345 6789"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Deine Nachricht:
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="block placeholder:text-primary-backgroundGreen p-2.5 w-full text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg shadow-sm border border-gray-300 focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="Nachricht"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-buttonGreen sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-paragraph"
                disabled={isPending || status === "sending"}
              >
                Nachricht senden
              </button>
              {status === "sent" && (
                <p className="text-green-500 mt-4">Nachricht gesendet!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-4">
                  Fehler beim Senden der Nachricht.
                </p>
              )}
            </form>
          </div>
          <div className="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            {/* Kontaktinformationen ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
