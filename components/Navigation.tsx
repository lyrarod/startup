"use client";

import { useEffect, useState } from "react";
import { fadeIn } from "@/lib/animations";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-scroll";
import { LuRocket } from "react-icons/lu";

export const navLinks = [
  ["Home", "hero"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"],
];

export function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const toogle = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    let mql = window.matchMedia("(min-width: 768px)");

    const handleChange = ({ matches }: MediaQueryListEvent) => {
      if (matches) {
        setOpen(false);
        document.body.style.overflowY = "auto";
      }
      // return console.log(matches);
    };

    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header
      className={`w-full h-16 xl:h-24 flex fixed top-0 left-0 ${
        !isOpen && "backdrop-blur-sm"
      } bg-white/90 dark:bg-black/90 duration-150 menu_shadow z-50`}
    >
      <nav className="container flex items-center justify-between w-full px-4 xl:px-0">
        <motion.strong
          className={`nav-logo`}
          initial={"initial"}
          animate={"animate"}
          variants={fadeIn(-25, 0, 0.6)}
        >
          <Link
            to="hero"
            smooth={true}
            duration={250}
            className="flex items-center text-2xl cursor-default xl:text-4xl lg:cursor-pointer gap-x-2"
          >
            <LuRocket className="text-3xl xl:text-5xl text-primary" />
            Startup.
          </Link>
        </motion.strong>

        <ul className="justify-center hidden md:flex md:items-center gap-x-6">
          {navLinks.map(([name, target], i) => {
            const link = name !== "Contact" ? name : "";
            return (
              <motion.li
                key={`li-${i}`}
                className="flex items-center justify-center select-none"
                initial={"initial"}
                animate={"animate"}
                variants={fadeIn(0, -25, 0.6 + i * 0.15)}
              >
                <Link
                  className={`nav-link uppercase font-semibold tracking-widest text-sm`}
                  activeClass="active"
                  to={target}
                  spy={true}
                  smooth={true}
                  hashSpy={target !== "hero" && true}
                >
                  {link}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="items-center hidden md:flex gap-x-4"
          initial={"initial"}
          animate={"animate"}
          variants={fadeIn(25, 0, 0.6)}
        >
          <ModeToggle variant={"link"} />

          <Link
            to={"contact"}
            href="#contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            className={`nav-link-contact`}
          >
            contact
          </Link>
        </motion.div>

        <div className="md:hidden flex items-center justify-center z-[999]">
          <motion.button
            onClick={toogle}
            className="cursor-default sm:cursor-pointer"
            initial={"initial"}
            animate={"animate"}
            variants={fadeIn(25, 0, 0.6)}
          >
            {isOpen ? (
              <LuX className="text-[2rem] text-black dark:text-white" />
            ) : (
              <LuMenu className="text-[2rem] text-black dark:text-white" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <ul
        className={`md:hidden fixed top-0 ${
          !isOpen ? `right-[-100vw]` : `right-0`
        } w-screen h-screen bg-white/75 dark:bg-black/80 backdrop-blur-md flex flex-col items-center justify-center duration-150 overflow-hidden select-none z-[100]`}
      >
        <div className="mb-6" onClick={toogle}>
          <ModeToggle variant={"link"} />
        </div>

        {navLinks.map(([link, target], i) => {
          return (
            <li key={`li-${i}`} className="w-full p-2 text-center">
              <Link
                to={target}
                onClick={toogle}
                spy={true}
                smooth={true}
                activeClass="active"
                className="text-2xl font-bold tracking-widest uppercase cursor-default nav-link"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
