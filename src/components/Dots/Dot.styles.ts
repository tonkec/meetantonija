import { styled } from 'styled-components';

export const Dot = styled.div<{
  width: string;
  height: string;
  backgroundColor: string;
}>`
  width: ${(props) => props.width || 10}px;
  height: ${(props) => props.height || 10}px;
  background-color: ${(props) => props.backgroundColor || '#000'};
  display: inline-block;
  margin: 0 2px;
  border-radius: 2px;
`;
