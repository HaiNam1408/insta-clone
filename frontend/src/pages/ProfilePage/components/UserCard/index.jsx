import React from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import IconImage from '../../../../assets/images/usercard-icon-bg.png';
function UserCard(props) {
  return (
    <StyledWrapper>
      <a>
        <StyledImage src={IconImage} />
      </a>
      <StyledHeading>Photos of you</StyledHeading>
      <StyledSubtitle>When people tag you in photos, they{"'"}ll appear here.</StyledSubtitle>
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

export default UserCard;
