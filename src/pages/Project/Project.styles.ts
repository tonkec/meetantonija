import styled from 'styled-components';

export const TitleLink = styled.a`
  color: #ffffff;
  padding-bottom: 0px;
  padding-right: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  text-indent: 20px;
  z-index: 2;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 10px;
    height: 50px;
    width: 100%;
    background-image: radial-gradient(#f5f5f5 1.5px, transparent 1.5px);
    background-size: calc(10 * 1.5px) calc(10 * 1.5px);
    transition: all 0.1s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    background-image: radial-gradient(#ff944e 1.5px, transparent 1.5px);
    background-position: -10px -10px;
  }
`;
