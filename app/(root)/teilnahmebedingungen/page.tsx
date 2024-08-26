import React from "react";

const TeilnahmebedingungenPage = () => {
  return (
    <section className="bg-primary-backgroundGreen py-12 px-4 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-buttonGreen">
          Teilnahmebedingungen
        </h1>

        <div className="mb-8">
          <p className="text-lg underline text-center text-primary-buttonGreen mb-4">
            Bitte dringend vor dem Kurs anmelden
          </p>
          <h3 className="text-2xl font-semibold text-primary-buttonGreen mb-4">
            Teilnahmebedingungen (AGB)
          </h3>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            (1) Anmeldung & Bezahlung
          </h2>
          <p className="text-gray-700">
            Sie können sich jederzeit über das Online-Kontaktformular auf der
            Webseite anmelden. Ich sende Ihnen daraufhin eine E-Mail-Bestätigung
            sowie ein Anmeldeformular mit allen wichtigen Informationen.
            <br />
            <br />
            Die vollständige Kursgebühr überweisen Sie bitte bis spätestens 7
            Tage vor Kursbeginn an die Bankverbindung, die auf Ihrer Rechnung
            steht.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            (2) Rücktritt vom Kurs
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              (2.1) Sollten Sie trotz Anmeldung nicht am Kurs teilnehmen können,
              geben Sie bitte rechtzeitig Bescheid. Der Rücktritt bis zu einer
              Woche vor Kursbeginn ist kostenfrei möglich. Der Rücktritt ist nur
              schriftlich (per E-Mail oder WhatsApp) möglich.
            </li>
            <li>
              (2.2) Bei einer späteren Abmeldung (7 Tage vor Kursbeginn) ist
              hingegen der gesamte Kursbeitrag fällig. Ein Anspruch auf
              Rückzahlung bei verspätetem Rücktritt oder Nichtteilnahme besteht
              nicht.
            </li>
            <li>
              (2.3) Sollten Sie aus gesundheitlichen oder anderen dringlichen
              Gründen am kompletten Kurs nicht teilnehmen können, bestehen
              (gegen Vorlage eines ärztlichen Attestes) die Möglichkeiten, eine
              Gutschrift des Kursbeitrages für einen späteren Kurs vorzunehmen
              oder Ihren Kurs an eine andere Person zu übertragen. Diese
              Regelung gilt nur für komplette Kurse.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            (3) Versäumte Stunden
          </h2>
          <p className="text-gray-700">
            Sollten Sie einzelne Stunden versäumen, können Sie diese nicht
            nachholen.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            (4) Haftung
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              (4.1) Die Haftung des Veranstalters wird auf Vorsatz und grobe
              Fahrlässigkeit beschränkt.
            </li>
            <li>
              (4.2) Der Veranstalter übernimmt keine Haftung für Sach- oder
              Personenschäden, die nicht auf Vorsatz oder grober Fahrlässigkeit
              beruhen.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary-buttonGreen mb-4">
            (5) Änderungen am Kurs
          </h2>
          <p className="text-gray-700">
            Ich behalte mir vor, Änderungen im Kursplan z.B. durch Krankheit
            oder zu geringe Teilnehmerzahl vorzunehmen. Eine entsprechende
            Ankündigung erfolgt zeitnah per Mail, WhatsApp und auf der Homepage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeilnahmebedingungenPage;
