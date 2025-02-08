import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '.';
import { APP_COLORS } from '../../themes';

export const StyledButton = {
  btnPrimaryMixin: ({
    color = APP_COLORS.grayMedium,
    borderColor = APP_COLORS.transparent
  }) => styled.button`
    ${StyledDisplay.dFlex({ justify: 'center', gap: '4px' })}
    ${StyledTypo.textBody({ color })}

  border: 1px solid ${borderColor};
    background-color: transparent;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  `
};
