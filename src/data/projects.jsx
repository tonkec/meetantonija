import { rootImageUrl } from 'rootImageUrl'

const modeMobileCover =
  rootImageUrl + 'modemobile/trimbox.avif'
const modeMobilePhoto =
  'https://static-academy.siteground.com/wp-content/uploads/sites/2/2023/11/Build_a_list_header_image-1.jpg'

const projects = [
  {
    coverPhoto: modeMobileCover,
    // PLACEHOLDER: replace generic photo with approved Trimbox product screenshots when available.
    photos: [modeMobilePhoto],
    location: 'Remote',
    company: 'Mode Mobile',
    title: 'Trimbox',
    headline: 'Trim your inbox with ease',
    skills:
      'React Native, Typescript, Expo, EAS, Firebase, RevenueCat, Mixpanel, Jest, Maestro',
    link: 'https://www.trimbox.io/',
    id: 11,
    description:
      'Trimbox is Mode Mobile’s subscription-based inbox product. As a Senior Frontend Developer on the React Native team, I contribute to production feature work across paywalls and subscriptions, app-open dialog coordination, analytics, Remote Config experiments, pricing validation, testing, and Expo/EAS release workflows — without claiming sole ownership of the product.',
    responsibilities: [
      {
        title: 'Paywall and subscriptions',
        description:
          'Implementing subscription and paywall flows with RevenueCat, including coalescing deferred paywall intents so duplicate requests cannot open overlapping paywalls.',
      },
      {
        title: 'App-open dialog coordination',
        description:
          'Coordinating privacy, pricing, survey and subscription UI through a shared popup flow so startup dialogs appear sequentially and do not race past auth or navigation changes.',
      },
      {
        title: 'Analytics and experiments',
        description:
          'Integrating Mixpanel analytics and experiment eligibility so product behaviour can be measured and iterated on safely.',
      },
      {
        title: 'Firebase Remote Config',
        description:
          'Implementing Remote Config flags, defaults and safe fallbacks so paywalls, surveys and eligibility can change without a new app release.',
      },
      {
        title: 'Pricing validation',
        description:
          'Hardening offerings and pricing presentation around currency precision, zero-decimal currencies and mismatched values so invalid checkout paths stay blocked.',
      },
      {
        title: 'Testing with Jest and Maestro',
        description:
          'Writing and maintaining unit and end-to-end tests with Jest and Maestro around critical purchase, deferred-paywall and race-condition scenarios.',
      },
      {
        title: 'Build and release with Expo/EAS',
        description:
          'Supporting iOS and Android release-related work with Expo and EAS, including React Native dependency and platform upgrades.',
      },
      {
        title: 'Experimental products',
        description:
          'Contributing to experimental product work such as the Qualified Leads Survey and early planning for Trimbox Lite.',
      },
    ],
    outcomes: [
      'Improved reliability of subscription and app-open behaviour',
      'Prevented overlapping user flows around paywalls and startup dialogs',
      'Enabled safer remote configuration of product experiments',
      'Increased test coverage for critical subscription behaviour',
      'Reduced risk around pricing presentation',
    ],
    from: 2026,
    fromMonth: 'March',
    methodology: 'Agile',
    position: 'Senior Frontend Developer',
    team: 100,
    learned:
      'I am deepening my experience with React Native product work, subscription flows, RevenueCat, Firebase Remote Config, Maestro testing, and Expo/EAS release pipelines.',
    conclusion:
      'At Mode Mobile I contribute across the Trimbox stack — from React Native features and paywalls to analytics, testing, and release — while helping keep complex product flows reliable in production.',
    collaboration: 'Slack, Jira, Google Meet',
    problem:
      'The challenge is shipping polished subscription and product experiences in React Native while coordinating complex popups and navigation, keeping the app measurable, and staying ready to release through Expo/EAS.',
    manager: (
      <span>
        I am currently working with the Mode Mobile team on Trimbox as a Senior
        Frontend Developer.
      </span>
    ),
  },
  {
    coverPhoto: '/projects/duga/illustration.png',
    photos: [
      '/projects/duga/dashboard.png',
      '/projects/duga/settings.png',
      '/projects/duga/report.png',
      '/projects/duga/illustration.png',
    ],
    location: 'Remote',
    company: 'Personal project',
    title: 'Duga',
    headline: 'Queer dating and community for the Balkans',
    skills:
      'React, TypeScript, Vite, React Query, Auth0, Socket.IO, Node.js, Express, PostgreSQL, Sequelize, Amazon S3, AWS Rekognition, Netlify, Heroku',
    link: 'https://duga.chat/',
    repositoryUrl: 'https://github.com/tonkec/duga_frontend_v2',
    id: 12,
    description:
      'Duga is a queer dating and community application for the Balkans. As creator and lead full-stack engineer, I designed and built the product across a Vite/React/TypeScript frontend and an Express/PostgreSQL backend — including Auth0 authentication, real-time chat, moderated photo uploads, profiles and a community forum. Occasional collaborators contributed over time; I remain the primary maintainer.',
    responsibilities: [
      {
        title: 'Full-stack product ownership',
        description:
          'Designed and built the current frontend and backend as the primary maintainer, from product flows and API design through deployment.',
      },
      {
        title: 'Authentication and onboarding',
        description:
          'Integrated Auth0 with app-session enforcement, email verification and route guards that lock the product until onboarding is complete.',
      },
      {
        title: 'Real-time messaging',
        description:
          'Implemented Socket.IO chat with reactions, typing indicators, mentions, media sharing and group-chat admin flows.',
      },
      {
        title: 'Photo uploads and moderation',
        description:
          'Built S3 uploads with Sharp preprocessing and AWS Rekognition moderation for profile and chat media.',
      },
      {
        title: 'Community forum',
        description:
          'Shipped forum categories, questions, answers, votes, replies, reactions and image support.',
      },
      {
        title: 'Deployment',
        description:
          'Deployed the frontend on Netlify and the API on Heroku with staging and production environments.',
      },
    ],
    outcomes: [
      'Shipped a production full-stack product at duga.chat',
      'Connected auth, realtime chat, moderated uploads and forum into one maintainable system',
      'Established staging and production deployment paths for frontend and API',
    ],
    from: 2024,
    fromMonth: 'December',
    methodology: 'Kanban',
    position: 'Creator & Lead Full-stack Engineer',
    team: 3,
    learned:
      'Building Duga end to end taught me how frontend product flows and backend boundaries have to stay aligned — especially around auth sessions, realtime events and private media access.',
    conclusion:
      'Duga is a personal production product that shows how I design and ship a complete application — from React/TypeScript UI to Express/PostgreSQL API, realtime messaging and moderated media.',
    collaboration: 'GitHub, Trello',
    problem:
      'The challenge was building a trustworthy queer meeting space as a full product: secure auth, private media, realtime chat and community discussion all had to work together reliably.',
    manager: (
      <span>
        Personal project. I am the creator and primary maintainer, with
        occasional contributions from collaborators over time.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'casumo/cubes.jpg',
    photos: [
      rootImageUrl + 'casumo/1.jpg',
      rootImageUrl + 'casumo/4.jpg',
      rootImageUrl + 'casumo/3.jpg',
      rootImageUrl + 'casumo/2.jpg',
    ],

    location: 'Remote',
    company: 'Casumo',
    title: 'Casumo',
    headline: 'A friendly online casino',
    skills: 'React, Typescript, Contentful, Keycloak',
    link: 'https://casumo.com/',
    id: 2,
    description:
      'Casumo is an online casino with many games to choose from. During my tenure as a Senior React Developer at Casumo, an innovative online casino, I played a pivotal role in shaping the frontend architecture and user experience of their gaming platform. With a focus on delivering captivating gaming experiences, I collaborated closely with cross-functional teams to develop cutting-edge features and enhancements.',
    responsibilities: [
      {
        title: 'Led the migration of the existing codebase',
        description:
          'Architected and implemented a robust migration strategy, ensuring a seamless transition to React while maintaining the platform’s functionality and performance. Migrated the existing codebase from Knockout.js to React, leveraging React’s component-based architecture to enhance maintainability and efficiency.',
      },
      {
        title: 'Collaborated with cross-functional teams',
        description:
          'Worked closely with designers, backend developers, and QA engineers to deliver captivating gaming experiences to players worldwide.',
      },
      {
        title: 'Contributed to the development of features using GraphQL',
        description:
          'Leveraged GraphQL to optimize data fetching and improve the performance of the platform, enhancing the user experience and enabling real-time interactions.',
      },
      {
        title: 'Integrated external services',
        description:
          'Ensured seamless integration of third-party services, enhancing the platform’s functionality and enabling new features and capabilities for players.',
      },
      {
        title: 'Optimized the platform’s performance',
        description:
          'Implemented best practices in React development, optimized code performance, and enhanced the user experience through responsive design and interactive features.',
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
    collaboration: 'Google Meet, Gitlab, Slack, Jira, Confluence',
    team: 300,
    problem:
      "The most challenging part of the project was migrating the existing codebase from Knockout.js to React. It required a deep understanding of both frameworks and a meticulous approach to ensure a seamless transition without compromising the platform's functionality and performance.",
    manager: (
      <span>
        My manager was{' '}
        <a
          className="text-black"
          href="https://www.linkedin.com/in/armandofernandez/"
          target="_blank"
          rel="noreferrer"
        >
          Armando Fernandez
        </a>
        , who was a great mentor and provided valuable guidance throughout the
        project. He was always available to answer questions, provide feedback,
        and offer support when needed.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'formunauts/money.jpg',
    photos: [
      rootImageUrl + 'formunauts/2.png',
      rootImageUrl + 'formunauts/3.png',
      rootImageUrl + 'formunauts/4.png',
    ],

    company: 'Formunauts',
    location: 'Remote',
    title: 'Formunauts',
    headline: 'A fund-raising platform',
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
      {
        title: 'Collaborating with the Team',
        description:
          'Collaborated closely with the development team to ensure alignment on project goals, resolve technical challenges, and deliver high-quality code that met the platform’s requirements.',
      },
    ],
    conclusion:
      'My experience at Formunauts as an Angular developer showcased my ability to swiftly learn and apply new technologies, design intricate communication architectures, and collaborate effectively with the team. From mastering Angular, Typescript, and RxJS to ensuring seamless API interactions and conducting comprehensive testing, I made significant contributions to enhancing the functionality and performance of the platform.',
    link: 'https://app.formunauts.com/auth/login',
    id: 3,
    description:
      "This app allows users to fund NGOs. I dove deep into Angular development for the company's platform. My primary role centered around architecting a robust communication framework between the Angular-based user interface and the Raisenow API, which shares similarities with Stripe.",
    from: 2021,
    to: 2022,
    team: 30,
    learned:
      'I learned how to work with Angular, Typescript, and RxJS., how integrate systems and ensure code quality through comprehensive testing using Jest.',
    position: 'Mid Angular Developer',
    collaboration: 'Google Meet, Github, Slack, Jira, Confluence',
    methodology: 'Scrum',
    problem:
      'The most challenging part of the project was mastering Angular within a month to architect a robust communication framework between the Angular-based user interface and the Raisenow API, similar to Stripe.',
    manager: (
      <span>
        My manager was{' '}
        <a
          className="text-black"
          href="https://www.linkedin.com/in/metakermit/"
          target="_blank"
          rel="noreferrer"
        >
          Dražen Lučanin
        </a>{' '}
        who provided valuable guidance and support throughout the project. He
        was instrumental in helping me navigate the complexities of the
        Formunauts platform and ensuring the successful integration of the
        Angular UI with the Raisenow API.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'revuto/graph.jpg',
    photos: [rootImageUrl + 'revuto/1.png'],
    location: 'Remote',
    company: 'AsyncLabs',
    title: 'Revuto',
    headline: 'Manage your subscriptions',
    skills: 'React, Redux, JavaScript, TypeScript',
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
      'My engagement with AsyncLabs allowed me to make meaningful contributions as a sole developer, enhancing the functionality of the Revuto platform through meticulous API integration, React Context utilization, and a keen focus on user experience.',
    link: 'https://revuto.com/',
    id: 5,
    from: 2020,
    to: 2021,
    team: 1,
    methodology: 'Kanban',
    collaboration: 'Jira, Slack, Bitbucket',
    position: 'Mid React Developer',
    learned:
      'I learned how to work as a single developer and to rely solely on myself, my skills and knowledge. At first, it was challenging, but as I developed stable and scalable architecture, I learned to trust myself as a developer.',
    description:
      "Revuto is a platform that allowed users to manage their subscriptions efficiently. As the sole developer for Revuto, I played a pivotal role in the platform's evolution, employing technologies such as Axios, interceptors, and React Context to efficiently manage API requests and responses. ",
    problem:
      "The most challenging part of the project was being the sole developer for Revuto, which required me to take on multiple responsibilities and ensure the platform's stability and scalability. I had to rely solely on myself, my skills, and knowledge to develop a robust and efficient architecture.",
    manager: (
      <span>
        I was the sole developer for Revuto, which allowed me to take full
        ownership of the project and make decisions independently. I was
        responsible for the platform's development, maintenance, and
        optimization, ensuring that it met the requirements and expectations of
        the users.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'codeinstitute/board.jpg',
    photos: [
      rootImageUrl + 'codeinstitute/1.png',
      rootImageUrl + 'codeinstitute/4.png',
    ],
    location: 'Remote',
    company: 'Code Institute',
    title: 'Code Institute',
    headline: 'From zero to hero in several months',
    skills: 'Javascript, Django, Python',
    link: 'https://codeinstitute.net/global/',
    from: 2017,
    to: 2020,
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
      "Code Institute is an irisih bootcamp where you learn to code, from zero to hero. I was product developer, mentor and front end developer. I was responsible for enhancing the functionality and user experience of Code Institute's Learning Management System (LMS) based on Django. My responsibilities included integrating various new components into the existing LMS, coding the interface of every course module, and optimizing the codebase to enhance performance. ",
    problem:
      'The most challenging part of the project was optimizing the existing LMS codebase to enhance performance, resulting in a cleaner and swifter platform that improved user experience and streamlined backend processes.',
    manager: (
      <span>
        My manager was{' '}
        <a
          className="text-black"
          href="https://www.linkedin.com/in/brian-o-grady-18a2153/"
          target="_blank"
          rel="noreferrer"
        >
          Brian O'Grady
        </a>
        , who provided valuable guidance and support throughout the project. He
        was instrumental in helping me navigate the complexities of the LMS
        codebase and ensuring the successful integration of new components and
        features.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'tint/social.jpg',
    photos: [rootImageUrl + 'tint/1.png', rootImageUrl + 'tint/2.png'],
    location: 'Remote',
    from: 2015,
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
      'Tint is a platform that allows users to create and manage social media content. I had the opportunity to work on the homepage and landing page of their product, contributing to the enhancement of their online presence and user engagement.My responsibilities included implementing pixel- perfect layouts, coding global navigation and footer elements, developing animations and transitions, and collaborating with the team to bring creative ideas to life.  ',
    problem:
      'The most challenging part of the project was developing animations and transitions from scratch using custom CSS and jQuery/JavaScript. I had to ensure that the animations and transitions were smooth, visually appealing, and enhanced the user experience.',
    manager: (
      <span>
        My manager was{' '}
        <a
          className="normal-font text-black"
          href="https://www.linkedin.com/in/danielbaldwinco/"
          target="_blank"
          rel="noreferrer"
        >
          Daniel Baldwin
        </a>
        , who provided valuable guidance and support throughout the project. He
        was instrumental in helping me navigate the complexities of the Tint
        project and ensuring the successful implementation of the homepage and
        landing page.
      </span>
    ),
  },
  {
    coverPhoto: rootImageUrl + 'funderpro/1.png',
    photos: [
      rootImageUrl + 'funderpro/1.png',
      rootImageUrl + 'funderpro/2.png',
      rootImageUrl + 'funderpro/3.png',
    ],
    location: 'Zagreb',
    from: 2023,
    fromMonth: 'September',
    company: 'Mochalabs',
    id: 10,
    title: 'FunderPro',
    methodology: 'Kanban',
    headline: 'Make your trading exceptional',
    skills:
      'React, TypeScript, React Query, JavaScript, CSS, Frontend Architecture, API Integration',
    link: 'https://funderpro.com/',
    responsibilities: [
      {
        title: 'Reducing redundant API traffic',
        description:
          'Introduced React Query, reworked data fetching and improved caching — reducing redundant API calls by 40%.',
      },
      {
        title: 'Onboarding and KYC',
        description:
          'Enhanced sign-up, KYC and onboarding so identity verification stayed clear while supporting business requirements.',
      },
      {
        title: 'Product experience',
        description:
          'Improved usability using insights from user interviews, simplifying interfaces and clarifying important workflows.',
      },
      {
        title: 'New fintech capabilities',
        description:
          'Extended the mature production application with an affiliate system, coupon creation and related frontend functionality.',
      },
      {
        title: 'Frontend engineering standards',
        description:
          'Hosted weekly knowledge-sharing sessions on React, TypeScript, JavaScript and React Query to help the team ship faster.',
      },
    ],
    outcomes: [
      'Reduced redundant API calls by 40%',
      'Made onboarding and KYC flows clearer for users',
      'Improved usability of important product workflows',
      'Expanded the platform with affiliate and coupon capabilities',
      'Helped frontend engineers become more productive through recurring knowledge sharing',
    ],
    collaboration: 'Jira, Slack, Gitlab, Google Meet, Notion',
    learned:
      'Shipping inside a mature fintech product reinforced how caching, onboarding clarity and shared engineering standards compound — especially when React Query becomes the default way the team thinks about server state.',
    position: 'Senior React Developer',
    team: 100,
    conclusion:
      'At FunderPro I focused on production frontend problems: cutting redundant API traffic, clarifying onboarding and KYC, improving usability from user interviews, extending the platform with affiliate and coupon capabilities, and raising frontend standards through weekly knowledge sharing.',
    description:
      'FunderPro is a production fintech platform. As a Senior React Developer I improved core user flows, frontend architecture, application performance and developer productivity while continuously shipping new product features.',
    problem:
      'The platform needed more efficient data fetching, clearer onboarding and KYC, more usable product workflows, room to grow with new fintech capabilities, and stronger shared frontend knowledge across the team.',
    manager: (
      <span>
        My manager was{' '}
        <a
          className="text-black"
          href="https://www.linkedin.com/in/mateosimonovic/"
          target="_blank"
          rel="noreferrer"
        >
          Mateo Simonović
        </a>
        , who provided valuable guidance and support throughout the project.
      </span>
    ),
  },
]

export default projects
