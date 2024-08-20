import kodiraonica from '../images/kodiraonica/1.png'
import duga1 from '../images/duga/1.png'
import hover1 from '../images/hover/1.png'
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

const hobbyProjects = [
  {
    title: 'Scss library',
    description: 'Text hover effects',
    timeline: '2016 - 2017',
    id: 0,
    mainPhoto: hover1,
    projects: [
      {
        title: 'Scss library for hover effects',
        description: 'A library of hover effects for text elements.',
        link: 'https://antonijasimic.bitbucket.io/text_hover_effects/index.html',
        photos: [hover1],
        technologies: ['Scss'],
        motivation:
          'I wanted to create a library of hover effects for text elements.',
        sourceCode: null,
        team: [
          {
            name: 'Antonija Šimić',
            role: 'Lead developer',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
        ],
      },
    ],
  },
  {
    title: 'Kodiraonica',
    description: 'A coding school for everyone.',
    timeline: '2020 - present',
    id: 1,
    mainPhoto: kodiraonica,
    projects: [
      {
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
            name: 'Antonija Šimić',
            role: 'Lead developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
          {
            name: 'Petra Sedlanić Kereša',
            role: 'Marketing manager',
            linkedin: 'https://www.linkedin.com/in/petra-sedlani%C4%87/',
          },
          {
            name: 'Sara Budija',
            role: 'Lead designer',
            linkedin: 'https://www.linkedin.com/in/sara-budija-3063a9153/',
          },
          {
            name: 'Matija Marohnić',
            role: 'Senior React developer',
            linkedin: 'https://www.linkedin.com/in/silvenon/',
          },
        ],
      },
      {
        title: 'Blog',
        description: 'A blog for sharing knowledge.',
        link: 'https://blog.kodiraonica.dev/',
        photos: [kodiraonica],
        technologies: ['Hugo', 'Netlify', 'Markdown', 'HTML', 'CSS'],
        motivation:
          'I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: null,
        team: [
          {
            name: 'Antonija Šimić',
            role: 'Lead developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
          {
            name: 'Petar Kramar',
            role: 'Content writer',
            linkedin: 'https://www.linkedin.com/in/petar-kramar-124346209/',
          },
        ],
      },
      {
        title: 'Kodiraonica platform',
        description: 'A platform for students to learn to code.',
        link: 'https://cryptic-basin-19078.herokuapp.com/',
        photos: [lms1, lms2, lms3],
        technologies: ['Rails', 'Ruby', 'Devise', 'Postgres', 'Heroku'],
        motivation:
          'I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: null,
        team: [
          {
            name: 'Antonija Šimić',
            role: 'Lead fullstack developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
          {
            name: 'Matija Katić',
            role: 'Senior Rails Developer',
            linkedin: 'https://www.linkedin.com/in/matijakatic/',
          },
          {
            name: "Petar Kramar",
            role: "Content writer",
            linkedin: "https://www.linkedin.com/in/petar-kramar-124346209/",
          }
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
    mainPhoto: duga1,
    projects: [
      {
        title: 'Landing page',
        description: 'A landing page to acquire users.',
        link: 'https://duga.app/',
        photos: [chat1, chat2, chat3, chat4],
        technologies: ['React', 'Javacript', 'Typescript'],
        motivation:
          'I wanted to create a safe space for LGBTQ+ community in Balkans to meet and connect.',
        sourceCode: 'https://github.com/duga-dating-app',
        team: [
          {
            name: 'Antonija Šimić',
            role: 'Lead developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
          {
            name: 'Matija Marohnić',
            role: 'Senior React developer',
            linkedin: 'https://www.linkedin.com/in/silvenon/',
          },
        ],
      },
      {
        title: 'A chat application',
        description: 'A chat application for users to connect.',
        link: 'https://unique-custard-ca4ace.netlify.app/',
        photos: [kodiraonica],
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
            name: 'Antonija Šimić',
            role: 'Lead developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
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
