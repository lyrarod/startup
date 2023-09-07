"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex w-full min-h-screen overflow-hidden lg:items-center lg:justify-center"
    >
      <div className="relative flex flex-col-reverse w-full px-6 pt-16 pb-10 lg:pt-0 xl:px-0 lg:py-0 max-w-7xl lg:flex-row">
        <motion.div
          className="flex w-[1000px] h-[1000px] sm:w-[3500px] sm:h-[3500px] lg:w-[7000px] lg:h-[7000px] bg-primary/50 dark:bg-primary/25 absolute left-1/2 -translate-x-1/2 top-1/2 -z-10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, opacity: { duration: 3 } },
          }}
        ></motion.div>

        <div className="flex justify-start basis-1/2">
          <div className="flex flex-col lg:gap-y-12 gap-y-6">
            <h1 className="flex flex-col text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-8xl text-primary">
              <motion.span
                className="text-amber-600 dark:text-amber-700"
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, 30)}
              >
                Startup
              </motion.span>{" "}
              <motion.span
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, 30, 0.2)}
              >
                Development
              </motion.span>
            </h1>

            <motion.h2
              className="flex gap-x-1 lg:font-medium sm:text-lg"
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30, 0.3)}
            >
              <span>🎉</span> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur, corporis!
            </motion.h2>
            <motion.blockquote
              className="pl-6 italic border-l-2"
              initial={"initial"}
              animate={"animate"}
              variants={fadeIn(0, 30, 0.4)}
            >
              {`"After all," he said, "everyone enjoys a good joke, so it's only
              fair that they should pay for the privilege."`}
            </motion.blockquote>

            <div className="flex flex-col w-full gap-6 sm:flex-row lg:gap-8">
              <motion.button
                className="w-full py-2 text-xs font-medium tracking-widest text-white uppercase transition-opacity rounded-full shadow bg-amber-600 dark:bg-amber-700 xs:py-3 lg:text-sm hover:bg-opacity-90"
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, 30, 0.5)}
              >
                get started
              </motion.button>
              <motion.button
                className="w-full py-2 text-xs font-medium tracking-widest text-white uppercase border border-white rounded-full xs:py-3 lg:text-sm"
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, 30, 0.6)}
              >
                learn more
              </motion.button>
            </div>
          </div>
        </div>

        <div className="relative flex lg:basis-[60%] basis-1/2">
          <motion.div
            className="flex lg:-translate-y-1/2 lg:absolute lg:top-[55%] -right-1/2"
            initial={{
              opacity: 0,
              right: "-60%",
              top: "50%",
            }}
            animate={{ opacity: 1, right: "-50%", top: "55%" }}
            transition={{ delay: 0.6, duration: 1, opacity: { duration: 1 } }}
          >
            <img
              src="/illustration.png"
              alt="image"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
