import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledTypo } from '../../../styles/mixins';
import { APP_COLORS } from '../../../themes';

const ButtonText = ({ title, to, onClick, disable = false }) => {
  if (to) {
    return (
      <StyledButtonLink as={Link} to={to} onClick={onClick}>
        {title}
      </StyledButtonLink>
    );
  } else {
    return (
      <StyledButton onClick={onClick} disabled={disable}>
        {title}
      </StyledButton>
    );
  }
};

const StyledButton = styled.button`
  ${StyledTypo.heading6({ color: APP_COLORS.blue })}

  &:disabled {
    cursor: default;
    color: ${APP_COLORS.grayLight};
    pointer-events: none;
  }

  &:hover {
    color: ${APP_COLORS.white};
  }
`;

const StyledButtonLink = styled.button`
  ${StyledTypo.heading6({ color: APP_COLORS.blue })}
`;

export default ButtonText;
