import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { EmojiIcon } from '../../../../assets/svgs';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import { Link } from 'react-router-dom';
import PostFooterIcons from '../PostIcons';
import PostDesc from '../PostDesc';
import PostFavorite from '../PostFavorite';
import PostBtnComment from '../PostBtnComment';
import PostInput from '../PostInput';
import { useFavorite } from '../../../../hooks/useFavorite';

const PostFooter = (props) => {
  const { id, username, countFavorite, countComment, description, isMore = true } = props;
  const { favorite, handleClickFavorite } = useFavorite(countFavorite);

  return (
    <StyledPostFooter>
      <PostFooterIcons handleClickFavorite={handleClickFavorite} />
      <PostDesc username={username} description={description} />
      <PostFavorite countFavorite={favorite.count} />
      <PostBtnComment id={id} countComment={countComment} />
      <PostInput id={id} />
    </StyledPostFooter>
  );
};

const StyledPostFooter = styled.div`
  ${StyledDisplay.dFlexCol({ align: 'start', gap: '6px' })}

  width: 100%;
`;

export const StyledPostFooterLink = styled(Link)`
  ${StyledTypo.heading6({ color: APP_COLORS.grayExtraLight })}

  &:hover {
    color: ${APP_COLORS.grayLight};
  }
  &:active {
    color: ${APP_COLORS.grayDark};
  }
`;

export default PostFooter;
