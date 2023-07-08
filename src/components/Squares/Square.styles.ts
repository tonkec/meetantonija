import { styled, css } from 'styled-components';
import { shuffleArray } from '../../utils';

function createCSS() {
  let styles = '';
  const colors = [
    '#005246 #005246 #005246cc #005246cc',
    '#ff944e #ff944e #ff944ecc #ff944ecc',
    '#ffe8d1 #ffe8d1 #ffe8d1cc #ffe8d1cc',
  ];

  const shuffledColors = shuffleArray(colors);

  for (let i = 0; i < shuffledColors.length; i += 1) {
    styles += `
         &:nth-child(${i + 1}) {
           border-color: ${shuffledColors[i]};
         }
         &:nth-child(4) {
          border-color: ${shuffledColors[0]};
         }
       `;
  }

  return css`
    ${styles}
  `;
}

export const Square = styled.div`
  ${createCSS()};
  flex: 1;
  border-style: solid;
`;
