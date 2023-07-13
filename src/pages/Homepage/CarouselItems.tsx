import { FiCode } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { AiOutlineBulb } from 'react-icons/ai';

export const CarouselItems = [
  {
    title: 'HTML',
    description:
      'My first line of code was written in 2013. I have come a long way since then. You can only imagine that I solved many problems  using this beautiful technology.',
    icon: () => (
      <FiCode
        fontSize="2rem"
        style={{ verticalAlign: 'middle', marginLeft: 10 }}
      />
    ),
  },
  {
    title: 'Javascript',
    description:
      ' Javascript is my choice to go, whether I am using React or Angular. It helped me build some beautiful systems and brought to life many great human ideas.',
    icon: () => (
      <BiLogoJavascript
        fontSize="2rem"
        style={{ verticalAlign: 'middle', marginLeft: 10 }}
      />
    ),
  },
  {
    title: 'Typescript',
    description:
      ' Typescript enhances cleaniness of my code. I started using it back in 2020 when I had first tried Angular. It brings extra awareness to the code.',
    icon: () => (
      <SiTypescript
        fontSize="1.6rem"
        style={{ verticalAlign: 'middle', marginLeft: 10 }}
      />
    ),
  },
  {
    title: 'React',
    description:
      ' Powerful light library that I love to use exercises functional programming, a mindset that I developed alongside this technology.',
    icon: () => (
      <BiLogoReact
        fontSize="2rem"
        style={{ verticalAlign: 'middle', marginLeft: 10 }}
      />
    ),
  },
  {
    title: 'Thinking',
    description:
      'I enjoy solving business problems, just throw your logical problems at me and I will be happy to work on them. Developing new features is what brings me joy.',
    icon: () => (
      <AiOutlineBulb
        fontSize="2rem"
        style={{ verticalAlign: 'middle', marginLeft: 10 }}
      />
    ),
  },
];
