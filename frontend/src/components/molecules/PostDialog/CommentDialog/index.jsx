import React, { useState } from 'react';
import { APP_COLORS, APP_SIZES } from '../../../../themes';
import styled from 'styled-components';
import PostHeader from '../../PostList/PostHeader';
import PostIcons from '../../PostList/PostIcons';
import PostInput from '../../PostList/PostInput';
import ListComment from './ListComment';
import { StyledDisplay } from '../../../../styles/mixins';
import PostFavorite from '../../PostList/PostFavorite';
import { useSelector } from 'react-redux';

const CommentDialog = (props) => {
  const {
    postId,
    comments,
    avatar,
    username,
    createdAt,
    description,
    countFavorite,
    countComment,
    isVerified
  } = props;
  const { reply } = useSelector((state) => state.comments);

  return (
    <StyledCommentDialog>
      <StyledHeaderComment>
        <PostHeader avatar={avatar} username={username} createdAt={createdAt} />
      </StyledHeaderComment>
      <ListComment comments={comments} />
      <StyledFooterComment>
        <PostIcons />
        <PostFavorite countFavorite={countFavorite} />
      </StyledFooterComment>
      <PostInput id={postId} place="left" reply={reply} />
    </StyledCommentDialog>
  );
};

const StyledCommentDialog = styled.div`
  ${StyledDisplay.dFlexCol({ align: 'stretch' })}

  width: ${APP_SIZES.commentWidth};
  background-color: ${APP_COLORS.black};
`;

const StyledHeaderComment = styled.div`
  padding: 14px 16px;
  border-bottom: 1px solid ${APP_COLORS.veryDark};
`;

const StyledFooterComment = styled.div`
  ${StyledDisplay.dFlexCol({ align: 'stretch', gap: '8px' })}

  padding: 14px 16px;
  border-top: 1px solid ${APP_COLORS.veryDark};
`;

export default CommentDialog;
