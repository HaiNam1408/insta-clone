import React from 'react';
import styled from 'styled-components';
import { PlusIcon } from '../../../../assets/svgs';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
function UserFeed(props) {
  return (
    <StyledContainer>
      <StyledFeedWrapper>
        <StyledFeedBox>
          <PlusIcon></PlusIcon>
        </StyledFeedBox>
      </StyledFeedWrapper>
      <StyledText>New</StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled.a`
  ${StyledDisplay.dFlex({ justify: 'start' })}
  flex-direction: column;
  flex-direction: column;
  width: fit-content;
  gap: 12px;
  margin: 20px 40px;
`;

const StyledText = styled.div`
  ${StyledTypo.textBody2({})}
`;

const StyledFeedBox = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  width: 77px;
  height: 77px;
  background-color: #121212;
  border-radius: 50%;
`;

const StyledFeedWrapper = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  width: 87px;
  height: 87px;
  border-radius: 50%;
  border: solid 1px #2b2b2b;
`;

export default UserFeed;
