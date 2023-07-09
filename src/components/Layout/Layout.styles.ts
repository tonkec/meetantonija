import { styled } from 'styled-components';

export const StyledLayout = styled.div<{ toggle: boolean; offset: number }>`
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 2;
  ${(props) => {
    const { offset, toggle } = props;
    if (toggle) {
      return `
        &::after {
          content: "";
          display: block;
          background-color: #44756b;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0.4;
        }
        transform: translateX(${offset}px);
      `;
    }
  }}
`;
