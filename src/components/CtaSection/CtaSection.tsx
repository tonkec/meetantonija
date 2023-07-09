import { FlexContainer } from '../../styles/containers';
import Section from '../Section';
import Text from '../Text';
import { StyledButton } from '../Button/Button.styles';

const CtaSection = () => (
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
      <StyledButton style={{ padding: '20px 50px', fontSize: '1.5rem' }}>
        Download
      </StyledButton>
    </div>
  </FlexContainer>
);

export default CtaSection;
