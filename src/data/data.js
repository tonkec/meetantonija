import ciHeader from "./../images/projects/ci4.png";
import craftstrom from "./../images/projects/craftstrom1.png";
import craftstrom2 from "./../images/projects/craftstrom2.png";
import craftstrom3 from "./../images/projects/craftstrom3.png";

// import pimsfGif from "./../images/projects/pimsf.gif";
import pimsf from "./../images/projects/pimsf.png";

import s3 from "./../images/projects/s3.png";
import r2 from "./../images/projects/revuto2.jpg";

import f from "./../images/projects/formunauts.png";

import punk from "./../images/about/footer_guitar.jpg";
import scss from "./../images/about/beer.jpg";
import workshop from "./../images/about/workshop.jpg";
import zero from "./../images/about/from_zero.jpg";
import vienna from "./../images/about/css_in_vienna.jpg";
import students from "./../images/about/students.jpg";

const data = {
  projects: {
    client: [
      {
        title: "Code Institute",
        client: "Code Institute",
        technology: "HTML, CSS, JS, SCSS ",
        projectLink: "https://courses.codeinstitute.net/",
        completed: 2018,
        link: "https://codeinstitute.net/",
        description:
          "Code Institute is Dublin based bootcamp that trains students from zero to hero, turning them into real porfessional developers with large scope of skills, in front-end and back-end. Students with diploma from Code Institute are eligible to apply to almost any software developer job.",
        technologyDescription:
          "The main technologies required for this project were HTML, CSS, Scss and JS and some fundamental knowledge in Django architecture.",
        myRole: {
          "Product Development":
            "I have been developing content and learning material for students. The content I wrote provided students with up to date knowledge about the mandatory skills needed for web development: HTML, CSS, CSS animations and transitions, responsive web design, JS and Scss. After that, students were given challenges where they could practice on real-life examples. Except for challenges, I created a quiz for each lesson that tested student's knowledge as well. The other task was audio and video material that complements the rest of the content.",
          "UI Development":
            "The task was to implement plenty of new components into an existing LMS based on Django: quizzes, embedded repl.it, sidebar, course content, header, footer. I coded the interface of every course module. I was provided with the design files. It required CSS and Scss skills. The existing LMS code was slow and messy. I improved it with Scss logic. Now it is much cleaner and faster. I liked working with a designer, he had a really good eye for modern and contemporary design",
          Mentoring:
            "I have been mentoring (remotely) for 2 years at Code Institute. The major part of the mentorship sessions is focusing on the code quality of students' projects. I help students to think like professional developers from the very start of their coding career. The content agnosticism, don't repeat yourself, reusability and object orientation are principles that I encourage on every session. I advise my students to stay persistent, committed and curious."
        },
        images: [{ title: "codeinstitute", content: "LMS", src: ciHeader }]
      },
      {
        title: "Peaks",
        projectLink: "https://antonijasimic.bitbucket.io/peaks",
        client: "Supersuper",
        technology: "HTML,CSS,JS,SCSS",
        completed: 2015,
        link: "https://www.supersuperagency.com/",
        description:
          "This is a bootstrap template for web and digital agencies. It is best used for showing portfolio and presenting work in general. Web features, such as preloader, parallax, slideshows, full-screen layout and responsivness, will impress your visitors",
        technologyDescription:
          "Template is built with HTML, CSS, SCSS, Bootstrap, jQuery, JS.",
        myRole: {
          "User Interface":
            "My task was to implement user interface based on the design provided. The hardest part in development process was customization of parallax. It had to be compatible with swiper.js and also fully responsive. Biggest struggle was author section that has multiple parallax. The three images were not supposed to move at the same time which is not default behaviour of parallax plugin. Also, the text should have shown up on hover. And all of that needed to be responsive."
        },
        images: []
      },
      {
        title: "Formunauts",
        projectLink: "https://app.formunauts.com/",
        client: "Formunauts",
        technology: "Angular, RxJS, Typescript",
        completed: 2020,
        link: "https://www.formunauts.at/",
        description: "Formuanuts is an app that collects donations.",
        technologyDescription:
          "This app is built with Angular 8 fueled with RxJs and Typescript",
        myRole: {
          "RaiseNow Payment Integration":
            "My task was to set a communication between the app and the RaiseNow API. RaiseNow iframe with form was injected into the template. I then had to send data from the form, as well as the data from the previous step, to the API. If there was an error in the form, it should be displayed to the user. The whole integration had to show states based on the connection status. I do not usually code in Angular, that is why this project had steep learning curve. I was able to quickly pick up core Angular and RxJs concepts."
        },
        images: [{ title: "formunauts", content: "", src: f }]
      },
      {
        title: "Revuto",
        client: "Async Labs",
        technology: "React.js",
        completed: 2019,
        link: "https://www.asynclabs.co",
        projectLink: "https://revuto.com",
        description:
          "Revuto is a web application for managing subscriptions using cryptocurrency revu tokens",
        technologyDescription:
          "The app was built using React.js. The cool package I discovered in this project was react-helmet, npm package that manges meta tags in React apps.",
        myRole: {
          "React Developer":
            "I was working closely with backend developers and a designer. My task was to create user interface following designs from designer and to connect components via API provided by backend developers. User authorization was handled with tokens. I loved working on this project because I was able to get my hands on Context API and React hooks <3. I used Context API for flash messages and hooks in the stateful functional components. The cool part in login and signup form was custom made captcha. Originally, additions were much complex, but client wanted simplified captcha. Now user should know how to sum two numbers that are not larger than 10. I also really much enjoyed playing with CSS animations and transitions. The most valuable page to client was referral program page which has animation that I coded from scratch. The tricky part was reversing animation. I learned scss can not count nth children backwards."
        },
        images: [{ title: "revuto", content: "Revuto Homepage", src: r2 }]
      },
      {
        title: "Pimsf",
        client: "Async Labs",
        projectLink: "https://async-energy.com/",
        technology: "React && Redux",
        completed: 2019,
        link: "https://www.asynclabs.co",
        description:
          "Pipelime Management system is software for visualizing, managing and maintaining pipelines and workflows in oil, gas or water industries.",
        technologyDescription:
          "The app was built with React.js. Visualizations were coded with d3 and dc.js.",
        myRole: {
          "Pimsf Explorer":
            "The explorer is the most important part of the app. My task was to add the existing D3/DC charts and make them draggable and resizable. I achieved that using react-grid-layout npm package. The first thing I did was creating a plain draggable and resizable 8 column grid as requested. After that, I added graphs to columns. As user resizes column, graph should follow height and width of that column, of its parent. I sent resizedHeight and resizedWidth variable to the redux store and passed them to width and height in D3 attribute. When charts were resizable and draggable, I worked on responsiveness of the grid. React-grid-layout comes with the built-in properties and functions to create a grid based on the breakpoint. I used one function that will take number of columns and a breakpoint as parameters",
          "Changelog History":
            "PIMSF can display different version of pipelines. If a constructor in the field changes something on the pipeline, they should report changes in the app. That report should create a new version of the pipeline. Such pipeline in PIMSF is perceived as a virtual pipeline. My task was to create a changelog history tree that will display each version of a pipeline. This is displayed as a tree where each new version is treated as a child, and each old version as a parent. We used Mermaid.js package to display such tree. Axios was used to get data points from API. Each pipeline in the tree can be deleted or approved. If it is approved, pipeline should change color to green. If it is deleted, it should be deleted from the history tree."
        },
        images: [{ title: "pimsf", content: "PIMSF Overview", src: pimsf }]
      },

      {
        title: "Craftstrom",
        client: "Craftstrom",
        technology: "React Native",
        completed: 2019,
        link: "https://www.craftstrom.com/",
        projectLink:
          "https://play.google.com/store/apps/details?id=com.craftstrom",
        description:
          "Craftstrom enables users to connect to solar panels at their homes. After the login, users are redirected to the dashboard which renders two graphs that show the amount of generated solar energy in the last week. They can also see the state of the battery.",
        technologyDescription:
          "The app was built with React Native, customized both for Android and iOS. Graphs were made with dc.js and d3.js. Besides those app uses some cool react-native npm packages like tcomb, animatable, moment.js, axios and plenty others.",
        myRole: {
          "User Interface":
            "My task was to implement user interface with react-native-elements and react-native and to handle user authentication and authorization with ajax calls to the backend api. User's token is stored using AsyncStorage. The app excited me a lot because I was able to get my hands on JS and React Native. It made me really happy that I can prove and test my JS skills!"
        },
        images: [
          { title: "craftstrom_login", src: craftstrom },
          { title: "craftstrom_battery", src: craftstrom3 },
          { title: "craftstrom_panels", src: craftstrom2 }
        ]
      }
    ],
    hobby: [
      {
        title: "Sessions Tracker",
        technology: "React/Redux",
        completed: 2019,
        projectLink: "https://sessionstracker.herokuapp.com",
        code: "github.com/tonkec/student_sessions",
        description:
          "This is an app that might help me CRUD sessions that I have with my students.",
        technologyDescription:
          "React, Redux, Firebase, Thunk, Recharts, Faker.js, Lodash.js, Moment.js, react-dates, create-react-app, Heroku",
        about:
          "My idea was to get more meaningful data for the sessions that I have with students. The data should be presented in elegant way. The most interesting part to me was grouping data with lodash. The data received from firebase was not ready to be injected into Recharts immediately. It should be cleaned up and turned into cleaner objects. It was done with ._group function from lodash. I am so grateful for this library, it made my life much easier!",
        images: [{ title: "sessions tracker", src: s3 }]
      },
      {
        title: "Text hover effects",
        technology: "React && Redux",
        completed: 2019,
        projectLink: "https://text-hover-effects.herokuapp.com/",
        code: "https://github.com/tonkec/text_hover_effects",
        description:
          "This is a scss mixin library for effects trigered on hover and click. This library brings a clean fresh look to links and other typography elements. It allows customization of the different CSS properties, such as speed, delays, easing, colors, padding and more. It is also available in the CSS code. All transitions can be triggered on hover/focus or click.",
        technologyDescription: "Scss for library, React.js and Heroku for demo",
        about:
          "My idea was to have at one place different effects that can be triggered on click or hover. This library should save up developer's time. Any effects can be customized with passing arguments to mixins. Effects are initialised with CSS classes. I put high effort in keeping the code clean and reusable.",
        images: [{ title: "sessions", src: s3 }]
      }
    ]
  },
  images: [
    {
      title: "vienna",
      href: "https://www.meetup.com/css-in-vienna/events/267266901/",
      content: "Coding a piano @ CSS-in-Vienna",
      src: vienna
    },
    {
      title: "scss",
      href: "https://www.meetup.com/S_CSS_Zagreb/events/265312074/",
      content: "Coding a pure CSS beer @ Scss Meetup",
      src: scss
    },
    {
      title: "students",
      href: "https://codeinstitute.net/",
      content: "Teaching students @ Code Institute",
      src: students
    },
    {
      title: "punk",
      href: "https://punkrockdev.com/",
      content: "Goofing around with Punk Rock Dev",
      src: punk
    },
    {
      title: "zero",
      href: "https://slides.com/tonkecpalonkec/from-zero-to-s-hero/#/",
      content: "Encouraging LGBTQI+ community to start coding!",
      src: zero
    },
    {
      title: "workshop",
      href: "https://github.com/tonkec/workshop",
      content: "Encouraging others to start coding",
      src: workshop
    }
  ]
};

export default data;
