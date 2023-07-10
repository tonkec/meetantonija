import { styled } from 'styled-components';

export const H1 = styled.h1<{ $textColor?: string }>`
  font-size: 4.052rem;
  color: ${(props) => props.$textColor || '#000000'};
`;

export const H2 = styled.h2<{ $textColor?: string }>`
  font-size: 2.441rem;
  color: ${(props) => props.$textColor || '#000000'};
`;

export const H3 = styled.h3<{ $textColor?: string }>`
  font-size: 1.953rem;
  color: ${(props) => props.$textColor || '#000000'};
`;

export const H4 = styled.h4<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || '#000000'};
  font-size: 1.563rem;
`;

export const P = styled.p<{ $textColor?: string }>`
  font-size: 1.1rem;
  color: ${(props) => props.$textColor || '#000000'};
`;
