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
        link: 'https://antonijasimic.bitbucket.io/text_hover_effects/index.html',
        photos: [hover1, hover2],
        technologies: ['Scss', 'html', 'css', 'bower', 'javascript'],
        motivation:
          'I wanted to create a library of hover effects for text elements. I have used many times hover effects on text elements and I wanted to create a library that I can use in the future. This was my first bower package that I published.',
        sourceCode: null,
        role: 'I was the only developer on this project.',
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
        link: 'https://blog.kodiraonica.dev/',
        photos: [kodiraonica],
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
        title: 'Kodiraonica platform',
        description: 'A platform for learning to code.',
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
        ],
      },
    ],
  },
]

export default hobbyProjects
