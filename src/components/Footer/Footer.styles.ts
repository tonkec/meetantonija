import { styled } from 'styled-components';

export const StyledFooter = styled.footer<{ offset: number; toggle: boolean }>`
  padding: 100px 20px;
  background-color: #6c7698;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: transform 0.5s ease-in-out;

  ${(props) => {
    const { offset, toggle } = props;
    if (toggle) {
      return `
        transform: translateX(${offset}px);
      `;
    }
  }}
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;

  li {
    margin: 0 10px;
  }
`;
