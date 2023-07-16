import { StyledButton } from 'components/Button/Button.styles';
import MyModal from 'components/MyModal';
import Form from 'components/Form';
import { useSelector } from 'react-redux';
import { StateInterface } from 'store/slices/CounterSlice';
import Section from 'components/Section';
import Text from 'components/Text';

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
    <>
      <Section
        backgroundColor="#0047b4"
        padding="medium"
        style={{ paddingBottom: 0 }}
      >
        <Text type="h2" color="white" style={{ marginBottom: 30 }}>
          Wait... it's not over yet...
        </Text>

        <Text type="p" color="white">
          Are you ready for some treasure hunt? You see many recruiters want my
          CV, but I never know what they do with it afterwards. So this is how
          we are going to play. I hid some secret boxes on this website and if
          you want my CV, you will have to collect them all. That means there is
          an input field waiting for a secret word that will open up my CV.
        </Text>
      </Section>{' '}
      <Section padding="medium" backgroundColor="#0047b4">
        <div>
          <MyModal
            id="ctaModal"
            modalHeading={setModalHeading()}
            opener={
              <StyledButton className="is-clickable">Get CV</StyledButton>
            }
          >
            {secretWord && <Form secretWord={secretWord} />}
          </MyModal>
        </div>
      </Section>
    </>
  );
};

export default CtaSection;
