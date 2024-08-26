import React from "react";

const ImpressumPage = () => {
  return (
    <section className="bg-primary-backgroundGreen py-12 px-4 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-buttonGreen">
          Impressum
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            Verantwortlich für den Inhalt
          </h2>
          <ul className="list-none space-y-2 text-gray-700">
            <li>Maria Zillinger</li>
            <li>Fit mit Mary</li>
            <li>Osterhofener Straße 9</li>
            <li>Im Erdgeschoss</li>
            <li>94550 Künzing</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            Kontakt
          </h2>
          <ul className="list-none space-y-2 text-gray-700">
            <li>Telefon: +49(0)15253407610</li>
            <li>Telefax: +49(0)32123407610</li>
            <li>
              E-Mail:{" "}
              <a
                href="mailto:info@fit-mit-mary.de"
                className="text-primary-buttonGreen underline"
              >
                info@fit-mit-mary.de
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <ul className="list-none space-y-2 text-gray-700">
            <li>Fitnesstrainerin</li>
            <li>Verliehen in: Deutschland</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            Redaktionell verantwortlich
          </h2>
          <ul className="list-none space-y-2 text-gray-700">
            <li>Maria Zillinger</li>
            <li>Osterhofener Straße 9</li>
            <li>94550 Künzing</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            EU-Streitschlichtung
          </h2>
          <p className="text-gray-700">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-primary-buttonGreen underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-gray-700 mt-2">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>Quelle: eRecht24</p>
        </div>
      </div>
    </section>
  );
};

export default ImpressumPage;
