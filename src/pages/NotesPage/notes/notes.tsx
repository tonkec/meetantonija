import { FaRobot, FaBook } from 'react-icons/fa';

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
];
