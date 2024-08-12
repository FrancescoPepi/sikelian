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
    name: "Unione ciechi e Irifor, nel Kikki Village il secondo Campo estivo per il 2024",
    description:
      "Cominciato il 2 agosto e rivolto a quindici bambini e ragazzi non vedenti e ipovedenti…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/d-La-piscina-accessibile-anche-in-carrozzina-780x470.jpg"
        className="object-cover"
        // className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-6 lg:row-end-10 lg:col-start-1 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Il Sicilia Classica Festival a Taormina con Madama Butterfly e Carmen",
    description:
      "Nuovo titolo operistico per la squadra del Sicilia Classica Festival, che per la prima volta…",
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
    Icon: InputIcon,
    name: "Il Sicilia Classica Festival a Taormina con Madama Butterfly e Carmen",
    description: "",
    //   "Nuovo titolo operistico per la squadra del Sicilia Classica Festival, che per la prima volta…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2020/04/Taormina-Teatro.jpg"
        className="absolute top-0 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "Sicilia: una sete ancora una volta inappagata",
    description:
      "Ah, la Sicilia! Isola incantevole, dove il sole splende generoso e l’acqua… beh, l’acqua sembra…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2021/01/acqua-2-780x470.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-6",
  },
  {
    Icon: GlobeIcon,
    name: "Sicilia: una sete ancora una volta inappagata",
    description: "",
    //   "Ah, la Sicilia! Isola incantevole, dove il sole splende generoso e l’acqua… beh, l’acqua sembra…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2021/01/acqua-2-780x470.jpg"
        className="h-full absolute top-0  opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-7",
  },
  {
    Icon: CalendarIcon,
    name: "Taormina, inaugurata la mostra sull’antica Tauromenion",
    description: "",
    // "E’ aperta al pubblico la grande mostra archeologica e multimediale dal titolo “Da Tauromenion a…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/TAU_14-Sala-Collezionismo-sullo-sfondo-video-Teatro-Antico-780x470.jpg"
        // className="absolute -top-20 opacity-60"
        className="absolute scale-[2.2] rigth-0 bottom-0 opacity-60"
      />
    ),
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-5 lg:row-end-8",
  },
  {
    Icon: CalendarIcon,
    name: "Taormina, inaugurata la mostra sull’antica Tauromenion",
    description: "",
    //   "E’ aperta al pubblico la grande mostra archeologica e multimediale dal titolo “Da Tauromenion a…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/TAU_14-Sala-Collezionismo-sullo-sfondo-video-Teatro-Antico-780x470.jpg"
        className="absolute scale-[2.2] rigth-0 bottom-0 opacity-60"
      />
    ),
    className: "lg:col-start-5 lg:col-end-6 lg:row-start-5 lg:row-end-8",
  },
  {
    Icon: BellIcon,
    name: "Villa Pennisi in Musica omaggia Ezio Bosso",
    description:
      "Dopo la prima parte itinerante, tra Acireale e Acitrezza, il Festival dall’8 al 13 agosto…",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2020/04/Taormina-Teatro.jpg"
        className="absolute -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-4 lg:col-end-6 lg:row-start-8 lg:row-end-10",
  },
  {
    Icon: BellIcon,
    name: "Amine Khalif e Angela Carini vittime della strumentalizzazione politica e sociale",
    description: "",
    //   "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="https://www.sikelian.it/wp-content/uploads/2024/08/parigi-2024-780x470.jpg"
        className="scale-150 bottom-0 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-7 lg:row-end-10",
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
