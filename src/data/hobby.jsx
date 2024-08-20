import kodiraonica from '../images/kodiraonica/1.png'
import duga1 from '../images/duga/1.png'
import hover1 from '../images/hover/1.png'

const hobbyProjects = [
  {
    title: 'Scss library',
    description: 'Text hover effects',
    timeline: '2016 - 2017',
    id: 0,
    projects: [
      {
        title: 'Scss library for hover effects',
        description: 'A library of hover effects for text elements.',
        link: 'https://antonijasimic.bitbucket.io/text_hover_effects/index.html',
        photos: [hover1],
        technologies: ['Scss'],
        role: 'Founder',
        motivation:
          'I wanted to create a library of hover effects for text elements.',
        sourceCode: '',
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
        title: 'Main website',
        description: 'Main landing page',
        link: 'https://kodiraonica.dev',
        photos: [kodiraonica],
        technologies: [
          'React',
          'Javacript',
          'KwesForm',
          'Netlify',
          'Typescript',
        ],
        role: 'Lead developer',
        motivation:
          'I knew how difficult it is to learn to code alone and I wanted to help others. I wanted to create a community where everyone can learn to code and share their knowledge.',
        sourceCode: 'https://github.com/kodiraonica/',
        team: [
          {
            name: 'Antonija Šimić',
            role: 'Lead developer and founder',
            linkedin: 'https://www.linkedin.com/in/antonija-simic/',
          },
          {
            name: 'Denis Martin Budinski',
            role: 'Teacher',
            linkedin: 'https://www.linkedin.com/in/denis-martin-budinski//',
          },
          {
            name: 'Matija Katić',
            role: 'Teacher',
            linkedin: 'https://www.linkedin.com/in/matijakatic/',
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
        title: 'Landing page',
        description: 'A landing page to acquire users.',
        link: 'https://relaxed-meitner-01252f.netlify.app/',
        photos: [duga1],
        technologies: ['React', 'Javacript', 'Typescript'],
        role: 'Lead developer',
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
        role: 'Lead Fullstack developer',
        motivation:
          'I wanted to create a safe space for LGBTQ+ community in Balkans to meet and connect.',
        sourceCode: 'https://github.com/tonkec/duga_frontend',
      },
    ],
  },
]

export default hobbyProjects
