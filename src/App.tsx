import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import IMG1 from "./assets/01.png";
import IMG2 from "./assets/02.jpg";
import IMG3 from "./assets/03.png";
import HEROIMG from "./assets/HEROGB.jpg";
import { ContentCard } from "./components/ContentCard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Socials } from "./components/Socials";
import { TextHero } from "./components/TextHero";
import { CONTENTS } from "./consts";

const IMGs = [IMG1, IMG2, IMG3];

export default function App() {
  const [view, setView] = useState(0);
  const tabRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleSelectView = (index: number) => {
    setView(index);
    if (tabRef.current[index - 1]) {
      if (index - 1 === 0) {
        headerRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        tabRef.current[index - 1]?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="ralative p-10 flex flex-col items-center bg-page-bg">
      <img src={HEROIMG} alt="HG" className="absolute object-cover top-0" />
      <Header ref={headerRef} />
      <section className="relative flex justify-between w-full">
        <Socials />
        <TextHero refFooter={footerRef} />
        <p className="h-2 w-2 text-red-500" />
        <Slider
          className="fixed right-20"
          view={view}
          onclick={(index) => handleSelectView(index)}
        />
      </section>
      {CONTENTS.map((content, index) => (
        <motion.div
          key={content.label}
          onViewportEnter={() => setView(index + 1)}
          viewport={{ once: false }}
        >
          <ContentCard
            src={IMGs[index]}
            index={index}
            ref={(el) => {
              if (el) tabRef.current[index] = el;
            }}
            title={content.title}
            label={content.label}
            description={content.description}
            className={clsx(index === 1 && "flex-row-reverse")}
          />
        </motion.div>
      ))}
      <Footer ref={footerRef} />
    </div>
  );
}
