import styled from 'styled-components';

export const NextProjectButton = styled.button<{ background: string }>`
  background-color: ${(props) => props.background};
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
  border: none;
  width: 100%;
  display: block;
  font-size: 2rem;
`;
