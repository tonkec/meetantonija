import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav<{ width: number }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 80px;
  padding-left: 50px;
  background-color: #292929;
  z-index: 0;
  width: ${(props) => props.width}px;

  button {
    &:hover {
      border-color: #f5f5f5;
    }
  }
`;

export const Separator = styled.div`
  background-color: #d65f32;
  height: 5px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const NavbarLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  vertical-align: middle;
  display: block;
  margin-bottom: 20px;
  transition: color 0.2s ease-in-out;
  &:hover {
    transform: translateY(0.5px);
    color: #d65f32;
  }
`;
