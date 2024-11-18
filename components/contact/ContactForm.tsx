"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-primary-backgroundGreen w-full  flex-col">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
          <h2 className="mb-4 pt-10 text-4xl tracking-tight font-extrabold text-primary-buttonGreen">
            Kontaktiere Mich:
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              className="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Vorname:
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block p-3 w-full text-sm placeholder:text-primary-backgroundGreen text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="sabine@mustermann.de"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Telefonnummer:
                </label>
                <input
                  type="number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block p-3 w-full text-sm placeholder:text-primary-backgroundGreen text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg border border-gray-300 shadow-sm focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="+151 345 6789"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-primary-buttonGreen">
                  Deine Nachricht:
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block placeholder:text-primary-backgroundGreen p-2.5 w-full text-sm text-primary-backgroundGreen bg-primary-buttonGreen rounded-lg shadow-sm border border-gray-300 focus:ring-primary-paragraph focus:border-primary-paragraph"
                  placeholder="Nachricht"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-buttonGreen sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-paragraph"
                disabled={status === "sending"}
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
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-[#2D4542] rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                  fill="#EEFFF3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-[#2D4542]">
                Kontaktinformationen:
              </p>
              <p className="text-gray-500">
                Maria Zillinger <br />
                0152 53407610 <br />
                info@fit-mit-mary.de
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-primary-buttonGreen rounded-lg lg:h-16 lg:w-16">
                <svg
                  className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8"
                  fill="#EEFFF3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900">Addresse:</p>
              <p className="text-gray-500">
                Osterhofener Staße 9<br />
                94550 Künzing <br />
                Deutschland
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
