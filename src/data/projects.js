const projects = [
  {
    company: 'Trustworthy',
    title: 'Trustworthy',
    headline: 'A family operating system',
    skills:
      'React, Typescript, Styled Components, Redux Toolkit Query, auth0...',
    link: 'https://www.trustworthy.com/',
    description:
      "As a Senior React Developer at Trustworthy Company, I played a pivotal role in the development and maintenance of critical software applications, contributing to the company's mission of providing reliable and secure solutions to its clients.",
    responsibilities: [
      'Provided leadership and mentorship to junior developers, guiding them in best practices for React development and fostering a collaborative and supportive team environment.',
      'Collaborated closely with cross-functional teams, including product managers, designers, and QA engineers, to ensure alignment and delivery of high-quality products.',
      'Led discussions on best practices, code standards, and architectural patterns, ensuring that our applications were robust, efficient, and aligned with industry standards.',
      'Delivered high-quality code that adhered to best practices and coding standards, conducting code reviews and implementing solutions to enhance performance, security, and maintainability.',
      'Resolved complex technical challenges on a daily basis, embracing a proactive approach to problem-solving and collaborating with team members to explore innovative solutions.',
      "Played a key role in delivering successful projects on time and within budget, contributing to the company's reputation for delivering reliable and trustworthy software solutions.",
    ],
    conclusion:
      "Overall, my experience at Trustworthy Company as a Senior React Developer equipped me with valuable skills in leadership, architectural design, technical excellence, problem-solving, and delivery. I am proud of my contributions to the company's success and grateful for the opportunities for growth and development that I experienced during my time there.",
    year: 2023,
    id: 1,
    from: 2023,
    to: 2023,
    cvDescription:
      "As a Senior React Developer at Trustworthy Company, I played a pivotal role in the development and maintenance of critical software applications, contributing to the company's mission of providing reliable and secure solutions to its clients. My responsibilities included providing leadership and mentorship to junior developers, collaborating with cross-functional teams, leading discussions on best practices and code standards, delivering high-quality code, resolving complex technical challenges, and contributing to the successful delivery of projects.",
  },
  {
    company: 'Casumo',
    title: 'Casumo',
    headline: 'A friendly online casino',
    skills:
      'React, Typescript, graphQl, Contentful, Wordpress, Knockout.js, Keycloak, Jenkins',
    link: 'https://casumo.com/',
    year: 2023,
    id: 2,
    description:
      'During my tenure as a Senior React Developer at Casumo, an innovative online casino, I played a pivotal role in shaping the frontend architecture and user experience of their gaming platform. With a focus on delivering captivating gaming experiences, I collaborated closely with cross-functional teams to develop cutting-edge features and enhancements.',
    responsibilities: [
      'Led the development of frontend components and features using React.js, ensuring seamless performance and usability across various devices and platforms.',
      'Provided mentorship and guidance to junior developers, fostering a culture of collaboration, learning, and excellence within the team.',
      "Participated in architectural discussions and decision-making processes, advocating for best practices and innovative solutions to drive the evolution of Casumo's gaming platform.",
      'Implemented new features and functionality, conducted thorough code reviews, and resolved complex technical challenges to deliver high-quality software solutions.',
      'Contributed to the optimization of frontend performance and user experience, proactively identifying opportunities for improvement and implementing optimizations to enhance player engagement and satisfaction.',
    ],
    from: 2022,
    to: 2023,
    conclusion:
      "My experience at Casumo as a Senior React Developer was characterized by a relentless pursuit of excellence and innovation in the gaming industry. I am proud to have contributed to Casumo's mission of providing an immersive and entertaining gaming experience to players worldwide, and I am grateful for the opportunity to have been part of such a dynamic and forward-thinking team.",
    cvDescription:
      "A significant portion of my role involved a major migration project, transitioning the existing codebase from Knockout.js to React. This initiative aimed to harness the power of React's component-based architecture, fostering a more maintainable, modular, and efficient codebase",
  },
  {
    company: 'Formunauts',
    title: 'Formunauts',
    headline: 'A fund-raising platform that changes lives',
    skills: 'Angular, Typescript, Rxjs',
    responsibilities: [
      'Mastered Angular within a month to architect a robust communication framework between the Angular-based user interface and the Raisenow API, similar to Stripe, ensuring seamless data flow, optimized performance, and efficient API interactions.',
      'Acquired proficiency in Typescript and RxJS, vital for developing efficient and maintainable code, enabling seamless handling of asynchronous operations and data streams.',
      'Spearheaded the architecture for communication between the Angular UI and the Raisenow API, establishing clear patterns for data exchange, optimizing API requests, and handling responses effectively.',
      'Ensured code quality and reliability through comprehensive testing using Jest, identifying and rectifying potential issues early in the development process.',
      'Successfully integrated the Angular UI with the Raisenow API, navigating its intricacies to ensure smooth data synchronization and accurate transaction handling.',
    ],
    conclusion:
      'My experience at Formunauts as an Angular developer showcased my ability to swiftly learn and apply new technologies, design intricate communication architectures, and collaborate effectively with the team. From mastering Angular, Typescript, and RxJS to ensuring seamless API interactions and conducting comprehensive testing, I made significant contributions to enhancing the functionality and performance of the platform.',
    link: 'https://app.formunauts.com/auth/login',
    id: 3,
    cvDescription:
      "During my time at Formunauts, I had the fantastic opportunity to dive into Angular development for the company's platform. My primary role centered around architecting a robust communication framework between the Angular-based user interface and the Raisenow API, which shares similarities with Stripe.",
    from: 2019,
    to: 2020,
  },
  {
    company: 'Craftstrom',
    title: 'Craftstrom',
    headline: 'Your at home solar system',
    skills: 'ReactNative, Typescript',
    responsibilities: [
      'Designed and implemented the user interface of the mobile app using React Native, leveraging libraries such as react-native-elements and react-native to ensure a seamless and visually appealing experience for users.',
      'Handled user authentication and authorization, orchestrating Ajax calls to communicate with the backend API, and validating user credentials to ensure the security and privacy of our users.',
      'Utilized AsyncStorage to securely store and manage user tokens, ensuring the integrity of user data and facilitating smooth interactions for returning users.',
    ],
    conclusion:
      "My tenure at Craftstrom as a React Native developer was an enriching journey of learning and growth. Working hands-on with JavaScript and React Native allowed me to apply my skills and creativity to a real-world application, witnessing the tangible impact of my work on the app's functionality and user experience. I am proud of the contributions I made to Craftstrom and carry with me the valuable lessons and accomplishments gained during my time there as I continue to progress in my career.",
    link: 'https://play.google.com/store/apps/details?id=com.craftstrom&hl=en&gl=US',
    id: 4,
    from: 2018,
    to: 2019,
    cvDescription:
      "I developed the user interface of the Craftstrom mobile app using React Native, ensuring a seamless and visually appealing experience for users. My responsibilities included handling user authentication and authorization, orchestrating Ajax calls to communicate with the backend API, and utilizing AsyncStorage to securely store and manage user tokens. This experience allowed me to apply my skills in JavaScript and React Native to a real-world application, contributing to the app's functionality and user experience.",
  },
  {
    company: 'AsyncLabs',
    title: 'Revuto',
    headline: 'Manage your subscriptions',
    skills: 'React, Redux',
    responsibilities: [
      "As the sole developer for Revuto, I played a pivotal role in the platform's evolution, employing technologies such as Axios, interceptors, and React Context to efficiently manage API requests and responses, ensuring data integrity and seamless user experiences.",
      'Successfully integrated APIs into the Revuto platform, optimizing data flow and communication. Leveraging interceptors, I handled authentication, error handling, and other cross-cutting concerns, enhancing the reliability and security of the application.',
      'Contributed to the PIMSF app, focusing on data visualization to convey complex pipeline-related information comprehensively to users.',
      'Crafted visualizations within the PIMSF app to empower users to interpret data effortlessly, aiding decision-making processes.',
    ],
    conclusion:
      'My engagement with AsyncLabs allowed me to make meaningful contributions as a sole developer, enhancing the functionality of the Revuto platform through meticulous API integration, React Context utilization, and a keen focus on user experience. Additionally, my work on the PIMSF app reinforced my expertise in data visualization, further showcasing my ability to deliver impactful solutions across diverse projects.',
    link: 'https://revuto.com/',
    id: 5,
    from: 2019,
    to: 2020,
    cvDescription:
      "Revuto was a platform that allowed users to manage their subscriptions efficiently. As the sole developer for Revuto, I played a pivotal role in the platform's evolution, employing technologies such as Axios, interceptors, and React Context to efficiently manage API requests and responses. My responsibilities included integrating APIs into the platform, optimizing data flow and communication, and enhancing the reliability and security of the application. This experience allowed me to hone my skills in API integration and data management, contributing to the platform's success.",
  },
  {
    company: 'Code Institute',
    title: 'Code Institute',
    headline: 'A coding bootcamp',
    skills: 'HTML, CSS, Javascript',
    link: 'https://codeinstitute.net/global/',
    from: 2016,
    to: 2021,
    responsibilities: [
      "Undertook a pivotal role in enhancing the functionality and user experience of Code Institute's Learning Management System (LMS) based on Django.",
      'Integrated various new components into the existing LMS, including quizzes, embedded repl.it, sidebars, course content, headers, and footers, transforming it into a seamless and efficient platform for learners.',
      'Coded the interface of every course module, demonstrating prowess in front-end development and leveraging CSS and SCSS skills to create visually appealing and intuitive user interfaces.',
      'Optimized the existing LMS codebase to enhance performance, resulting in a cleaner and swifter platform that improved user experience and streamlined backend processes.',
    ],
    conclusion:
      'My experience at Code Institute was characterized by a commitment to excellence and a focus on continuous improvement. Through transforming the LMS, I honed my CSS, SCSS, and front-end development skills while addressing challenges posed by an intricate codebase. Collaboration with a talented designer enriched the project, merging aesthetics with functionality seamlessly to create a sophisticated and user-centric platform.',
    id: 6,
    cvDescription:
      "I was product developer, mentor and front end developer. I was responsible for enhancing the functionality and user experience of Code Institute's Learning Management System (LMS) based on Django. My responsibilities included integrating various new components into the existing LMS, coding the interface of every course module, and optimizing the codebase to enhance performance. This experience allowed me to hone my front-end development skills and collaborate with a talented designer to create a sophisticated and user-centric platform.",
  },
  {
    company: 'Supersuperstudio',
    title: 'Peaks',
    headline: 'The best landing page',
    skills: 'HTML, CSS, Javascript',
    responsibilities: [
      'Assumed the role of a static website developer at Supersuperstudio, responsible for creating impactful online interfaces that aligned with provided design concepts.',
      'Translated static design visuals into fully functional user interfaces using HTML, SCSS, and JavaScript.',
      "Meticulously transformed static visuals into interactive and engaging web pages, leveraging HTML as the structural backbone and SCSS to style elements to mirror the design's aesthetics.",
      'Incorporated JavaScript to enhance interactivity and functionality, creating dynamic elements, implementing animations, and facilitating user engagement.',
    ],
    conclusion:
      'My role at Supersuperstudio as a static website developer provided an exciting blend of creativity and technical expertise. By converting design concepts into live websites using HTML, SCSS, and JavaScript, I contributed to the digital presence of various brands while continuously pushing my boundaries to create visually stunning and functionally robust interfaces. Each project presented unique challenges that fueled my continuous learning journey and allowed me to merge design aesthetics with technical proficiency.',
    link: 'https://antonijasimic.bitbucket.io/peaks/',
    id: 7,
    from: 2015,
    to: 2016,
    cvDescription:
      'I was super excited to work on the Peaks project at Supersuperstudio, where I was responsible for creating impactful online interfaces that aligned with the provided design concepts. My responsibilities included translating static design visuals into fully functional user interfaces using HTML, SCSS, and JavaScript. By incorporating JavaScript to enhance interactivity and functionality, I was able to create dynamic elements, implement animations, and facilitate user engagement. This experience allowed me to merge design aesthetics with technical proficiency, contributing to the digital presence of various brands.',
  },
  {
    company: 'OPX',
    title: 'OPX',
    headline: "Let's fund those NGOs",
    skills: 'Javascript, Angular',
    responsibilities: [
      'Implemented user interface into Angular platform using Angular Material and CSS, ensuring pixel-perfect rendering of Figma designs.',
      'Created components to render static or mocked data and tackled challenges such as coding a masonry dashboard.',
      'Utilized Angular templating skills to translate design concepts into functional user interfaces.',
      'Wrote unit tests using Jest to ensure code quality and reliability.',
    ],
    conclusion:
      'My experience at OPX as a developer allowed me to leverage my skills in JavaScript and Angular to contribute to the development of a platform aimed at funding NGOs. By implementing user interfaces, creating components, and writing unit tests, I played a crucial role in ensuring the functionality and reliability of the application. Completing all assigned tasks demonstrated my ability to meet project requirements effectively and efficiently.',
    link: 'https://www.opx.org/',
    id: 8,
    from: 2020,
    to: 2021,
    cvDescription:
      'I had the opportunity to work on the OPX platform, where I implemented user interfaces into the Angular platform using Angular Material and CSS. My responsibilities included creating components, translating design concepts into functional user interfaces, and writing unit tests to ensure code quality and reliability. These efforts played a key role in enhancing the functionality and user experience of the platform, showcasing my ability to leverage JavaScript and Angular to deliver impactful solutions.',
  },
  {
    company: 'AsyncLabs',
    title: 'Pimsf',
    headline: "What's with the pipes?",
    skills: 'Javascript, React, dc, d3',
    link: 'https://feromihin.hr/services-and-solutions/solutions/pimsf-pipeline-integrity-management-system/',
    responsibilities: [
      'Implemented D3/DC charts into the explorer section of the PIMSF app, making them draggable and resizable using the react-grid-layout npm package.',
      'Created a plain draggable and resizable 8-column grid layout and added graphs to columns, ensuring that the graphs followed the height and width of the parent column.',
      'Ensured responsiveness of the grid layout by utilizing built-in properties and functions of react-grid-layout to create a grid based on breakpoints.',
      'Developed a changelog history tree to display each version of a pipeline using Mermaid.js, where each new version is treated as a child and each old version as a parent.',
      'Utilized Axios to fetch data points from the API and implemented functionality to delete or approve pipelines, dynamically changing their color based on approval status.',
    ],
    conclusion:
      "My role in developing the PIMSF app was pivotal in enhancing its functionality and user experience, particularly in the explorer section. By implementing draggable and resizable D3/DC charts and creating a changelog history tree, I contributed to improving data visualization and user interaction. Additionally, ensuring responsiveness and integrating functionality for pipeline approval and deletion further enhanced the usability of the application. My experience with PIMSF allowed me to leverage JavaScript, React, D3, and other technologies to deliver a robust solution that met the project's requirements.",
    id: 9,
    from: 2019,
    to: 2020,
    cvDescription:
      'During my time at AsyncLabs, I had the opportunity to work on the PIMSF app, focusing on the explorer section. My responsibilities included implementing D3/DC charts, creating a changelog history tree, ensuring responsiveness of the grid layout, and developing functionality for pipeline approval and deletion. These efforts played a key role in enhancing the functionality and user experience of the application, showcasing my ability to leverage JavaScript, React, D3, and other technologies to deliver impactful solutions.',
  },
  {
    from: 2016,
    to: 2017,
    company: 'Tint',
    title: 'Tint',
    headline: 'Bring your ideas to life',
    skills: 'Javascript, Scss',
    link: 'https://www.tintup.com/',
    responsibilities: [
      "Implemented pixel-perfect layout based on Zeplin designs for the homepage and landing page of Tint's product.",
      'Coded global navigation and footer elements to ensure consistency and functionality across the website.',
      'Developed animations and transitions from scratch using custom CSS and jQuery/JavaScript.',
      'Participated in design sessions, collaborating with the team to bring creative ideas to life and ensure a visually appealing user experience.',
    ],
    conclusion:
      "My role in developing Tint's homepage and landing page allowed me to contribute to the enhancement of their online presence and user engagement. By delivering pixel-perfect layouts, coding navigation elements, and developing animations and transitions, I played a key role in creating a visually appealing and functional website. Additionally, the collaborative and friendly atmosphere during design sessions fostered creativity and innovation, making the project an enjoyable and rewarding experience.",
    id: 10,
    cvDescription:
      "During my time at Tint, I had the opportunity to work on the homepage and landing page of their product, contributing to the enhancement of their online presence and user engagement. My responsibilities included implementing pixel-perfect layouts, coding global navigation and footer elements, developing animations and transitions, and collaborating with the team to bring creative ideas to life. These efforts played a key role in creating a visually appealing and functional website that showcased Tint's product effectively.",
  },
  {
    from: 2023,
    to: 2024,
    company: 'Mochalabs',
    id: 11,
    title: 'Funder Pro',
    headline: 'Make your trading exceptional',
    skills: 'Javascript, React, Redux, Typescript, React Query',
    link: 'https://mochalabs.com/',
    responsibilities: [
      'Implemented dynamic and responsive user interfaces using React, leveraging its component-based architecture to develop modular and reusable UI components.',
      'Utilized TypeScript to bring type safety and enhanced tooling to the development process, identifying and preventing potential errors early in the development lifecycle.',
      'Integrated React Query into the Funder Pro platform to facilitate efficient data fetching and state management, optimizing network requests and improving platform performance.',
      'Contributed to driving innovation and delivering a best-in-class trading experience to users by harnessing the power of React, TypeScript, and React Query.',
    ],
    conclusion:
      'My role in enhancing the Funder Pro trading platform has been pivotal in elevating its performance, reliability, and user satisfaction. By implementing dynamic and responsive user interfaces with React, ensuring type safety and cleaner code with TypeScript, and optimizing data fetching and state management with React Query, I have contributed to delivering a seamless trading experience for our users. These contributions have played a key role in driving innovation and establishing Funder Pro as a leading platform in the trading industry.',
    cvDescription:
      'During my time at Mochalabs, I had the opportunity to work on the Funder Pro trading platform, where I played a key role in enhancing its performance and user experience. My responsibilities included implementing dynamic and responsive user interfaces, utilizing TypeScript for type safety, and integrating React Query for efficient data fetching and state management. These efforts contributed to delivering a best-in-class trading experience to users and driving innovation within the platform.',
  },
]

export default projects
