import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const FlexContainer = styled.div<{ align: string; wrap?: boolean }>`
  display: flex;
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  width: 100%;
`;

export const FlexItem = styled.div`
  flex: 1;
  padding: 50px;
  text-align: center;
  &:not(:last-child) {
    border-right: 4px solid rgba(225, 225, 225, 0.2);
  }
`;
