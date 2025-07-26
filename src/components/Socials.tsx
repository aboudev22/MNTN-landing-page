import clsx from "clsx";
import { InstagramIcon, Twitter } from "lucide-react";

interface SocialsProps {
  className?: string;
}

export const Socials = ({ className }: SocialsProps) => {
  return (
    <div
      className={clsx(
        "mt-20 hover:underline decoration-white flex flex-col gap-4 items-center cursor-pointer",
        className
      )}
    >
      <p
        style={{ writingMode: "vertical-lr" }}
        className="text-white text-xl font-bold"
      >
        Follow us
      </p>
      <InstagramIcon color="white" size={25} />
      <Twitter color="white" size={25} fill="white" />
    </div>
  );
};
