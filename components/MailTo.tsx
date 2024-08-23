"use client";
import { useRouter } from "next/navigation";

export const MailTo = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("mailto:info@fit-mit-mary.de")}
    >
      Click me
    </button>
  );
};
