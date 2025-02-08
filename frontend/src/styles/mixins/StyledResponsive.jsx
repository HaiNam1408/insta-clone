import styled, { css } from 'styled-components';

/**
const StyledComponent = styled.div`
  ${maxWidth} {
    CSS properties for max-width 
  }
  ${minWidth} {
    CSS properties for min-width 
  }
`;
 */

export const StyledResponsive = {
  maxWidth: css`
    @media (max-width: ${(props) => props.breakpoint}) {
      ${(props) => props.content};
    }
  `,
  minWidth: css`
    @media (min-width: ${(props) => props.breakpoint}) {
      ${(props) => props.content};
    }
  `
};
