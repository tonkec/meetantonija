import { styled } from 'styled-components';
import { device } from './devices';
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const FlexContainer = styled.div<{ align: string; wrap?: boolean }>`
  display: flex;
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  width: 100%;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const FlexItem = styled.div<{ border?: boolean }>`
  width: 100%;
  flex-basis: 100%;
  padding: 50px;
  text-align: center;
  border-bottom: ${(props) =>
    props.border && '4px solid rgba(225, 225, 225, 0.2)'};
  @media ${device.tablet} {
    &:not(:last-child) {
      border-right: ${(props) =>
        props.border && '4px solid rgba(225, 225, 225, 0.2)'};
    }
  }
`;
