import React, { useEffect, useRef } from 'react';
import Overlay from '../../atoms/Overlay';
import { StyledDisplay, StyledPosition } from '../../../styles/mixins';
import styled from 'styled-components';
import { APP_COLORS } from '../../../themes';
import { TimesIcon } from '../../../assets/svgs';

const DialogContainer = ({ children, showModal, closeModal }) => {
  const handleClickClose = () => {
    document.body.style.overflow = 'visible';
    closeModal();
  };

  return (
    showModal && (
      <StyledDialogWrapper>
        {children}
        <StyledDialogOverlay onClick={handleClickClose} />
        <StyledDialogTimes onClick={handleClickClose}>
          <TimesIcon />
        </StyledDialogTimes>
      </StyledDialogWrapper>
    )
  );
};

const StyledDialogWrapper = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  ${StyledPosition.position({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999999
  })}
`;

const StyledDialogOverlay = styled.div`
  ${StyledPosition.position({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  })}

  background-color: rgba(${APP_COLORS.blackRBG},.5);
`;

const StyledDialogTimes = styled.div`
  ${StyledPosition.position({ position: 'absolute', right: '16px', top: '16px', zIndex: 9999 })}
  cursor: pointer;

  &:hover {
    color: ${APP_COLORS.grayDark};
  }
`;

export default DialogContainer;
