import Header from "./../../components/Header"
import Nav from "./../../components/Nav"
import Footer from "./../../components/Footer"
import { paragraph, heading2, heading4, heading5 } from "../../utils/typography"
import Link from "next/link"

export default function CV(){
    return <>
        <Nav />
        <Header title="Antonija's CV" subtitle="Find out more about me" />

        <section className="bg-ternary py-20 px-20">
            <h2 className={`${heading2}`}>Work history</h2>

            <div>
                <h4 className={`${heading4} underline`}><a href="https://kodiraonica.dev/" target="_blank">Kodiraonica</a></h4>
                <p className={`${paragraph}`}>April 2021 - present</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">I founded a coding school where I teach Javasript and React.js. <br />Our goal is to code several javascript games and one React.js application</li>

                </ul>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://www.humaninteraction.com/" target="_blank">Human</a></h4>
                <p className={`${paragraph}`}>Dec 2021 - March 2022</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Working with React.js and Storybook</li>
                    <li className="text-2xl">Delivering pixel perfect layout</li>
                    <li className="text-2xl">Transforming figma design into React and Stencil.js arhitecture</li>
                    <li className="text-2xl">Developing abstract reusable components</li>

                </ul>

                <Link href="/projects/span">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://www.opx.org/" target="_blank">Oslo Philanthropic Exchange</a></h4>
                <p className={`${paragraph}`}>Apr 2021 - Sep 2021</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">My main task was to implement user interface into Angular platform</li>
                    <li className="text-2xl">Expertise included CSS knowledge and Angular templating skills</li>
                    <li className="text-2xl">Among tasks were writing of unit tests</li>
                </ul>

                <Link href="/projects/opx">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://www.formunauts.at/en/" target="_blank">Formunauts</a></h4>
                <p className={`${paragraph}`}>Jan 2020 - Sep 2020</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Set a communication between the app and the RaiseNow API. Send data from the form to the API.</li>
                    <li className="text-2xl">Respond to offline/online status</li>
                    <li className="text-2xl">Develop API architecture using services, injectables, axios calls, observables</li>
                    <li className="text-2xl">Integrate mpos device for payment with credit cards</li>
                    <li className="text-2xl">Setup service worker for caching assets</li>
                    

                </ul>

                <Link href="/projects/formunauts">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://www.asynclabs.co/" target="_blank">Async Labs</a></h4>
                <p className={`${paragraph}`}>Jun 2019 - Jan 2020</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Develop domain driven design for application architecture</li>
                    <li className="text-2xl">Using React.js and Redux with Thunk</li>
                    <li className="text-2xl">Implement data visualisation graph using Mermaid.js</li>
                    <li className="text-2xl">Integrate mpos device for payment with credit cards</li>
                    <li className="text-2xl">The data was parsed from the api which was then passed to the Mermaid graph.</li>
                    <li className="text-2xl">Implement fluid layout with react-grid-layout package.</li>
                    <li className="text-2xl">Mentor other devs, show them cool css tricks and simple solutions.</li>
                </ul>

                <Link href="/projects/revuto">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://codeinstitute.net/global/" target="_blank">Code Institute</a></h4>
                <p className={`${paragraph}`}>Nov 2017 - Sep 2020</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Develop UI with HTML&amp;Scss within Django architecture based on Learning Management System</li>
                    <li className="text-2xl">Improve existing CSS codebase which led to better performance</li>
                    <li className="text-2xl">Create reading, audio and video materials for front-end module: html, css, js, scss</li>
                    <li className="text-2xl">Teach web fundamentals from HTML to Django architecture</li>
                    <li className="text-2xl">Help students think like professional developers from the very start of their coding career</li>
                </ul>

                <Link href="/projects/codeinstitute">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://punkrockdev.com/" target="_blank">Punk Rock Dev</a></h4>
                <p className={`${paragraph}`}>Dec 2017 - May 2019</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Connect UI to API using axios</li>
                    <li className="text-2xl">Develop reusable components</li>
                    <li className="text-2xl">Render data in graphs</li>
                    <li className="text-2xl">Develop responsive layout</li>
                    <li className="text-2xl">Fix cross-platform issues, iOS vs Android</li>
                </ul>

                <Link href="/projects/craftstrom">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>

            <div>
                <h4 className={`${heading4} underline mt-20`}><a href="https://supersuperagency.com/" target="_blank">Super super studio</a></h4>
                <p className={`${paragraph}`}>Jan 2015 - Jul 2015</p>
            </div>

            <div className="pl-10 mt-10">
                <ul className="list-disc">
                    <li className="text-2xl">Develop static websites following pixel-perfect and mobile-first approach with Bootstrap</li>
                    <li className="text-2xl">Implement cross-browser and cross-device compatibility</li>
                    <li className="text-2xl">Optimise code using Gulp</li>
                    <li className="text-2xl">Develop responsive layout</li>
                    <li className="text-2xl">Customise jQuery animations and third-party libraries such as: Swiper.js, Waypoints,js, Skrollr.js, Parallax.js</li>
                </ul>

                <Link href="/projects/peaks">
                    <a className="underline mt-6 inline-block -ml-10">Read more</a>
                </Link>
            </div>
        </section>

        <section>
            Dodat link na Tint, Duga, 
        </section>

        <Footer />
    </>
}