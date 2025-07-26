import clsx from "clsx";
import { motion } from "framer-motion";

interface SliderProps {
  className?: string;
  view: number;
  onclick: (index: number) => void;
}

export const Slider = ({ className, view, onclick }: SliderProps) => {
  return (
    <div
      className={clsx("flex h-fit flex-col items-end mt-20 gap-5", className)}
    >
      <motion.div
        onClick={() => onclick(0)}
        className="relative flex cursor-pointer px-2"
      >
        <p className="text-xl font-bold text-white">Start</p>
        {view === 0 && (
          <motion.p
            transition={{ ease: "linear" }}
            layoutId="slider"
            className="h-full absolute w-0.5 bg-amber-400 right-0"
          />
        )}
      </motion.div>
      {[...Array(3)].map((_, i) => (
        <motion.div
          layout
          onClick={() => onclick(i + 1)}
          key={i}
          className="relative flex px-2"
        >
          <p className="text-xl font-bold text-white cursor-pointer">{`0${
            i + 1
          }`}</p>
          {view === i + 1 && (
            <motion.p
              transition={{ ease: "linear" }}
              layoutId="slider"
              className="h-full absolute w-0.5 bg-amber-400 right-0"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
