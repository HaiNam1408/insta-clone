import React from 'react';
import { StyledPosition } from '../../../styles/mixins';
import styled from 'styled-components';
import { APP_COLORS } from '../../../themes';

const Overlay = () => {
  return <StyledOverlay />;
};

const StyledOverlay = styled.div`
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

export default Overlay;
