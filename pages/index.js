import Header from "./../components/Header";
import {
  heading2,
  heading3,
  heading4,
  heading5,
  paragraph,
} from "../utils/typography";
import Link from "next/link";
const button = "bg-secondary text-white py-4 px-10 text-2xl";
import { projects } from "./../data/projects";
import Head from "next/head";
import Hand from "./../components/Hand";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
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
          Something I have worked on.
        </h2>

        <a
          href="/projects/casumo"
          className="mb-24 block casumo layer relative bg-center md:bg-right bg-no-repeat bg-cover md:w-2/3 md:mx-auto lg:mx-0 lg:w-2/4 h-[300px] hover:top-[2px]"
        >
          <div className="bg-secondary px-10 py-6 lg:absolute lg:top-[120px] -translate-y-1/2 -right-1/2">
            <h2 className={`${heading4} text-primary`}>Casumo</h2>
            <p className={`${paragraph} text-white`}>
              An online casino based in Malta. <br />
              <small className="">
                graphql, react, knockout, cloudflare, contentful
              </small>
            </p>
          </div>
        </a>

        <a
          href="/projects/formunauts"
          className="mb-24 block formunauts layer relative bg-center lg:bg-left bg-no-repeat bg-cover md:w-2/3 md:mx-auto lg:mx-0 lg:left-2/4 lg:w-2/4 h-[300px] hover:top-[2px]"
        >
          <div className="bg-secondary px-10 py-6 lg:absolute top-[120px] -translate-y-1/2 -left-1/2">
            <h2 className={`${heading4} text-primary`}>Formunauts</h2>
            <p className={`${paragraph} text-white`}>
              An on-street fundraising platform
              <br />
              <small className="">angular, rxjs, 3rd party APIs</small>
            </p>
          </div>
        </a>

        <a
          href="/projects/revuto"
          className="mb-24 block revuto layer relative bg-center lg:bg-left bg-no-repeat bg-cover md:w-2/3 md:mx-auto lg:mx-0 lg:w-2/4 h-[300px] hover:top-[2px]"
        >
          <div className="bg-secondary px-10 py-6 lg:absolute top-[120px] -translate-y-1/2 -right-1/2">
            <h2 className={`${heading4} text-primary`}>Revuto</h2>
            <p className={`${paragraph} text-white`}>
              An app for collecting cryptocurrency. <br />
              <small className="">react, context api</small>
            </p>
          </div>
        </a>
      </section>

      <section className="bg-secondary py-20 px-4 sm:px-10 md:px-0 overflow-hidden text-center">
        <h3 className={`${heading2} text-white mb-2`}>
          Interested in how I code?
        </h3>
        <a
          href="/code"
          className={`${paragraph} text-center font-bold text-ternary underline`}
        >
          Take a looksie!
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
    </Layout>
  );
}
