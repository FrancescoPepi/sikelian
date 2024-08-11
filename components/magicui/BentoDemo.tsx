import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Il film siciliano “The Winner – Il Vincitore” trionfa al Roshani International Film Festival",
    description:
      "Il cortometraggio catanese “The Winner – Il Vincitore”, diretto da Marco Ferrara e prodotto",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/Antonella-Barbera-attrice-780x470.jpg"
        className="object-cover"
        // className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-5 lg:col-start-4 lg:col-end-6",
  },
  {
    Icon: FileTextIcon,
    name: "Il film siciliano “The Winner – Il Vincitore” trionfa al Roshani International Film Festival",
    description:
      "Il cortometraggio catanese “The Winner – Il Vincitore”, diretto da Marco Ferrara e prodotto",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/Antonella-Barbera-attrice-780x470.jpg"
        className="object-cover"
        // className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-5 lg:row-end-9 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Il Sicilia Classica Festival a Taormina con Madama Butterfly e Carmen",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2020/04/Taormina-Teatro.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2021/01/acqua-2-780x470.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/TAU_14-Sala-Collezionismo-sullo-sfondo-video-Teatro-Antico-780x470.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-5 lg:row-start-5 lg:row-end-7",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2020/07/Villa-Pennisi-scaled.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-4 lg:col-end-6 lg:row-start-7 lg:row-end-9",
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-10">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
