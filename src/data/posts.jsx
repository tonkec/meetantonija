import { FaRobot, FaBook, FaBrain, FaBox } from 'react-icons/fa'
import { LuPaintbrush2 } from 'react-icons/lu'
import { GiSpiderWeb } from 'react-icons/gi'
import { BsQuestionSquare } from 'react-icons/bs'
import { FaSortAlphaDown } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { MdDataArray } from 'react-icons/md'
import { FaUserGroup } from 'react-icons/fa6'

const notes = [
  {
    date: '2025-04-19',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'React, useRef, useState',
    title: 'Regular variables and useState',
    subtitle: 'Do you want to trigger a rerender?',
    id: 10,
    icon: () => <FaBrain />,
    intro:
      'A practical guide to understanding the difference between regular variables and state in React, with clear examples that show why only state updates trigger UI changes.',
  },
  {
    date: '2025-03-11',
    author: 'Antonija Šimić',
    level: 'senior',
    tags: 'React, hooks',
    title: 'Two effects in React',
    subtitle: 'When to use which?',
    id: 11,
    icon: () => <FaBox />,
    intro:
      'A practical guide to understanding the differences between useLayoutEffect and useEffect in React, with clear examples that show when to use each hook for optimal performance.',
  },
  {
    date: '2024-01-15',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Algorithms',
    title: 'All about reduce',
    subtitle: 'Decrease the complexity of your code',
    id: 9,
    icon: () => <FaRobot />,
    intro:
      'Reduce method is a method that is used to reduce an array to a single value. It is a very useful method when you want to sum up all the elements of an array or when you want to find the maximum or minimum value of an array.',
  },
  {
    date: '2024-06-21',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Arrays, Methods',
    title: 'Group by method',
    subtitle: 'New method in Javascript',
    id: 8,
    icon: () => <FaUserGroup />,
    intro:
      'I have been using group by method for a while now. But I never really understood how it works. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. Group by method is a method that is used to group array elements by a key. It is a very useful method when you want to group array elements by some property.',
  },
  {
    date: '2024-08-26',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Arrays, Rest',
    title: 'Spread and rest operator',
    subtitle: 'What is the difference?',
    id: 0,
    icon: () => <MdDataArray />,
    intro:
      'I have been using spread and rest operator for a while now. But I never really understood the difference between them. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. Spread operator is used to split up array elements or object properties. Rest operator is used to merge a list of function arguments into an array.',
  },
  {
    date: '2021-09-01',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Arrays, Sort',
    title: 'Reintroduction to sort method',
    subtitle:
      'It is time to know how this method works even in the middle of the night',
    id: 1,
    icon: () => <FaSortAlphaDown />,
    intro:
      'I have a small trauma when it comes to this little array method in Javascript. I got asked in an interview to sort some array and I could not remember by my heart what does a sort function looks like. I always google it. That is why I decided to write a post about it, mainly to teach myself once and for all, how its syntax looks like. Here is an array with random numbers. If you want to sort it from the smallest number to the biggest number, just use minus operator for two parameters.',
  },
  {
    date: '2023-08-31',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Scope',
    title: 'What is a lexical scope?',
    subtitle:
      'I know what lexical means in lingustics, but what about Javascript?',
    id: 2,
    icon: () => <FaBook />,
    intro:
      "Of course I know what lexical means, this is one of the rare cases where my diploma in linguistics helps me 💪. But still it was confusing to apply that knowledge to Javascript. Let's dive in! First things first. Lexical in general means a definition, an explanation, a meaning. It points to the definition part of the object in contrast to the execution.",
  },
  {
    date: '2022-04-14',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Functional programming',
    title: 'What is a pure function?',
    subtitle: 'Stay away from dirty and smelly code',
    id: 3,
    icon: () => <LuPaintbrush2 />,
    intro:
      'I have been hearing about pure functions for a while now. I know that they are good and I should use them. But I never really understood why. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. Pure functions are functions that always return the same output if the input is the same. They do not have side effects. They are predictable and easy to test.',
  },
  {
    date: '2021-06-28',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Fetch, Data, React',
    title: 'How to fetch data in React?',
    subtitle: 'You can not be developer without handling data',
    id: 4,
    icon: () => <GiSpiderWeb />,
    intro:
      'I have been using fetch method for a while now. But I never really understood how it works. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. Fetch method is a modern replacement for XMLHttpRequest. It is a simple and powerful window method that allows you to fetch resources across the network. It is promise-based, so you can use it with async/await.',
  },
  {
    date: '2022-07-31',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'Javascript, Fundamentals, ES6',
    title: 'Double question mark operator',
    subtitle: 'What is this all about?',
    id: 5,
    icon: () => <BsQuestionSquare />,
    intro:
      'I have been seeing this operator a lot lately. I know that it is called double question mark operator. But I never really understood how it works. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. Double question mark operator is a new operator in Javascript. It is called nullish coalescing operator. It returns the right-hand operand when the left-hand operand is null or undefined.',
  },
  {
    date: '2022-02-15',
    author: 'Antonija Šimić',
    level: 'beginner',
    tags: 'React, useRef, useState',
    title: 'When to use useRef and useState?',
    subtitle: 'Be careful of rerendering',
    id: 6,
    icon: () => <FaRobot />,
    intro:
      'I have been using useRef and useState hooks for a while now. But I never really understood when to use which. I decided to write a post about it to clarify it for myself and for others. Here is a short explanation. useRef is used to access the DOM element directly. It does not trigger re-rendering. useState is used to store the state of the component. It triggers re-rendering.',
  },
  {
    date: '2023-09-15',
    author: 'Antonija Šimić',
    level: 'beginner',
    id: 7,
    tags: 'Codewars, Javascript, Algorithms',
    title: 'String incrementer',
    subtitle: 'Increment the number in a string',
    icon: () => <FaPlus />,
    intro:
      'I have been doing a lot of coding challenges lately on Code Wars. I saw this interesting challenge called string incrementer. I will write about solution that I submitted.',
  },
]

export default notes
