import FakeBrowser from '../pages/ProjectPage/components/FakeBrowser'
import Graph from '../pages/ProjectPage/components/Graph'
import Dashboard from '../pages/HomePage/components/Videos/components/Dashboard'
import Board from '../pages/ProjectPage/components/Board'
import Mountains from '../pages/ProjectPage/components/Mountains'
import funderpro from '../images/funderpro/1.png'
import casumo from '../images/casumo/1.jpg'
import formunauts from '../images/formunauts/1.png'
import crafstrom from '../images/crafstrom/1.png'
import revuto from '../images/revuto/1.png'
import codeinstitute from '../images/codeinstitute/1.png'
import peaks from '../images/peaks/1.jpeg'
import tint from '../images/tint/1.jpeg'

const projects = [
  {
    headerImage: casumo,
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Graph />
      </FakeBrowser>
    ),
    location: 'Remote',
    company: 'Casumo',
    title: 'Casumo',
    headline: 'A friendly online casino',
    skills:
      'React, Typescript, graphQl, Contentful, Wordpress, Knockout.js, Keycloak, Jenkins',
    link: 'https://casumo.com/',
    id: 2,
    description:
      'During my tenure as a Senior React Developer at Casumo, an innovative online casino, I played a pivotal role in shaping the frontend architecture and user experience of their gaming platform. With a focus on delivering captivating gaming experiences, I collaborated closely with cross-functional teams to develop cutting-edge features and enhancements.',
    responsibilities: [
      {
        title:
          'Led the migration of the existing codebase from Knockout.js to React',
        description:
          'Architected and implemented a robust migration strategy, ensuring a seamless transition to React while maintaining the platform’s functionality and performance.',
      },
      {
        title:
          'Collaborated with cross-functional teams to develop cutting-edge features and enhancements',
        description:
          'Worked closely with designers, backend developers, and QA engineers to deliver captivating gaming experiences to players worldwide.',
      },
      {
        title:
          'Contributed to the development of real-time interactive features using GraphQL',
        description:
          'Leveraged GraphQL to optimize data fetching and improve the performance of the platform, enhancing the user experience and enabling real-time interactions.',
      },
      {
        title:
          'Integrated external services such as Contentful, Wordpress, Keycloak, and Jenkins',
        description:
          'Ensured seamless integration of third-party services, enhancing the platform’s functionality and enabling new features and capabilities for players.',
      },
    ],
    from: 2022,
    to: 2023,
    methodology: 'Scrum',
    position: 'Senior React Developer',
    tem: 300,
    learned:
      'I learned how to work with a large codebase and how to migrate from Knockout.js to React. I also learned how to work with external services like Contentful, Wordpress, Keycloak, and Jenkins. I even had to read some Java code, but I did not go deep into it.',
    conclusion:
      "My experience at Casumo as a Senior React Developer was characterized by a relentless pursuit of excellence and innovation in the gaming industry. I am proud to have contributed to Casumo's mission of providing an immersive and entertaining gaming experience to players worldwide, and I am grateful for the opportunity to have been part of such a dynamic and forward-thinking team.",
    description:
      "A significant portion of my role involved a major migration project, transitioning the existing codebase from Knockout.js to React. This initiative aimed to harness the power of React's component-based architecture, fostering a more maintainable, modular, and efficient codebase",
    collaboration: 'Google Meet, Gitlab, Slack, Jira, Confluence',
  },
  {
    headerImage: formunauts,
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Dashboard title="Formunauts" />
      </FakeBrowser>
    ),
    company: 'Formunauts',
    location: 'Remote',
    title: 'Formunauts',
    headline: 'A fund-raising platform that changes lives',
    skills: 'Angular, Typescript, Rxjs, Jest',
    responsibilities: [
      {
        title: 'Mastering Angular',
        description:
          'Mastered Angular within a month to architect a robust communication framework between the Angular-based user interface and the Raisenow API, similar to Stripe, ensuring seamless data flow, optimized performance, and efficient API interactions.',
      },
      {
        title: 'Acquiring Proficiency in Typescript and RxJS',
        description:
          'Acquired proficiency in Typescript and RxJS, vital for developing efficient and maintainable code, enabling seamless handling of asynchronous operations and data streams.',
      },
      {
        title: 'Spearheading Architecture',
        description:
          'Spearheaded the architecture for communication between the Angular UI and the Raisenow API, establishing clear patterns for data exchange, optimizing API requests, and handling responses effectively.',
      },
      {
        title: 'Ensuring Code Quality',
        description:
          'Ensured code quality and reliability through comprehensive testing using Jest, identifying and rectifying potential issues early in the development process.',
      },
      {
        title: 'Integrating Systems',
        description:
          'Successfully integrated the Angular UI with the Raisenow API, navigating its intricacies to ensure smooth data synchronization and accurate transaction handling.',
      },
    ],
    conclusion:
      'My experience at Formunauts as an Angular developer showcased my ability to swiftly learn and apply new technologies, design intricate communication architectures, and collaborate effectively with the team. From mastering Angular, Typescript, and RxJS to ensuring seamless API interactions and conducting comprehensive testing, I made significant contributions to enhancing the functionality and performance of the platform.',
    link: 'https://app.formunauts.com/auth/login',
    id: 3,
    description:
      "During my time at Formunauts, I had the fantastic opportunity to dive into Angular development for the company's platform. My primary role centered around architecting a robust communication framework between the Angular-based user interface and the Raisenow API, which shares similarities with Stripe.",
    from: 2019,
    to: 2020,
    team: 30,
    learned:
      'I learned how to work with Angular, Typescript, and RxJS., how integrate systems and ensure code quality through comprehensive testing using Jest.',
    position: 'Mid Angular Developer',
    collaboration: 'Google Meet, Github, Slack, Jira, Confluence',
    methodology: 'Scrum',
  },
  {
    headerImage: crafstrom,
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Dashboard title="Crafstrom" />
      </FakeBrowser>
    ),
    location: 'Remote',
    company: 'Craftstrom',
    title: 'Craftstrom',
    headline: 'Your at home solar system',
    skills: 'ReactNative, Typescript, JavaScript',
    responsibilities: [
      {
        title: 'Designing and Implementing User Interface',
        description:
          'Designed and implemented the user interface of the mobile app using React Native, leveraging libraries such as react-native-elements and react-native to ensure a seamless and visually appealing experience for users.',
      },
      {
        title: 'Handling User Authentication and Authorization',
        description:
          'Handled user authentication and authorization, orchestrating Ajax calls to communicate with the backend API, and validating user credentials to ensure the security and privacy of our users.',
      },
      {
        title: 'Utilizing AsyncStorage for Data Management',
        description:
          'Utilized AsyncStorage to securely store and manage user tokens, ensuring the integrity of user data and facilitating smooth interactions for returning users.',
      },
    ],
    conclusion:
      "My tenure at Craftstrom as a React Native developer was an enriching journey of learning and growth. Working hands-on with JavaScript and React Native allowed me to apply my skills and creativity to a real-world application, witnessing the tangible impact of my work on the app's functionality and user experience. I am proud of the contributions I made to Craftstrom and carry with me the valuable lessons and accomplishments gained during my time there as I continue to progress in my career.",
    link: 'https://play.google.com/store/apps/details?id=com.craftstrom&hl=en&gl=US',
    id: 4,
    from: 2018,
    to: 2019,
    team: 5,
    collaboration: 'Github, Trello, Slack',
    methodology: 'Kanban',
    position: 'Mid React Native Developer',
    learned:
      "I learned how to design and implement user interfaces using React Native, handle user authentication and authorization, and utilize AsyncStorage for data management. This experience allowed me to apply my skills in JavaScript and React Native to a real-world application, contributing to the app's functionality and user experience. I had to solve many responsive design issues",
    description:
      "I developed the user interface of the Craftstrom mobile app using React Native, ensuring a seamless and visually appealing experience for users. My responsibilities included handling user authentication and authorization, orchestrating Ajax calls to communicate with the backend API, and utilizing AsyncStorage to securely store and manage user tokens. This experience allowed me to apply my skills in JavaScript and React Native to a real-world application, contributing to the app's functionality and user experience.",
  },
  {
    headerImage: revuto,
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Graph />
      </FakeBrowser>
    ),
    location: 'Remote',
    company: 'AsyncLabs',
    title: 'Revuto',
    headline: 'Manage your subscriptions',
    skills: 'React, Redux, Axios, JavaScript, TypeScript, SCSS, HTML, CSS',
    responsibilities: [
      {
        title: 'Platform Development for Revuto',
        description:
          "As the sole developer for Revuto, I played a pivotal role in the platform's evolution, employing technologies such as Axios, interceptors, and React Context to efficiently manage API requests and responses, ensuring data integrity and seamless user experiences.",
      },
      {
        title: 'API Integration and Optimization',
        description:
          'Successfully integrated APIs into the Revuto platform, optimizing data flow and communication. Leveraging interceptors, I handled authentication, error handling, and other cross-cutting concerns, enhancing the reliability and security of the application.',
      },
      {
        title: 'Enhancing User Experience',
        description:
          'Focused on enhancing user experience through meticulous API integration, React Context utilization, and a keen eye for detail. Implemented features such as subscription management, payment processing, and user authentication to streamline user interactions and improve platform usability.',
      },
      {
        title: 'Data Visualization and Management',
        description:
          'Enhanced data visualization and management capabilities of the platform, leveraging React Context and other state management techniques to provide users with real-time insights into their subscriptions, payments, and account details.',
      },
    ],
    conclusion:
      'My engagement with AsyncLabs allowed me to make meaningful contributions as a sole developer, enhancing the functionality of the Revuto platform through meticulous API integration, React Context utilization, and a keen focus on user experience. Additionally, my work on the PIMSF app reinforced my expertise in data visualization, further showcasing my ability to deliver impactful solutions across diverse projects.',
    link: 'https://revuto.com/',
    id: 5,
    from: 2019,
    to: 2020,
    team: 1,
    methodology: 'Kanban',
    collaboration: 'Jira, Slack, Bitbucket',
    position: 'Mid React Developer',
    learned:
      'I learned how to work as a single developer and to rely solely on myself, my skills and knowledge. At first, it was challenging, but as I developed stable and scalable architecture, I learned to trust myself as a developer.',
    description:
      "Revuto was a platform that allowed users to manage their subscriptions efficiently. As the sole developer for Revuto, I played a pivotal role in the platform's evolution, employing technologies such as Axios, interceptors, and React Context to efficiently manage API requests and responses. My responsibilities included integrating APIs into the platform, optimizing data flow and communication, and enhancing the reliability and security of the application. This experience allowed me to hone my skills in API integration and data management, contributing to the platform's success.",
  },
  {
    headerImage: codeinstitute,
    fakeContent: (
      <FakeBrowser>
        <Board />
      </FakeBrowser>
    ),
    location: 'Remote',
    company: 'Code Institute',
    title: 'Code Institute',
    headline: 'A coding bootcamp',
    skills: 'HTML, CSS, Javascript, Django, Python',
    link: 'https://codeinstitute.net/global/',
    from: 2016,
    to: 2021,
    team: 100,
    responsibilities: [
      {
        title: 'Enhancing Learning Management System (LMS)',
        description:
          "Undertook a pivotal role in enhancing the functionality and user experience of Code Institute's Learning Management System (LMS) based on Django.",
      },
      {
        title: 'Integration of New Components',
        description:
          'Integrated various new components into the existing LMS, including quizzes, embedded repl.it, sidebars, course content, headers, and footers, transforming it into a seamless and efficient platform for learners.',
      },
      {
        title: 'Front-end Development',
        description:
          'Coded the interface of every course module, demonstrating prowess in front-end development and leveraging CSS and SCSS skills to create visually appealing and intuitive user interfaces.',
      },
      {
        title: 'Codebase Optimization',
        description:
          'Optimized the existing LMS codebase to enhance performance, resulting in a cleaner and swifter platform that improved user experience and streamlined backend processes.',
      },
    ],
    collaboration: 'Trello, Slack, Github, Google Meet',
    position: 'Mid Frontend Developer',
    conclusion:
      'My experience at Code Institute was characterized by a commitment to excellence and a focus on continuous improvement. Through transforming the LMS, I honed my CSS, SCSS, and front-end development skills while addressing challenges posed by an intricate codebase. Collaboration with a talented designer enriched the project, merging aesthetics with functionality seamlessly to create a sophisticated and user-centric platform.',
    id: 6,
    learned:
      'Scss was core part of the project, so I learned how to use it efficiently, especially when it comes to mixins and functions in scss. It was long before CSS variables were introduced, so I had to rely on scss variables.',
    description:
      "I was product developer, mentor and front end developer. I was responsible for enhancing the functionality and user experience of Code Institute's Learning Management System (LMS) based on Django. My responsibilities included integrating various new components into the existing LMS, coding the interface of every course module, and optimizing the codebase to enhance performance. This experience allowed me to hone my front-end development skills and collaborate with a talented designer to create a sophisticated and user-centric platform.",
  },
  {
    headerImage: peaks,
    fakeContent: (
      <FakeBrowser>
        <Mountains />
      </FakeBrowser>
    ),
    location: 'Zagreb',
    company: 'Supersuperstudio',
    title: 'Peaks',
    headline: 'The best landing page',
    skills: 'HTML, CSS, Javascript, SCSS, jQuery, Bootstrap',
    responsibilities: [
      {
        title: 'Static Website Development',
        description:
          'Assumed the role of a static website developer at Supersuperstudio, responsible for creating impactful online interfaces that aligned with provided design concepts.',
      },
      {
        title: 'Translation of Design Visuals',
        description:
          'Translated static design visuals into fully functional user interfaces using HTML, SCSS, and JavaScript.',
      },
      {
        title: 'Creation of Interactive Web Pages',
        description:
          "Meticulously transformed static visuals into interactive and engaging web pages, leveraging HTML as the structural backbone and SCSS to style elements to mirror the design's aesthetics.",
      },
      {
        title: 'Implementation of JavaScript',
        description:
          'Incorporated JavaScript to enhance interactivity and functionality, creating dynamic elements, implementing animations, and facilitating user engagement.',
      },
    ],
    conclusion:
      'My role at Supersuperstudio as a static website developer provided an exciting blend of creativity and technical expertise. By converting design concepts into live websites using HTML, SCSS, and JavaScript, I contributed to the digital presence of various brands while continuously pushing my boundaries to create visually stunning and functionally robust interfaces. Each project presented unique challenges that fueled my continuous learning journey and allowed me to merge design aesthetics with technical proficiency.',
    link: 'https://antonijasimic.bitbucket.io/peaks/',
    id: 7,
    from: 2015,
    to: 2016,
    team: 4,
    methodology: 'Kanban',
    collaboration: 'Slack, Bitbucket, Google Meet',
    learned:
      "This was my first job in web development so naturally I learned a lot: I customized jQuery libraries and Bootstrap framework. I read Bootstrap's original code which shaped me into a strong css developer.",
    position: 'Junior Frontend Developer',
    description:
      'I was super excited to work on the Peaks project at Supersuperstudio, where I was responsible for creating impactful online interfaces that aligned with the provided design concepts. My responsibilities included translating static design visuals into fully functional user interfaces using HTML, SCSS, and JavaScript. By incorporating JavaScript to enhance interactivity and functionality, I was able to create dynamic elements, implement animations, and facilitate user engagement. This experience allowed me to merge design aesthetics with technical proficiency, contributing to the digital presence of various brands.',
  },
  {
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Dashboard title="Pimsf" />
      </FakeBrowser>
    ),
    location: 'Zagreb',
    company: 'AsyncLabs',
    title: 'Pimsf',
    headline: "What's with the pipes?",
    skills: 'Javascript, React, Redux, dc, d3',
    link: 'https://feromihin.hr/services-and-solutions/solutions/pimsf-pipeline-integrity-management-system/',
    responsibilities: [
      {
        title: 'Implementation of D3/DC Charts',
        description:
          'Implemented D3/DC charts into the explorer section of the PIMSF app, making them draggable and resizable using the react-grid-layout npm package.',
      },
      {
        title: 'Creation of Draggable and Resizable Grid Layout',
        description:
          'Created a plain draggable and resizable 8-column grid layout and added graphs to columns, ensuring that the graphs followed the height and width of the parent column.',
      },
      {
        title: 'Ensuring Responsiveness of Grid Layout',
        description:
          'Ensured responsiveness of the grid layout by utilizing built-in properties and functions of react-grid-layout to create a grid based on breakpoints.',
      },
      {
        title: 'Development of Changelog History Tree',
        description:
          'Developed a changelog history tree to display each version of a pipeline using Mermaid.js, where each new version is treated as a child and each old version as a parent.',
      },
      {
        title: 'Utilization of Axios for API Data Fetching',
        description:
          'Utilized Axios to fetch data points from the API and implemented functionality to delete or approve pipelines, dynamically changing their color based on approval status.',
      },
    ],
    conclusion:
      "My role in developing the PIMSF app was pivotal in enhancing its functionality and user experience, particularly in the explorer section. By implementing draggable and resizable D3/DC charts and creating a changelog history tree, I contributed to improving data visualization and user interaction. Additionally, ensuring responsiveness and integrating functionality for pipeline approval and deletion further enhanced the usability of the application. My experience with PIMSF allowed me to leverage JavaScript, React, D3, and other technologies to deliver a robust solution that met the project's requirements.",
    id: 8,
    from: 2019,
    to: 2020,
    team: 20,
    methodology: 'Scrum',
    collaboration: 'Gitlab, Slack, Google Meet',
    learned:
      'Using data visualization library was not easy at first, but as I got more familiar with it, I learned how to use it efficiently, I learned how to use Mermaid.js to create a changelog history tree.',
    position: 'Mid React Developer',
    description:
      'During my time at AsyncLabs, I had the opportunity to work on the PIMSF app, focusing on the explorer section. My responsibilities included implementing D3/DC charts, creating a changelog history tree, ensuring responsiveness of the grid layout, and developing functionality for pipeline approval and deletion. These efforts played a key role in enhancing the functionality and user experience of the application, showcasing my ability to leverage JavaScript, React, D3, and other technologies to deliver impactful solutions.',
  },
  {
    headerImage: tint,
    fakeContent: (
      <FakeBrowser className="fake-dashboard">
        <Dashboard title="Tint" />
      </FakeBrowser>
    ),
    location: 'Remote',
    from: 2016,
    to: 2017,
    company: 'Tint',
    title: 'Tint',
    headline: 'Bring your ideas to life',
    skills: 'HTML, CSS, JavaScript, jQuery, Bootstrap',
    link: 'https://www.tintup.com/',
    team: 50,
    collaboration: 'Slack, Google Meet, Github',
    methodology: 'Kanban',
    responsibilities: [
      {
        title: 'Implementation of Pixel-Perfect Layout',
        description:
          "Implemented pixel-perfect layout based on Zeplin designs for the homepage and landing page of Tint's product.",
      },
      {
        title: 'Coding Global Navigation and Footer Elements',
        description:
          'Coded global navigation and footer elements to ensure consistency and functionality across the website.',
      },
      {
        title: 'Development of Animations and Transitions',
        description:
          'Developed animations and transitions from scratch using custom CSS and jQuery/JavaScript.',
      },
      {
        title: 'Participation in Design Sessions',
        description:
          'Participated in design sessions, collaborating with the team to bring creative ideas to life and ensure a visually appealing user experience.',
      },
    ],
    conclusion:
      "My role in developing Tint's homepage and landing page allowed me to contribute to the enhancement of their online presence and user engagement. By delivering pixel-perfect layouts, coding navigation elements, and developing animations and transitions, I played a key role in creating a visually appealing and functional website. Additionally, the collaborative and friendly atmosphere during design sessions fostered creativity and innovation, making the project an enjoyable and rewarding experience.",
    id: 9,
    position: 'Junior Frontend Developer',
    learned:
      'In this job I learned how to use many of the CSS3 properties like transform and transitions. I also learned how to use jQuery to create animations and transitions.',
    description:
      "During my time at Tint, I had the opportunity to work on the homepage and landing page of their product, contributing to the enhancement of their online presence and user engagement. My responsibilities included implementing pixel-perfect layouts, coding global navigation and footer elements, developing animations and transitions, and collaborating with the team to bring creative ideas to life. These efforts played a key role in creating a visually appealing and functional website that showcased Tint's product effectively.",
  },
  {
    headerImage: funderpro,
    fakeContent: (
      <FakeBrowser>
        <Graph />
      </FakeBrowser>
    ),
    location: 'Zagreb',
    from: 2023,
    to: 2024,
    company: 'Mochalabs',
    id: 10,
    title: 'Funder Pro',
    methodology: 'Scrum',
    headline: 'Make your trading exceptional',
    skills: 'Javascript, React, Redux, Typescript, React Query',
    link: 'https://prop.funderpro.com/',
    responsibilities: [
      {
        title: 'Implementation of Dynamic and Responsive User Interfaces',
        description:
          'Implemented dynamic and responsive user interfaces using React, leveraging its component-based architecture to develop modular and reusable UI components.',
      },
      {
        title: 'Utilization of TypeScript for Enhanced Development',
        description:
          'Utilized TypeScript to bring type safety and enhanced tooling to the development process, identifying and preventing potential errors early in the development lifecycle.',
      },
      {
        title: 'Integration of React Query for Efficient Data Fetching',
        description:
          'Integrated React Query into the Funder Pro platform to facilitate efficient data fetching and state management, optimizing network requests and improving platform performance.',
      },
      {
        title:
          'Driving Innovation and Delivering Best-in-Class Trading Experience',
        description:
          'Contributed to driving innovation and delivering a best-in-class trading experience to users by harnessing the power of React, TypeScript, and React Query.',
      },
    ],
    collaboration: 'Jira, Slack, Gitlab, Google Meet, Notion',
    learned:
      'I learned how to work with React Query, which was a new library for me. Working with Mochalabs improved my Typescript skills, I learned about new features and how to use them efficiently.',
    position: 'Senior React Developer',
    team: 100,
    conclusion:
      'My role in enhancing the Funder Pro trading platform has been pivotal in elevating its performance, reliability, and user satisfaction. By implementing dynamic and responsive user interfaces with React, ensuring type safety and cleaner code with TypeScript, and optimizing data fetching and state management with React Query, I have contributed to delivering a seamless trading experience for our users. These contributions have played a key role in driving innovation and establishing Funder Pro as a leading platform in the trading industry.',
    description:
      'During my time at Mochalabs, I had the opportunity to work on the Funder Pro trading platform, where I played a key role in enhancing its performance and user experience. My responsibilities included implementing dynamic and responsive user interfaces, utilizing TypeScript for type safety, and integrating React Query for efficient data fetching and state management. These efforts contributed to delivering a best-in-class trading experience to users and driving innovation within the platform.',
  },
]

export default projects
