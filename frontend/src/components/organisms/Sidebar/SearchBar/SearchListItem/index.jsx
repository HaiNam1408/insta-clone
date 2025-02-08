import React from 'react';
import styled from 'styled-components';
import { VerifiedIcon } from '../../../../../assets/svgs/VerifiedIcon';
import { StyledDisplay, StyledTypo } from '../../../../../styles/mixins';
import { APP_COLORS } from '../../../../../themes';
import { Link } from 'react-router-dom';

const SearchListItem = (props) => {
  const { id, avatar, username, description, isVerified } = props;

  return (
    <StyledSearchListItem>
      <StyledSearchListAvatar>
        <img src={avatar} alt={username} />
      </StyledSearchListAvatar>
      <StyledSearchListContent>
        <StyledSearchListTitle>
          <p>{username}</p>
          <span>{isVerified && <VerifiedIcon />}</span>
        </StyledSearchListTitle>
        <StyledSearchListDesc>{description}</StyledSearchListDesc>
      </StyledSearchListContent>
    </StyledSearchListItem>
  );
};

const StyledSearchListAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 999px;
  }
`;
const StyledSearchListContent = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'start' })}
`;
const StyledSearchListTitle = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start' })}
  ${StyledTypo.heading6({})}

  ${(props) => props.content}
`;

const StyledSearchListDesc = styled.p`
  ${StyledTypo.textBody2({ color: APP_COLORS.grayLight })}
`;

const StyledSearchListItem = styled(Link)`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '8px' })}

  padding: 8px 24px;
  width: 100%;

  &:hover {
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.1);
  }

  &:active {
    opacity: 0.6;
  }
`;

export default SearchListItem;
