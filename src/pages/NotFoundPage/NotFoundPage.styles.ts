import { styled } from 'styled-components';
import { device } from 'styles/devices';

export const IconWrapper = styled.div`
  animation: float 6s ease-in-out infinite;
  > svg {
    font-size: 15rem;
    color: #f5f5f5;

    @media ${device.laptop} {
      font-size: 25rem;
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
