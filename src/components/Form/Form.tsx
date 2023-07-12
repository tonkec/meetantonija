import { SyntheticEvent, useState } from 'react';
import { StyledForm } from './Form.styles';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

const sound = require('sounds/cheer.mp3');
const fail = require('sounds/incorrect.mp3');

const Form = ({ secretWord }: { secretWord: string }) => {
  const [input, setInput] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeable, setShakeable] = useState(false);
  const modalHeight = document.getElementById('ctaModal')?.clientHeight;
  const modalWidth = document.getElementById('ctaModal')?.clientWidth;
  const [playOnSuccess] = useSound(sound, { volume: 0.25 });
  const [playOnFail] = useSound(fail, { volume: 0.25, playbackRate: 1.5 });

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (secretWord === input) {
      setShowConfetti(true);
      playOnSuccess();
      window.open(process.env.REACT_APP_CV_URL, '_blank');
      setShakeable(false);
    } else {
      playOnFail();
      setShakeable(true);
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Type here..."
        onChange={(e) => {
          setInput(e.target.value);
          setShakeable(false);
        }}
        className={shakeable ? 'shake-it' : ''}
      />
      <button>Get CV</button>
      {showConfetti && <Confetti height={modalHeight} width={modalWidth} />}
    </StyledForm>
  );
};

export default Form;
