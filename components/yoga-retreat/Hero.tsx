import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: Header1Props) => {
  const { heading, description, buttons, image } = {
    ...Header1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <ul className="mb-6 text-lg md:mb-8 list-disc list-inside">
              <li>27.06.2025 - 29.06.2025</li>
              <li>Bamberg am Wildkogel</li>
              <li>50€ Frühbucher Rabatt bis 28.02.2025</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              className="w-full object-cover"
              alt="Yoga Retreat Image"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Props = {
  heading: "Yoga Retreat",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Jetzt Frühbucher Rabatt sichern" }],
  image: {
    src: "/assets/yoga-retreat/cover-yoga-retreat.png",
    alt: "Relume placeholder image",
  },
};
