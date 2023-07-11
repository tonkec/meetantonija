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
      <Section backgroundColor="#ff944e" justifyContent="flex-start">
        <Text type="p" color="#ffffff">
          ...if you want to download my CV, <br /> you should have a secret
          word...
        </Text>
      </Section>
      <div
        style={{
          flex: 1,
          backgroundColor: '#005246',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <MyModal
          id="ctaModal"
          modalHeading={setModalHeading()}
          opener={
            <StyledButton
              style={{ padding: '20px 50px', fontSize: '1.5rem' }}
              className="is-clickable"
            >
              Download
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
