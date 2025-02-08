import styled, { css } from 'styled-components';

export const StyledPosition = {
  position: ({
    position = 'absolute',
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto',
    zIndex = 0
  }) => css`
    position: ${position};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    z-index: ${zIndex};
  `,

  positionCenter: ({
    position = 'absolute',
    top = '50%',
    right = 'auto',
    bottom = 'auto',
    left = '50%',
    zIndex = 0,
    x = '-50%',
    y = '-50%'
  }) => css`
    ${StyledPosition.position({ position, top, right, bottom, left, zIndex })};
    transform: translate(${x}, ${y});
  `
};
