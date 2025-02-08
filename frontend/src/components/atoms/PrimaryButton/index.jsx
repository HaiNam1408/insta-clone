import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledDisplay, StyledTypo } from '../../../styles/mixins';
import { APP_COLORS } from '../../../themes';

function PrimaryButton(props) {
  const { text, bg, onClick } = props;
  return (
    <StyledButton onClick={onClick} $bg={bg}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.a`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  ${StyledTypo.heading6({})}

    border-radius: 10px;
  height: 32px;
  padding: 0 16px;
  background-color: ${(props) => (props.$bg == 'blue' ? APP_COLORS.blue : APP_COLORS.greyLight)};

  &:hover {
    opacity: 0.8;
  }
`;

export default PrimaryButton;
