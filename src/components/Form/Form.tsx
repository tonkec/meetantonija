import { StyledForm } from './Form.styles';

const Form = () => {
  return (
    <StyledForm>
      <input type="text" autoFocus placeholder="Type here..." />
      <button>Download CV</button>
    </StyledForm>
  );
};

export default Form;
