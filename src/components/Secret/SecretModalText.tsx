import Text from 'components/Text';
import { initialState, setSecretWord } from 'store/slices/CounterSlice';
import { generate } from 'random-words';
import { useDispatch } from 'react-redux';

interface SecretModalTextInterface {
  currentScore: number;
}

const SecretModalText = ({ currentScore }: SecretModalTextInterface) => {
  const dispatch = useDispatch();

  const getRandomWord = () => {
    const word = generate();
    dispatch(setSecretWord(word));
    return word;
  };

  const text =
    currentScore === initialState.keys.length
      ? `You have collected all the keys! The secret word is: ${getRandomWord()}`
      : `Currently you have ${currentScore} secret keys out of ${initialState.keys.length}. Collect them all
    and you will get a keyword to download my CV. 🧙‍♂️`;

  return (
    <Text type="p" color="#292929">
      {text}
    </Text>
  );
};

export default SecretModalText;
