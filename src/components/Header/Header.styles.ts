import { styled } from 'styled-components';

export const StyledHeader = styled.header<{ backgroundColor?: string }>`
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : 'linear-gradient(2deg, #43cea2, #0047b4)'};
  padding-top: 15rem;
  padding-bottom: 10rem;
  padding-left: 4vw;
  padding-right: 4vw;
`;
