import { SyntheticEvent, useState } from 'react';
import { StyledForm } from './Form.styles';
import useSound from 'use-sound';
import { useDispatch } from 'react-redux';
import { setShowConfetti } from 'store/slices/CounterSlice';

const sound = require('sounds/cheer.mp3');
const fail = require('sounds/incorrect.mp3');

const Form = ({ secretWord }: { secretWord: string }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [shakeable, setShakeable] = useState(false);
  const [playOnSuccess] = useSound(sound, { volume: 0.25 });
  const [playOnFail] = useSound(fail, { volume: 0.25, playbackRate: 1.5 });

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    if (secretWord === input) {
      playOnSuccess();
      window.open(process.env.REACT_APP_CV_URL, '_blank');
      setShakeable(false);
      dispatch(setShowConfetti(true));
    } else {
      playOnFail();
      setShakeable(true);
      dispatch(setShowConfetti(false));
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
    </StyledForm>
  );
};

export default Form;
