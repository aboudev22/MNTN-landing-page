import clsx from "clsx";
import { UserCircle } from "lucide-react";
import React from "react";
import { LOGO } from "./LOGO";

const items = ["Equipment", "About us", "Blog"];

interface HeaderProps {
  className?: string;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("flex w-full items-center justify-between", className)}
      >
        <LOGO />
        <section className="flex w-fit gap-10">
          {items.map((item) => (
            <TextLink text={item} key={item} />
          ))}
        </section>
        <section className="group flex w-fit gap-2 cursor-pointer">
          <UserCircle color="#fff" size={20} />
          <p className="text-white text-sm font-bold group-hover:text-amber-400">
            Account
          </p>
        </section>
      </div>
    );
  }
);

const TextLink = ({ text }: { text: string }) => {
  return (
    <p className="hover:underline text-white text-sm font-bold cursor-pointer">
      {text}
    </p>
  );
};
