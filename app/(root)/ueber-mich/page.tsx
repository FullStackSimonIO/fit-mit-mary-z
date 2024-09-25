import { Ausbildungen } from "@/components/about/Ausbildungen";
import { Metadata } from "next";
import AboutFirst from "@/components/about/AboutFirst";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Über mich",
};

const page = () => {
  return (
    <div>
      <AboutFirst />
      <Ausbildungen />
      {/*<AboutSecond /> */}
    </div>
  );
};

export default page;
