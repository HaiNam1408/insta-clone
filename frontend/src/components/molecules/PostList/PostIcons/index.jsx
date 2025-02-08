import React from 'react';
import { StyledDisplay } from '../../../../styles/mixins';
import styled from 'styled-components';
import { APP_COLORS } from '../../../../themes';
import { BookmarkIcon, CommentIcon, HeartOutlineIcon, ShareIcon } from '../../../../assets/svgs';

const PostIcons = (props) => {
  const { handleClickFavorite } = props;

  return (
    <StyledPostIcons>
      <StyledPostIconGroup>
        <StyledPostIconBtn onClick={() => handleClickFavorite}>
          <HeartOutlineIcon />
        </StyledPostIconBtn>
        <StyledPostIconBtn>
          <CommentIcon />
        </StyledPostIconBtn>
        <StyledPostIconBtn>
          <ShareIcon />
        </StyledPostIconBtn>
      </StyledPostIconGroup>
      <StyledPostIconBtn>
        <BookmarkIcon />
      </StyledPostIconBtn>
    </StyledPostIcons>
  );
};

const StyledPostIcons = styled.div`
  ${StyledDisplay.dFlex({})}

  width: 100%;
`;

const StyledPostIconGroup = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '16px' })}

  flex: 1;
`;

const StyledPostIconBtn = styled.button`
  &:hover {
    color: ${APP_COLORS.grayLight};
  }
  &:active {
    color: ${APP_COLORS.grayDark};
  }
`;

export default PostIcons;
