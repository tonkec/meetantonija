import kodiraonica from '../images/kodiraonica/1.png'
import hover1 from '../images/hover/1.png'
import hover2 from '../images/hover/2.png'
import lms1 from '../images/kodiraonica/lms/1.png'
import lms2 from '../images/kodiraonica/lms/2.png'
import lms3 from '../images/kodiraonica/lms/3.png'
import landing1 from '../images/kodiraonica/landing_page/1.png'
import landing2 from '../images/kodiraonica/landing_page/2.png'
import landing3 from '../images/kodiraonica/landing_page/3.png'
import chat1 from '../images/duga/chat/1.png'
import chat2 from '../images/duga/chat/2.png'
import chat3 from '../images/duga/chat/3.png'
import chat4 from '../images/duga/chat/4.png'
import dugaLanding1 from '../images/duga/landing_page/1.png'
import dugaLanding2 from '../images/duga/landing_page/2.png'
import blog1 from '../images/kodiraonica/blog/1.png'
import blog2 from '../images/kodiraonica/blog/2.png'

const hobbyProjects = [
  {
    title: 'Library',
    description: 'Text hover effects',
    timeline: '2016 - 2017',
    id: 0,
    projects: [
      {
        route: 'hover-effects',
        title: 'Scss library for hover effects',
        description: 'A library of hover effects for text elements.',
        longDescription: "A SCSS library for text hover effects is an invaluable tool for web developers and designers looking to enhance the interactivity and visual appeal of their websites. This library provides a collection of predefined, reusable hover effects specifically tailored for text elements, allowing for a more dynamic and engaging user experience. In modern web design, interactivity plays a crucial role in capturing users' attention and guiding them through a website's content. Text, being a primary medium for communication on the web, can often appear static and unremarkable. However, by adding subtle animations or changes in style when a user hovers over text, designers can create a more immersive and engaging experience. These hover effects can draw attention to important information, indicate interactivity, or simply add a layer of sophistication to the website's design. The SCSS library for text hover effects solves several problems commonly faced in web development. First, it addresses the challenge of maintaining consistency across different pages or sections of a website. With a library of predefined effects, developers can easily apply the same hover animations to multiple text elements without having to rewrite the CSS for each one.  ",
        link: 'https://antonijasimic.bitbucket.io/text_hover_effects/index.html',
        photos: [hover1, hover2],
        technologies: ['Scss', 'html', 'css', 'bower', 'javascript'],
        motivation:
          'I wanted to create a library of hover effects for text elements. I have used many times hover effects on text elements and I wanted to create a library that I can use in the future. This was my first bower package that I published.',
        sourceCode: null,
        role: 'I was the only developer on this project.',
        problem: "The problem that this library solves is decreasing code repetition. I have used many times hover effects on text elements. It unifies the styles and makes them exportable as css and scss.",
      },
    ],
  },
  {
    title: 'Kodiraonica',
    description: 'A coding school for everyone.',
    timeline: '2020 - present',
    id: 1,
    projects: [
      {
        route: 'main-website',
        title: 'Main website',
        description: 'Main landing page',
        longDescription: "A landing page for a coding school, meticulously crafted using React and TypeScript, serves as the digital front door to an educational platform designed to empower individuals with coding skills. This landing page is more than just an entry point; it is a strategic tool that plays a crucial role in attracting, engaging, and converting potential students. The combination of React and TypeScript ensures that the page is not only visually appealing and interactive but also robust, scalable, and maintainable. At its core, the landing page addresses several key challenges faced by coding schools in a highly competitive educational landscape. One of the primary problems it solves is the need to effectively communicate the value proposition of the coding school to prospective students. In an age where countless online courses and bootcamps vie for attention, it is essential to stand out by clearly conveying what makes this coding school unique. The landing page does this by showcasing the curriculum, teaching methodology, success stories, and the benefits of enrolling, all while maintaining a focus on the user's experience.    ",
        link: 'https://kodiraonica.dev',
        photos: [landing1, landing2, landing3],
        technologies: [
          'React',
          'Javacript',
          'KwesForm',
          'Netlify',
          'Typescript',
        ],
        motivation:
          'I knew how difficult it is to learn to code alone and I wanted to help others. I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: null,
        team: [
          {
            name: 'Petra Sedlanić Kereša',
            role: 'Content creator',
            linkedin: 'https://www.linkedin.com/in/petra-sedlani%C4%87/',
          },
          {
            name: 'Sara Budija',
            role: 'Lead designer',
            linkedin: 'https://www.linkedin.com/in/sara-budija-3063a9153/',
          },
        ],
        role: 'I was the Lead React developer on this project.',
      },
      {
        route: 'blog',
        title: 'Blog',
        description: 'A blog for sharing knowledge.',
        longDescription: "The blog is made for a broad audience, but it is particularly tailored to those who are passionate about coding and technology. For beginners, the blog offers accessible content that demystifies complex concepts and provides a solid foundation for further learning. Articles are written in a way that makes technical topics understandable, even for those who are just starting their coding journey. The blog serves as a welcoming entry point for newcomers, helping them build confidence and encouraging them to explore coding more deeply.",
        link: 'https://blog.kodiraonica.dev/',
        photos: [blog1, blog2],
        technologies: ['Hugo', 'Netlify', 'Markdown', 'HTML', 'CSS'],
        motivation:
          'I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: null,
        role: 'I was the only developer on this project.',
        team: [
          {
            name: 'Petar Kramar',
            role: 'Content writer',
            linkedin: 'https://www.linkedin.com/in/petar-kramar-124346209/',
          },
        ],
      },
      {
        route: 'lms',
        title: 'Kodiraonica LMS',
        description: 'A platform for learning to code.',
        longDescription: "The LMS platform, built using Ruby on Rails and secured with the Devise gem for authentication, is designed to create an interactive and engaging learning experience for coding students. It provides a comprehensive space where learners can access a wide range of coding courses, complete assignments, and track their progress. Beyond just content delivery, the platform encourages active participation by allowing students to ask questions directly within the course material, fostering a collaborative learning environment. This feature ensures that students are not just passive consumers of information but are actively engaged in their learning journey, with support readily available when they encounter challenges. The platform's secure and user-friendly interface makes it an ideal solution for anyone looking to learn coding in a structured, supportive, and interactive online environment.",
        link: 'https://cryptic-basin-19078.herokuapp.com/',
        photos: [lms1, lms2, lms3],
        technologies: ['Rails', 'Ruby', 'Devise', 'Postgres', 'Heroku'],
        motivation:
          'I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: null,
        role: 'I was the Lead Rails developer on this project.',
        team: [
          {
            name: 'Matija Katić',
            role: 'Senior Rails Developer',
            linkedin: 'https://www.linkedin.com/in/matijakatic/',
          },
          {
            name: 'Petar Kramar',
            role: 'Content writer',
            linkedin: 'https://www.linkedin.com/in/petar-kramar-124346209/',
          },
        ],
      },
    ],
  },
  {
    title: 'Duga',
    description: 'A dating app for LGBTQ+ community.',
    team: '4 people',
    timeline: '2020 - present',
    id: 2,
    projects: [
      {
        route: 'website',
        title: 'Website',
        description: 'A landing page to acquire users.',
        link: 'https://duga.app/',
        photos: [dugaLanding1, dugaLanding2],
        technologies: ['React', 'Javacript', 'Typescript'],
        motivation:
          'I wanted to create a safe space for LGBTQ+ community in Balkans to meet and connect.',
        sourceCode: 'https://github.com/duga-dating-app',
        role: 'I was the Lead React developer on this project.',
        team: [
          {
            name: 'Matija Marohnić',
            role: 'Senior React developer',
            linkedin: 'https://www.linkedin.com/in/silvenon/',
          },
        ],
      },
      {
        route: 'chat-app',
        title: 'App',
        description: 'A chat application for users to connect.',
        longDescription: "The landing page for the LGBTQ+ dating app, built with React, is designed to effectively attract and engage potential users. Utilizing React's dynamic capabilities, the page offers a seamless and responsive experience, instantly capturing the attention of visitors. It highlights the app's core features, such as real-time chat and a secure, inclusive environment, ensuring users immediately understand the value of joining. With a modern, clean design, the landing page guides users through the app's unique offerings, emphasizing its commitment to providing a safe space for the LGBTQ+ community. Clear calls-to-action encourage visitors to sign up, while testimonials and community stories build trust and credibility. The page is optimized for performance, ensuring fast load times and smooth navigation, which is crucial for retaining the interest of potential users. By effectively communicating the app's benefits and fostering a sense of belonging, the landing page plays a vital role in driving user acquisition and building a thriving, engaged community around the dating platform.",
        longDescription: "The dating app for the LGBTQ+ community, built with Node.js and Sockets, is designed to create a safe and vibrant space for individuals to connect and form meaningful relationships. Leveraging the power of Node.js, the app delivers fast, real-time interactions, allowing users to chat, share experiences, and build connections seamlessly. The use of Sockets ensures instant communication, making conversations fluid and engaging, which is vital for fostering genuine connections in a dating environment. This app is not just another dating platform; it is a dedicated space tailored to the unique needs and experiences of the LGBTQ+ community, providing a secure, inclusive, and welcoming environment where users can feel comfortable being themselves. With a focus on privacy and real-time interaction, the app offers a reliable and responsive platform where members can meet like-minded individuals, engage in meaningful conversations, and potentially find long-lasting connections.",
        link: 'https://unique-custard-ca4ace.netlify.app/',
        photos: [chat1, chat2, chat3, chat4],
        role: 'I was the Lead Full Stack developer on this project.',
        technologies: [
          'React',
          'Javacript',
          'Typescript',
          'Node',
          'Sockets',
          'Sequlize',
          'Postgres',
          'AWS S3',
        ],
        motivation:
          'I wanted to create a safe space for LGBTQ+ community in Balkans to meet and connect.',
        sourceCode: 'https://github.com/tonkec/duga_frontend',
        team: [
          {
            name: 'Veronika Šimić',
            role: 'Junior React developer',
            linkedin: 'https://www.linkedin.com/in/veronika-s-662355211/',
          },
          {
            name: 'Eva Kalogjera',
            role: 'Junior React developer',
            linkedin: 'https://github.com/evakalo',
          },
          {
            name: 'Luka Nikčević',
            role: 'Junior React developer',
            linkedin: 'https://www.linkedin.com/in/nikcevicluka/',
          },
        ],
      },
    ],
  },
]

export default hobbyProjects
