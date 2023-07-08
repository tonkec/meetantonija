import { styled } from 'styled-components';

export const StyledSection = styled.section<{
  paddingX: number;
  paddingY: number;
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor || '#000'};
  padding-top: ${(props) => props.paddingY / 2}px;
  padding-bottom: ${(props) => props.paddingY / 2}px;
  padding-left: ${(props) => props.paddingX / 2}px;
  padding-right: ${(props) => props.paddingX / 2}px;
`;
