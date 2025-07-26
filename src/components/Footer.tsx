import clsx from "clsx";
import React from "react";
import { LOGO } from "./LOGO";

interface FooterProps {
  className?: string;
}

const items1 = [
  "More on The Blog",
  "About MNTN",
  "Contributors & Writers",
  "Write For Us",
  "Contact Us",
  "Privacy Policy",
];

const items2 = ["More on MNTN", "The Team", "Jobs", "Press"];

export const Footer = React.forwardRef<HTMLParagraphElement, FooterProps>(
  ({ className }, ref) => {
    return (
      <footer className={clsx("flex w-full", className)}>
        <section className="flex-1">
          <LOGO />
          <p className="text-xs my-5 w-[300px] font-bold text-white">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p ref={ref} className="text-sm mt-20 font-bold text-neutral-500">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </section>
        <section className="flex-1 flex justify-between">
          <div>
            {items1.map((item, index) => (
              <p
                key={item}
                className={clsx(
                  "font-bold",
                  index === 0
                    ? "text-amber-400 text-xl mb-3"
                    : "text-white text-xs my-3 hover:underline cursor-pointer"
                )}
              >
                {item}
              </p>
            ))}
          </div>
          <div>
            {items2.map((item, index) => (
              <p
                className={clsx(
                  "font-bold",
                  index === 0
                    ? "text-amber-400 text-xl mb-3"
                    : "text-white text-xs my-3 hover:underline cursor-pointer"
                )}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </footer>
    );
  }
);
