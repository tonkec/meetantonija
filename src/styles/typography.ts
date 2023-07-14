import { styled } from 'styled-components';
import { device } from './devices';

export const H1 = styled.h1<{ $textColor?: string }>`
  font-size: 3rem;
  color: ${(props) => props.$textColor || '#000000'};

  @media ${device.tablet} {
    font-size: 4.052rem;
  }
`;

export const H2 = styled.h2<{ $textColor?: string }>`
  font-size: 2rem;
  color: ${(props) => props.$textColor || '#000000'};

  @media ${device.tablet} {
    font-size: 2.441rem;
  }
`;

export const H3 = styled.h3<{ $textColor?: string }>`
  font-size: 1.3rem;
  color: ${(props) => props.$textColor || '#000000'};

  @media ${device.tablet} {
    font-size: 1.953rem;
  }
`;

export const H4 = styled.h4<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || '#000000'};
  font-size: 1.563rem;
`;

export const H5 = styled.h4<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || '#000000'};
  font-size: 1.263rem;
`;

export const P = styled.p<{ $textColor?: string }>`
  font-size: 1rem;
  color: ${(props) => props.$textColor || '#000000'};

  @media ${device.mobileL} {
    font-size: 1.25rem;
  }

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;
