import { styled } from 'styled-components';
import { device } from 'styles/devices';
export const StyledSection = styled.section<{
  backgroundColor: string;
  padding: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
  position: relative;

  ${(props) => {
    const { padding } = props;
    if (padding === 'small') {
      return `
        padding-top: var(--space-md);
        padding-bottom:  var(--space-sm);
      `;
    }

    if (padding === 'medium') {
      return `
        padding-top:var(--space-lg);
        padding-bottom:var(--space-md);
      `;
    }

    if (padding === 'big') {
      return `
        padding-top: var(--space-xxl);
        padding-bottom: var(--space-xl);

        @media ${device.tablet} {
          padding-top: var(--space-xl);
          padding-bottom: var(--space-md);
        }
      `;
    }

    if (padding === 'none') {
      return `
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right:0;
      `;
    }
  }}
`;
