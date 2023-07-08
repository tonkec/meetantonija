import { styled } from 'styled-components';

export const StyledSection = styled.section<{
  paddingX: number;
  paddingY: number;
  backgroundColor: string;
  hasPattern?: boolean;
  patternColors?: string[];
}>`
  background-color: ${(props) => props.backgroundColor || '#000'};
  padding-top: ${(props) => props.paddingY / 2}px;
  padding-bottom: ${(props) => props.paddingY / 2}px;
  padding-left: ${(props) => props.paddingX / 2}px;
  padding-right: ${(props) => props.paddingX / 2}px;
  ${({ hasPattern, patternColors }) =>
    hasPattern &&
    patternColors &&
    `
      background: radial-gradient(${patternColors[0]} 1.5px, ${patternColors[1]} 1.5px);
      background-size: calc(10 * 1.5px) calc(10 * 1.5px);
      ;
    `}
`;
