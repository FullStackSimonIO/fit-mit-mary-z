import { Sevillana } from "next/font/google";
import Image from "next/image";
import { infoData } from "@/data";

const sevillana = Sevillana({
  weight: "400",
  subsets: ["latin"],
});

const Info = () => {
  return (
    <section className="min-h-screen w-full bg-[#EEFFF3] flex items-center justify-center">
      <div className="gap-8 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-primary-buttonGreen">
            {infoData[0].title}
          </h2>
          <p className="mb-4 text-primary-paragraph font-semibold">
            {infoData[0].firstParagraph}
          </p>
          <p className="text-primary-paragraph mb-4 font-semibold">
            {infoData[0].secondParagraph}
          </p>
          <p className="text-primary-paragraph mb-4 font-semibold">
            {infoData[0].thirdParagraph}
          </p>
          <div className="py-4 sm:py-8">
            <h4
              className={`flex items-center justify-center text-primary-buttonGreen font-bold text-4xl sm:text-5xl ${sevillana.className}`}
            >
              Maria
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8">
          <Image
            className="w-full h-auto max-w-xs sm:max-w-sm rounded-lg border-4 border-primary-buttonGreen"
            src={infoData[0].firstImgUrl}
            alt={infoData[0].firstImgAlt}
            width={100}
            height={100}
          />
          <Image
            className="mt-2 sm:mt-4 w-full h-auto max-w-xs sm:max-w-sm lg:mt-10 rounded-lg border-4 border-primary-buttonGreen"
            src={infoData[0].secondImgUrl}
            alt={infoData[0].secondImgAlt}
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
