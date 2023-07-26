import { FaRobot, FaBook } from 'react-icons/fa';
import { CgDanger } from 'react-icons/cg';
import { LuPaintbrush2 } from 'react-icons/lu';
import { GiSpiderWeb } from 'react-icons/gi';

export const notes = [
  {
    title: 'Reintroduction to the sort method',
    subtitle:
      'It is time to know how this method works even in the middle of the night',
    id: '1',
    icon: () => <FaRobot />,
    objectType: 'note',
  },
  {
    title: 'What is a lexical scope?',
    subtitle:
      'I know what lexical means in lingustics, but what about Javascript?',
    id: '2',
    icon: () => <FaBook />,
    objectType: 'note',
  },
  {
    title: 'Error boundary in React',
    subtitle: 'How to catch errors in your components',
    id: '3',
    icon: () => <CgDanger />,
    objectType: 'note',
  },
  {
    title: 'What is a pure function?',
    subtitle: 'Stay away from dirty and smelly code',
    id: '4',
    icon: () => <LuPaintbrush2 />,
    objectType: 'note',
  },
  {
    title: 'How to fetch data in React?',
    subtitle: 'You can not be developer without handling data',
    id: '5',
    icon: () => <GiSpiderWeb />,
    objectType: 'note',
  },
];
