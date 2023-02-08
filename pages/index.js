import Header from "./../components/Header";
import {
  heading2,
  heading3,
  heading4,
  heading5,
  paragraph,
} from "../utils/typography";
import Link from "next/link";
import { useState, useEffect } from "react";
const button = "bg-secondary text-white py-4 px-10 text-2xl";
import { projects } from "./../data/projects";
import Head from "next/head";
import Hand from "./../components/Hand";

export default function Home() {
  let [projectsShown, setProjects] = useState(projects);
  const onButtonFilterClick = (e) => {
    const filteredProjects = projects.filter(
      (project) => e.target.value === project.stack
    );
    setProjects(filteredProjects);
  };
  return (
    <>
      <Head>
        <title>I am Antonija</title>
      </Head>
      <Hand />
      <Header
        title="I am Antonija"
        subtitle="A freelance front-end developer"
      />
      <section>
        <div className="grid lg:grid-cols-2 w-full">
          <div className="bg-secondary px-10 lg:px-0 lg:pb-[200px] pb-[100px] pt-[100px] md:text-center">
            <h2 className={`${heading2} text-white font-bold`}>Who am I?</h2>
            <p
              className={`${paragraph} text-white max-w-md md:mx-auto text-left font-light mt-12`}
            >
              I am a freelance front end developer based in Zagreb who has huge
              crush on CSS and React. I work mostly remotely with clients from
              all over the world. I have been working in the industry for the
              past 7 years.
            </p>
          </div>

          <div className="bg-white px-10 lg:px-0 lg:pb-[200px] pt-[100px] md:text-center">
            <h2 className={`${heading2} text-secondary font-bold`}>
              What do I do?
            </h2>
            <p
              className={`${paragraph} text-secondary max-w-md md:mx-auto text-left font-light mt-12`}
            >
              I code web applications using React.js, Next.js and all mighty
              CSS. Currently I am learning Ruby on Rails since I want to extend
              my skills to full stack development. In the past I also worked
              with Angular, Vue and React Native. I am the most comfortable when
              I code with React.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className={`${heading3} text-secondary font-bold text-center`}>
          I am social.
        </h2>
        <p className={`${paragraph} text-center text-secondary mt-10`}>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            className="px-4 text-secondary underline"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/tonkec"
            target="_blank"
            className="px-4 text-secondary underline"
          >
            Github
          </a>
          <a
            href="https://codepen.io/tonkec"
            target="_blank"
            className="px-4 text-secondary underline"
          >
            Codepen
          </a>
        </p>
      </section>

      <section className="bg-primary py-20 px-10 lg:px-20 flex items-center xl:justify-evenly flex-wrap xl:flex-nowrap">
        <h3 className={`${heading3} font-bold max-w-3xl`}>
          Do you have something interesting I could work on?
        </h3>
        <Link href="/contact">
          <a className={`${button} mt-6 lg:mt-0`}>Contact me</a>
        </Link>
      </section>

      <section className="bg-ternary py-20 px-4 sm:px-10 md:px-0 overflow-hidden">
        <h2
          className={`${heading2} text-secondary font-bold text-center mb-20`}
        >
          Projects I am proud of.
        </h2>
        <div className="flex justify-center items-center mb-20">
          <button
            value="react"
            onClick={onButtonFilterClick}
            className="bg-gray py-2 px-10 inline-block hover:bg-primary font-bold text-2xl mr-2"
          >
            React
          </button>
          <button
            value="angular"
            onClick={onButtonFilterClick}
            className="bg-gray py-2 px-10 inline-block hover:bg-primary font-bold text-2xl mr-2"
          >
            Angular
          </button>
        </div>
        {projectsShown.map((project, i) => {
          return (
            <div
              key={`${project.title}`}
              className={`${
                i % 2 === 0
                  ? "lg:float-left -translate-x-10 hover:translate-x-0"
                  : "lg:float-right translate-x-10 hover:translate-x-0"
              } transition-transform duration-200 bg-secondary px-20 py-6 md:w-2/4 clear-both mb-20 hover:bg-primary `}
            >
              <Link href={`/projects/${project.title.toLowerCase()}`}>
                <a>
                  <h1
                    className={`${heading3} text-left text-white leading-normal font-bold`}
                  >
                    {project.title}
                  </h1>
                  <h4
                    className={`${heading5} text-left text-white font-light mt-0`}
                  >
                    {project.subtitle}
                  </h4>
                </a>
              </Link>
            </div>
          );
        })}
      </section>

      <section className="bg-secondary py-20 px-4 sm:px-10 md:px-0 overflow-hidden text-center">
        <a
          href="/code"
          className={`${heading3} text-center font-bold text-ternary underline`}
        >
          Check out my code
        </a>
      </section>

      <section className="bg-primary py-20">
        <div className="flex items-center justify-center flex-wrap w-8/12 lg:w-6/12 mx-auto">
          <h2 className={`${heading2} text-center font-bold`}>Kodiraonica</h2>
          <p className={`${paragraph} mt-20`}>
            I have been mentoring for the past 5 years. That inspired me to
            found my own{" "}
            <a
              href="https://kodiraonica.dev/"
              className="underline"
              target="_blank"
            >
              coding school
            </a>
            . We teach HTML&amp;CSS, Javascript and React. Kodiraonica is one
            year old, we have many happy students and inspiring teachers.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
