import clsx from "clsx";
import { ArrowRight, Slash } from "lucide-react";
import React from "react";

interface ContentCardProps {
  className?: string;
  title: string;
  description: string;
  label: string;
  link?: string;
  index: number;
  src: string;
}

export const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("relative my-16 flex gap-10", props.className)}
      >
        <section className="relative w-md flex flex-col gap-3">
          <p className="absolute -left-20 text-9xl font-extrabold text-amber-400/40">
            0{props.index + 1}
          </p>
          <div className="flex gap-2 items-center">
            <Slash color="oklch(82.8% 0.189 84.429)" className="rotate-45" />
            <p className="text-sm text-amber-300 font-bold">{props.label}</p>
          </div>
          <h2 className="text-5xl text-white font-bold font-display">
            {props.title}
          </h2>
          <p className="text-xs font-bold text-white">{props.description}</p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-sm font-bold text-amber-300 hover:underline">
              read more
            </p>
            <ArrowRight size={20} color="oklch(82.8% 0.189 84.429)" />
          </div>
        </section>
        <img src={props.src} alt="" className="object-contain w-2xs" />
      </div>
    );
  }
);
