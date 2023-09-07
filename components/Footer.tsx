"use client";

import React from "react";
import { navLinks } from "./Navigation";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { LuRocket } from "react-icons/lu";

export const Footer = () => {
  return (
    <footer className="w-full bg-whitesmoke dark:bg-black-111">
      <div className="container px-4 xl:px-0 py-10 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-4 py-6 sm:py-0 w-full md:max-w-[30%]">
          <strong className={`nav-logo`}>
            <Link
              to="hero"
              smooth={true}
              duration={250}
              className="text-2xl xl:text-4xl cursor-default lg:cursor-pointer flex items-center gap-x-2"
            >
              <LuRocket className="text-3xl xl:text-5xl text-primary" />
              Startup.
            </Link>
          </strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            cupiditate deleniti perferendis vero adipisci in itaque velit ullam
            quos reiciendis!
          </p>
          <p className="flex items-center gap-x-1">
            <FaPhone /> +55 (11) 9898-0909
          </p>
        </div>

        <div className="py-6 sm:py-0 flex flex-col gap-y-4">
          <strong className="text-xl">Sections</strong>
          <ul>
            {navLinks.map(([name, target], i) => {
              // const nameToLower = name.toLowerCase();
              // const link =
              //   nameToLower !== "contact" && nameToLower !== "home"
              //     ? nameToLower
              //     : "";

              return (
                <li key={`li-${i}`} className="flex my-1">
                  <Link
                    to={target}
                    smooth={true}
                    duration={300}
                    href={`#${target}`}
                    activeClass="active"
                    className="nav-link"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="py-6 sm:py-0 flex flex-col gap-y-4">
          <strong className="text-xl">Follow us</strong>
          <ul className="flex flex-col gap-3 py-2">
            <div className="flex gap-x-3">
              <li>
                <a href="https://www.github.com" target="_blank">
                  <FaGithub
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  <FaYoutube
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
            </div>

            <div className="flex gap-x-3">
              <li>
                <a href="https://www.x.com" target="_blank">
                  <FaTwitter
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebook
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagram
                    size={"20px"}
                    className="hover:text-primary transition"
                  />
                </a>
              </li>
            </div>
          </ul>
          <p>Startup. &copy; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
