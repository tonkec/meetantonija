import { FaRobot, FaBook } from 'react-icons/fa';
import { CgDanger } from 'react-icons/cg';

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
];
