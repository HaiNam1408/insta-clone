import styled, { css } from 'styled-components';

export const StyledDisplay = {
  dFlex: ({ justify = 'space-between', align = 'center', gap = 0, wrap = 'nowrap' }) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    gap: ${gap};
  `,

  dFlexCol: ({
    justify = 'space-between',
    align = 'center',
    gap = 0,
    wrap = 'nowrap',
    direction = 'column'
  }) => css`
    ${StyledDisplay.dFlex({ justify, align, gap, wrap })}
    flex-direction: ${direction};
  `,

  dGrid: ({ columns, gap = 0 }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: ${gap};
  `,

  textOverflowEllipsis: ({ line = 1 }) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
};
