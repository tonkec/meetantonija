import { FlexContainer } from 'styles/containers';
import Section from 'components/Section';
import Text from 'components/Text';
import { StyledButton } from 'components/Button/Button.styles';
import MyModal from 'components/MyModal';
import Form from 'components/Form';
import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';

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
    <FlexContainer align="inherit">
      <div
        style={{
          flex: 1,
          backgroundColor: '#0047b4',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingBottom: '10vh',
          paddingLeft: 50,
        }}
      >
        <MyModal
          id="ctaModal"
          modalHeading={setModalHeading()}
          opener={
            <StyledButton
              style={{ padding: '20px 50px', fontSize: '1.2rem' }}
              className="is-clickable"
            >
              Get Antonija's precious CV
            </StyledButton>
          }
        >
          {secretWord && <Form secretWord={secretWord} />}
        </MyModal>
      </div>
    </FlexContainer>
  );
};

export default CtaSection;
