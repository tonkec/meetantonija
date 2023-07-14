import { StyledButton } from 'components/Button/Button.styles';
import MyModal from 'components/MyModal';
import Form from 'components/Form';
import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';
import Section from 'components/Section';

const CtaSection = () => {
  const secretWord = useSelector(
    (state: StateInterface) => state.counterSlice.secretWord
  );

  const setModalHeading = () => {
    return secretWord
      ? 'What is the secret word?'
      : 'You did not collect all the keys!';
  };

  return (
    <Section padding="medium" backgroundColor="#0047b4">
      <div>
        <MyModal
          id="ctaModal"
          modalHeading={setModalHeading()}
          opener={<StyledButton className="is-clickable">Get CV</StyledButton>}
        >
          {secretWord && <Form secretWord={secretWord} />}
        </MyModal>
      </div>
    </Section>
  );
};

export default CtaSection;
