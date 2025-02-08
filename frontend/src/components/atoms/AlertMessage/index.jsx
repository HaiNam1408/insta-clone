import React from 'react';
import styled from 'styled-components';
import { APP_COLORS } from '../../../themes';
import { StyledPosition, StyledTypo } from '../../../styles/mixins';

const AlertMessage = ({ show = true, message }) => {
  return <StyledAlertMessage className={`${show ? 'show' : ''}`}>{message}</StyledAlertMessage>;
};

const StyledAlertMessage = styled.div`
  ${StyledPosition.position({ position: 'fixed', bottom: 0 })}
  ${StyledTypo.textBody2({ color: APP_COLORS.white })}


  background-color: ${APP_COLORS.veryDark};
  padding: 12px 16px;
  width: 100%;
  transform: translateY(100%);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-out;

  &.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

export default AlertMessage;
