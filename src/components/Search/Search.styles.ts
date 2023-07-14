import styled from 'styled-components';

export const SearchWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background-color: #005ed0;
  z-index: 9999;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  opacity: 0.9;
  form {
    width: 80%;
  }

  input {
    padding: 20px 50px;
    width: 100%;
    font-size: 2rem;
    color: #292929;
    background-color: #e6f0ff;
    border: none;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #292929;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #292929;
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #292929;
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #292929;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #292929;
  }

  ::placeholder {
    /* Most modern browsers support this now. */
    color: #292929;
  }

  div {
    position: relative;
  }

  .icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
  }
`;
