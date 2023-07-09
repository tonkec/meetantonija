import { styled } from 'styled-components';

export const StyledLayout = styled.div<{ toggle: boolean; offset: number }>`
  transition: transform 0.5s ease-in-out;
  position: relative;
  z-index: 2;
  ${(props) => {
    const { offset, toggle } = props;
    if (toggle) {
      return `
        transform: translateX(${offset}px);
      `;
    }
  }}
`;
