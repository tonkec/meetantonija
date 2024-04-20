import { FaRobot, FaBook } from 'react-icons/fa'
import { CgDanger } from 'react-icons/cg'
import { LuPaintbrush2 } from 'react-icons/lu'
import { GiSpiderWeb } from 'react-icons/gi'
import { BsQuestionSquare } from 'react-icons/bs'

const notes = [
  {
    title: 'Reintroduction to the sort method',
    subtitle:
      'It is time to know how this method works even in the middle of the night',
    id: 1,
    icon: () => <FaRobot />,
    objectType: 'note',
    intro:
      'I have a small trauma when it comes to this little array method in Javascript. I got asked in an interview to sort some array and I could not remember by my heart what does a sort function looks like. I always google it. That is why I decided to write a post about it, mainly to teach myself once and for all, how its syntax looks like. Here is an array with random numbers. If you want to sort it from the smallest number to the biggest number, just use minus operator for two parameters.',
  },
  {
    title: 'What is a lexical scope?',
    subtitle:
      'I know what lexical means in lingustics, but what about Javascript?',
    id: 2,
    icon: () => <FaBook />,
    objectType: 'note',
    intro:
      "Of course I know what lexical means, this is one of the rare cases where my diploma in linguistics helps me 💪. But still it was confusing to apply that knowledge to Javascript. Let's dive in! First things first. Lexical in general means a definition, an explanation, a meaning. It points to the definition part of the object in contrast to the execution.",
  },
  {
    title: 'What is a pure function?',
    subtitle: 'Stay away from dirty and smelly code',
    id: 3,
    icon: () => <LuPaintbrush2 />,
    objectType: 'note',
  },
  {
    title: 'How to fetch data in React?',
    subtitle: 'You can not be developer without handling data',
    id: 4,
    icon: () => <GiSpiderWeb />,
    objectType: 'note',
  },
  {
    title: 'Double question mark operator',
    subtitle: 'What is this all about?',
    id: 5,
    icon: () => <BsQuestionSquare />,
    objectType: 'note',
  },
]

export default notes
