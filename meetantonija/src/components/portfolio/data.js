const data = {
  items: [
    {
      title: "Craftstrom",
      client: "Craftstrom",
      technology: "React Native",
      completed: 2019,
      link: "https://www.craftstrom.com/",
      projectLink: "https://async-energy.com/",
      description:
        "Craftstrom enables users to connect to solar panels at their homes. After the login, users are redirected to the dashboard which renders two graphs that show the amount of generated solar energy in the last week. They can also see the state of the battery.",
      technologyDescription:
        "The app was built with React Native, customized both for Android and iOS. Graphs were made with dc.js and d3.js. Besides those app uses some cool react-native npm packages like tcomb, animatable, moment.js, axios and plenty others.",
      myRole: {
        "User Interface":
          "My task was to implement user interface with react-native-elements and react-native and to handle user authentication and authorization with ajax calls to the backend api. User's token is stored using AsyncStorage. The app excited me a lot because I was able to get my hands on JS and React Native. It made me really happy that I can prove and test my JS skills!"
      },
      headerImage: "",
      footerImages: []
    },
    {
      title: "Code Institute",
      client: "Code Institute",
      technology: "HTML, CSS, JS, SCSS ",
      projectLink: "https://courses.codeinstitute.net/",
      completed: 2019,
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
      headerImage: "",
      footerImages: []
    },
    {
      title: "Peaks",
      projectLink: "https://antonijasimic.bitbucket.io/peaks/index.html",
      client: "Craftstrom",
      technology: "React Native",
      completed: 2019,
      link: "https://www.craftstrom.com/",
      description:
        "This is a bootstrap template for web and digital agencies. It is best used for showing portfolio and presenting work in general. Web features, such as preloader, parallax, slideshows, full-screen layout and responsivness, will impress your visitors",
      technologyDescription:
        "Template is built with HTML, CSS, SCSS, Bootstrap, jQuery, JS.",
      myRole: {
        "User Interface":
          "My task was to implement user interface based on the design provided. The hardest part in development process was customization of parallax. It had to be compatible with swiper.js and also fully responsive. Biggest struggle was author section that has multiple parallax. The three images were not supposed to move at the same time which is not default behaviour of parallax plugin. Also, the text should have shown up on hover. And all of that needed to be responsive."
      },
      headerImage: "",
      footerImages: []
    },
    {
      title: "Pimsf",
      client: "Craftstrom",
      projectLink: "https://async-energy.com/",
      technology: "React Native",
      completed: 2019,
      link: "https://www.craftstrom.com/",
      description:
        "Craftstrom enables users to connect to solar panels at their homes. After the login, users are redirected to the dashboard which renders two graphs that show the amount of generated solar energy in the last week. They can also see the state of the battery.",
      technologyDescription:
        "The app was built with React Native, customized both for Android and iOS. Graphs were made with dc.js and d3.js. Besides those app uses some cool react-native npm packages like tcomb, animatable, moment.js, axios and plenty others.",
      myRole: {
        "Pimsf Explorer":
          "The explorer is the most important part of the app. My task was to add the existing D3/DC charts and make them draggable and resizable. I achieved that using react-grid-layout npm package. The first thing I did was creating a plain draggable and resizable 8 column grid as requested. After that, I added graphs to columns. As user resizes column, graph should follow height and width of that column, of its parent. I sent resizedHeight and resizedWidth variable to the redux store and passed them to width and height in D3 attribute. When charts were resizable and draggable, I worked on responsiveness of the grid. React-grid-layout comes with the built-in properties and functions to create a grid based on the breakpoint. I used one function that will take number of columns and a breakpoint as parameters",
        "Changelog History":
          "PIMSF can display different version of pipelines. If a constructor in the field changes something on the pipeline, they should report changes in the app. That report should create a new version of the pipeline. Such pipeline in PIMSF is perceived as a virtual pipeline. My task was to create a changelog history tree that will display each version of a pipeline. This is displayed as a tree where each new version is treated as a child, and each old version as a parent. We used Mermaid.js package to display such tree. Axios was used to get data points from API. Each pipeline in the tree can be deleted or approved. If it is approved, pipeline should change color to green. If it is deleted, it should be deleted from the history tree."
      },
      headerImage: "",
      footerImages: []
    }
  ]
};

export default data;
