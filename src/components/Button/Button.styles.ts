import { styled } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border: 2px solid #ffe8d1;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.5rem;
  padding-top: 20px;
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 20px;
  background-image: radial-gradient(#ffe8d1 1px, #005246 1px);
  background-size: calc(10 * 1px) calc(10 * 1px);
  transition: all 0.1s ease-in-out;
  color: #ffe8d1;
  &:hover {
    background-image: radial-gradient(#ff944e 1px, #005246 1px);
    background-position: -20px -20px;
    border-color: #ff944e;
  }
`;
