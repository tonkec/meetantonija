import styled from 'styled-components';

export const NextProjectButton = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  max-width: 500px;

  button {
    border: none;
    background-color: transparent;
    font-size: 2.2rem;
    color: white;
    padding: 50px 50px;
  }
`;

export const Pattern = styled.div`
  background-image: radial-gradient(#292929 1.5px, transparent 1.5px);
  background-size: calc(10 * 1.5px) calc(10 * 1.5px);
  padding: 10vh 0;
  transition: background-position 0.2s ease-in-out,

  &:hover {
    background-position: -10px -10px;

    button {
      transform: scaleX(1.2);
    }
  }
`;
