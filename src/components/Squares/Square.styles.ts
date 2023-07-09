import { styled, css } from 'styled-components';

function createCSS() {
  let styles = '';
  const colors = [
    '#005246 #005246 #005246cc #005246cc',
    '#ff944e #ff944e #ff944ecc #ff944ecc',
    '#ffe8d1 #ffe8d1 #ffe8d1cc #ffe8d1cc',
  ];

  for (let i = 0; i < colors.length; i += 1) {
    styles += `
         &:nth-child(${i + 1}) {
           border-color: ${colors[i]};
         }
         &:nth-child(4) {
          border-color: ${colors[0]};
         }
       `;
  }

  return css`
    ${styles}
  `;
}

export const Square = styled.div<{ borderWidth: number }>`
  ${createCSS()};
  flex: 1;
  border-style: solid;
  position: relative:
  z-index: 9;
`;
