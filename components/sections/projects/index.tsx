"use client";

import { useState } from "react";

export const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <section
      id="projects"
      className="flex items-center justify-center w-full min-h-screen"
    >
      <div className="container px-4 pt-28 xl:px-0">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Portfolio
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-full -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              <li className="mb-1">
                <button
                  onClick={() => handleProject("all")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "all"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses"
                  }`}
                >
                  All Projects
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("branding")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "branding"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses"
                  }`}
                >
                  Branding
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("design")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "design"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses"
                  }`}
                >
                  Design
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("marketing")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "marketing"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses"
                  }`}
                >
                  Marketing
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("development")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "development"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses"
                  }`}
                >
                  Development
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <PortfolioCard
            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
            category="Branding"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
            category="marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
            category="marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
            category="Development"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
            category="Design"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
            category="Marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#projects"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

type Props = {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
};

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: Props) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg dark:bg-black-121212 mx-7 py-9">
            <span className="block mb-2 text-sm font-semibold text-primary">
              {category}
            </span>
            <h3 className="mb-4 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="inline-block py-3 text-sm font-semibold transition border border-gray-200 rounded-md px-7 hover:border-primary hover:bg-primary hover:text-whitesmoke dark:border-white/10 dark:hover:border-primary"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
