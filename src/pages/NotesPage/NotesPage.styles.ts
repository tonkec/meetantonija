import { styled } from 'styled-components';
import { device } from 'styles/devices';

export const NotesList = styled.ul`
  padding-left: 0;
  list-style-type: none;


  li {
    align-items: flex-start;
    justify-content: space-between;
    background-color: #0047b4;
    padding: 50px 50px 50px 30px;
    transition: background-color 0.5s ease-in-out;
    border-radius: 10px;
    margin-bottom: 30px;

    @media ${device.tablet} {
      display: flex;
    }

    h4,
    h5 {
      color: white;
      transition: color 0.5s ease-in-out;
    }

    h5 {
      font-weight: normal;
      margin-top: 10px;
    }

    svg {
      font-size: 4rem;
      color: white;
      margin-top: 20px;

      @media ${device.tablet} {
        margin-top: 0;
      }
    }

    &:hover {
      background-color: #43cea2;

      h4,
      h5 {
        color: white;
      }
    }
  }

  a {
    text-decoration: none;
    cursor: none;
  }
`;
