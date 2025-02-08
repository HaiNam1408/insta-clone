import React from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import IconImage from '../../../../assets/images/camera-icon-bg.png';
import { APP_COLORS } from '../../../../themes';

function UserPost(props) {
  return (
    <StyledWrapper>
      <a>
        <StyledImage src={IconImage} />
      </a>
      <StyledHeading>Share Photos</StyledHeading>
      <StyledSubtitle>When you share photos, they will appear on your profile.</StyledSubtitle>
      <StyledTextButton>Share your first photo</StyledTextButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  max-width: 350px;
  margin: 60px 44px;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 62px;
  height: 62px;
`;

const StyledHeading = styled.p`
  ${StyledTypo.heading2({})}
  margin: 16px 0;
`;

const StyledSubtitle = styled.p`
  ${StyledTypo.textBody2({})}
  text-align: center;
  margin-bottom: 16px;
`;

const StyledTextButton = styled.a`
  ${StyledTypo.textBody2({})}
  text-align: center;
  font-weight: 600;
  color: #0095f6;
`;

export default UserPost;
