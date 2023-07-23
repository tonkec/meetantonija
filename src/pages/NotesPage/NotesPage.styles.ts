import { styled } from 'styled-components';

export const NotesList = styled.ul`
  padding-left: 0;
  list-style-type: none;

  li {
    display: flex;
    align-items: flex-start;
    background-color: #292929;
    padding: 30px 20px;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      background-color: #0047b4;
    }
  }

  a {
    text-decoration: none;
    color: #292929;
    font-size: 1.5rem;
    cursor: none;

    li {
      display: block;

      h4,
      h5 {
        color: #f5f5f5;
      }

      h5 {
        font-weight: normal;
        margin-top: 20px;
      }
    }
  }
`;
