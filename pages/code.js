import Header from "./../components/Header";
import Head from "next/head";
import {
  heading2,
  heading3,
  heading4,
  heading5,
  paragraph,
} from "../utils/typography";
import Iframe from "react-iframe";
import Link from "next/link";
import Layout from "../components/Layout";
const button = "bg-secondary text-white py-4 px-10 text-2xl";

const Code = () => {
  return (
    <Layout>
      <Head>
        <title>My code</title>
      </Head>
      <Header title="My code" subtitle="Source code of my projects" />

      <section>
        <div className="bg-secondary sm:px-10 lg:px-0 lg:pb-[200px] pb-[100px] pt-[100px] md:text-center">
          <h2 className={`${heading2} px-10 sm:px-0 text-white font-bold`}>
            Have you seen my codepen?
          </h2>

          <p
            className={`${paragraph} px-10 sm:px-0 text-white max-w-lg mx-auto text-left font-light mt-12 mb-24`}
          >
            In my free time I like to create CSS art. I find inspiration in the
            world around me. I learned a lot about CSS coding these small
            projects. They are mostly coded by Scss, actually.
          </p>

          <div className="grid lg:grid-cols-2 gap-4 w-full md:px-20">
            <Iframe
              url="https://codepen.io/tonkec/embed/zYLbVXV?default-tab=result"
              width="100%"
              height="520px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <Iframe
              url="https://codepen.io/tonkec/embed/PoBVXjy?default-tab=result"
              width="100%"
              height="520px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <Iframe
              url="https://codepen.io/tonkec/embed/NWBoxKo?default-tab=result"
              width="100%"
              height="520px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <Iframe
              url="https://codepen.io/tonkec/embed/OJJbJqq?default-tab=result"
              width="100%"
              height="520px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>

          <p className={`${paragraph} mt-8 text-left mx-20 text-white`}>
            Check out more {""}
            <a
              href="https://kodiraonica.dev/"
              className="underline"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="bg-white px-10 lg:px-0 lg:pb-[200px] pb-[100px] pt-[100px] md:text-center">
          <h2 className={`${heading2} text-secondary font-bold`}>
            Have you seen my github?
          </h2>

          <p
            className={`${paragraph} text-secondary max-w-lg mx-auto text-left font-light mt-12 mb-24`}
          >
            Here are some projects I hosted on Github. Of course I can not show
            you the source code of the clients' projects since it would be
            illegal. But I think you can get the idea about my code quality by
            checking these out. You can finde more about the apps in their
            README.md file on Github.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 w-full md:px-20">
            <div className="bg-secondary text-left px-4 pt-4 pb-8 w-full">
              <h5 className={`${heading4} text-white`}>Cards app</h5>
              <a
                href="https://github.com/tonkec/cards_app"
                target="_blank"
                className="mr-2 inline-block text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe2c7;</span>
              </a>

              <a
                href="https://beautiful-pegasus-c61cb5.netlify.app/"
                target="_blank"
                className="text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe157;</span>
              </a>
            </div>

            <div className="bg-secondary text-left px-4 pt-4 pb-8 w-full">
              <h5 className={`${heading4} text-white`}>Restaurants app</h5>
              <a
                href="https://github.com/tonkec/restaurants_app"
                target="_blank"
                className="mr-2 inline-block text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe2c7;</span>
              </a>

              <a
                href="https://storied-kashata-83f538.netlify.app/login"
                target="_blank"
                className="text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe157;</span>
              </a>
            </div>

            <div className="bg-secondary text-left px-4 pt-4 pb-8 w-full">
              <h5 className={`${heading4} text-white`}>Employees app</h5>
              <a
                href="https://github.com/tonkec/shiny_people"
                target="_blank"
                className="mr-2 inline-block text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe2c7;</span>
              </a>

              <a
                href="https://xenodochial-lamport-952060.netlify.app/"
                target="_blank"
                className="text-white hover:text-primary"
              >
                <span className="material-icons text-4xl">&#xe157;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-ternary px-10 lg:px-0 lg:pb-[200px] pb-[100px] pt-[100px] md:text-center">
          <h2 className={`${heading2} text-secondary font-bold`}>
            What am I working on?
          </h2>

          <p
            className={`${paragraph} text-secondary max-w-lg mx-auto text-left font-light mt-12 mb-24`}
          >
            I am currently building two things: an LMS app for my students in
            coding school and a dating app for LGBTIQA+ people on Balkan. These
            are my side hustles.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 w-full md:px-20 text-left">
            <div>
              <div className="border-2 border-secondary">
                <Iframe
                  url="https://www.youtube.com/embed/PSTTUxfqZrM"
                  width="100%"
                  height="320px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </div>
              <p className={`${paragraph} mt-6 text-secondary`}>
                This is a learning management system with lessons in HTML&CSS,
                Javascript and React. Students can read lessons, solve quizzes
                and ask questions about the lesson. Admin can CRUD lessons and
                courses. It is built with Ruby on Rails.{" "}
                <a
                  href="https://cryptic-basin-19078.herokuapp.com/"
                  target="_blank"
                  className="text-secondary underline text-left hover:text-primary"
                >
                  Check out demo here.
                </a>
              </p>
            </div>

            <div>
              <div className="border-2 border-secondary">
                <Iframe
                  url="https://www.youtube.com/embed/WM3vASJoSRw"
                  width="100%"
                  height="320px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </div>
              <p className={`${paragraph} mt-6 text-secondary`}>
                This is a dating app for LGBTIQA+ people based in Balkan area.
                The demo shows a Next.js landing page where users can sign up to
                our newsletter and be up to date with the latest news on release
                of the app. I am building an actual dating app using Ruby on
                Rails.{" "}
                <a
                  href="https://duga.app/"
                  target="_blank"
                  className="text-secondary underline text-left hover:text-primary"
                >
                  Check out demo here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-10 lg:px-20 flex items-center xl:justify-evenly flex-wrap xl:flex-nowrap">
        <h3 className={`${heading3} font-bold max-w-3xl`}>
          Do you have something interesting I could work on?
        </h3>
        <Link href="/contact">
          <a className={`${button} mt-6 lg:mt-0`}>Contact me</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Code;
