import clsx from "clsx";
import { ArrowDown, Slash } from "lucide-react";

interface TextHeroProps {
  className?: string;
  refFooter: React.RefObject<HTMLParagraphElement | null>;
}

export const TextHero = ({ className, refFooter }: TextHeroProps) => {
  const scrollDown = () => {
    refFooter.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={clsx("flex flex-col gap-5 xl:w-1/2 mt-20", className)}>
      <div className="flex gap-2 items-center">
        <Slash color="oklch(82.8% 0.189 84.429)" className="rotate-45" />
        <p className="text-sm font-bold text-amber-400">A HIKING GUIDE</p>
      </div>

      <h1 className="text-2xl font-display text-white font-black xl:text-8xl">
        Be Prepared For The Mountains And Beyong!
      </h1>
      <div className="flex gap-2 cursor-pointer">
        <p
          onClick={scrollDown}
          className="text-sm hover:underline font-bold text-white"
        >
          scroll down
        </p>
        <ArrowDown color="white" size={20} />
      </div>
    </section>
  );
};
