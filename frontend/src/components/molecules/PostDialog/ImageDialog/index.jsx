import React from 'react';
import styled from 'styled-components';
import { APP_COLORS } from '../../../../themes';

const ImageDialog = ({ image }) => {
  return (
    <StyledImageDialog>
      <img src={image} alt="" />
    </StyledImageDialog>
  );
};

const StyledImageDialog = styled.div`
  flex: 1;
  width: 100%;
  min-width: 600px;
  background-color: ${APP_COLORS.veryDark};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageDialog;
