import { styled } from 'styled-components';
import { device } from 'styles/devices';
export const StyledSection = styled.section<{
  backgroundColor: string;
  padding: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  padding-left: 3vw;
  padding-right: 3vw;
  position: relative;

  @media ${device.laptop} {
    padding-left: 4vw;
    padding-right: 4vw;
  }
  ${(props) => {
    const { padding } = props;
    if (padding === 'small') {
      return `
        padding-top: 3vh;
        padding-bottom: 3vh;

        @media ${device.laptop} {
          padding-top: 5vh;
          padding-bottom: 5vh
        }
      `;
    }

    if (padding === 'medium') {
      return `
        padding-top: 3vh;
        padding-bottom: 3vh;

        @media ${device.tablet} {
          padding-top: 5vh;
          padding-bottom: 5vh
        }

        @media ${device.laptop} {
          padding-top: 9vh;
          padding-bottom: 9vh
        }
      `;
    }

    if (padding === 'big') {
      return `
        padding-top: 15vh;
        padding-bottom: 15vh;

        @media ${device.laptop} {
          padding-top: 30vh;
          padding-bottom: 30vh
        }
      `;
    }

    if (padding === 'none') {
      return `
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right:0;
      `;
    }
  }}
`;
