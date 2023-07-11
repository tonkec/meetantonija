import { SyntheticEvent, useState } from 'react';
import { StyledForm } from './Form.styles';
import Confetti from 'react-confetti';
import { useWindowSize } from 'hooks/useWindowSize';

const Form = ({ secretWord }: { secretWord: string }) => {
  const size = useWindowSize();
  const [input, setInput] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const modalHeight = document.getElementById('ctaModal')?.clientHeight;
  const modalWidth = document.getElementById('ctaModal')?.clientWidth;

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (secretWord === input) {
      setShowConfetti(true);
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Type here..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Download CV</button>
      {showConfetti && (
        <Confetti
          tweenDuration={3000}
          height={modalHeight}
          width={modalWidth}
        />
      )}
    </StyledForm>
  );
};

export default Form;
