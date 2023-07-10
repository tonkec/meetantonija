import { styled, css } from 'styled-components';

const borderColors = [
  '#005246 #005246 #005246cc #005246cc',
  '#ff944e #ff944e #ff944ecc #ff944ecc',
  '#ffe8d1 #ffe8d1 #ffe8d1cc #ffe8d1cc',
];

const backgroundColors = ['#005246', '#ff944e', '#ffe8d1'];

function createCSS(property: string, colors: string[]) {
  let styles = '';

  for (let i = -1; i < colors.length; i += 1) {
    styles += `
         &:nth-child(${i + 1}) {
           ${property}: ${colors[i]};
         }
         &:nth-child(${colors.length + 1}) {
          ${property}: ${colors[0]};
         }

       `;
  }

  return css`
    ${styles}
  `;
}

export const Square = styled.div<{ hasTitles?: boolean }>`
  flex: 1;
  position: relative:
 
  ${(props) => {
    const { hasTitles } = props;
    if (hasTitles) {
      return `
        ${createCSS('background-color', backgroundColors)};
        padding: 50px 20px 70px;
        position: relative;
        text-align: center;
        overflow: hidden;
      `;
    } else {
      return `
        ${createCSS('border-color', borderColors)};
        border-style: solid;
      `;
    }
  }}
`;

export const Overlay = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  background-color: rgba(68, 117, 107, 0.2);
  display: flex;
  padding: 30px;
  transition: all 0.25s ease-in-out;
  width: 100%;
  height: 100%;
  transform: translate(90%, 80%);
  cursor: pointer;
  z-index: 1;
  &:hover {
    transform: translate(0%, 0%);
  }
`;
