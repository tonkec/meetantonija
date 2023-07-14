import { styled } from 'styled-components';

export const StyledSection = styled.section<{
  backgroundColor: string;
  padding: string;
}>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  ${(props) => {
    const { padding } = props;
    if (padding === 'small') {
      return `
        padding-top: 5vh;
        padding-bottom: 2vh
      `;
    }

    if (padding === 'medium') {
      return `
        padding-top: 20vh;
        padding-bottom: 10vh
      `;
    }

    if (padding === 'big') {
      return `
        padding-top: 30vh;
        padding-bottom: 30vh
      `;
    }

    if (padding === 'none') {
      return `
        padding-top: 0;
        padding-bottom: 0
      `;
    }
  }}
`;
