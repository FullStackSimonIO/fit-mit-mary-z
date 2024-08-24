"use client";
import React from "react";
import { motion } from "framer-motion";

interface TableProps {
  headers: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="flex justify-center py-8">
      <motion.div
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.table
          className="w-full text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead className="bg-primary-buttonGreen text-white">
            <tr>
              {headers.map((header, index) => (
                <motion.th
                  key={index}
                  className="px-4 py-3 text-sm font-semibold uppercase tracking-wide"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {header}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                className="border-b last:border-none hover:bg-primary-backgroundGreen/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * rowIndex }}
                whileHover={{ scale: 1.01 }}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

// Beispiel-Daten und Nutzung der Komponente
const ErnährungsberatungTable = () => {
  const headers = ["Angebot", "Dauer", "Preis"];
  const data = [
    [
      "Ersttermin inkl. Anamnese, Ernährungsprotokollauswertung, Ernährungsplanerstellung, Rezepte",
      "90 Minuten",
      "€120",
    ],
    ["Folgetermin ohne Anamnese", "60 Minuten", "€65"],
    ["Folgetermin ohne Anamnese", "90 Minuten", "€85"],
  ];

  return <Table headers={headers} data={data} />;
};

export default ErnährungsberatungTable;
