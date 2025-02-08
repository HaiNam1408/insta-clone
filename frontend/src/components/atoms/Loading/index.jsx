import React from 'react';
import { LoadingIcon } from '../../../assets/svgs';
import styled, { keyframes } from 'styled-components';
import { APP_COLORS } from '../../../themes';

const Loading = ({ size = 32, color }) => {
  return (
    <StyledLoading $size={size}>
      <LoadingIcon style={{ fill: color || APP_COLORS.white }} />
    </StyledLoading>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  animation-duration: 0.8s;
  animation-timing-function: steps(12, end);
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  color: ${APP_COLORS.white};

  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
`;

export default Loading;
