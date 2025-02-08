import React, { useState } from 'react';
import { StyledTypo } from '../../../../styles/mixins';
import styled from 'styled-components';
import { APP_COLORS } from '../../../../themes';
import PostDialog from '../../PostDialog';
import { commentsData } from '../../../../data/commentsData';
import { useModal } from '../../../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { POST_ACTIONS } from '../../../../redux/actions/postAction';

const PostBtnComment = ({ id, countComment }) => {
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const { showModal, openModal, closeModal } = useModal();

  const handleClickComment = () => {
    POST_ACTIONS.findPostById(dispatch, id);
    openModal();
  };

  return (
    <>
      <StyledPostFooterBtnComment onClick={handleClickComment}>
        View all {countComment} comments
      </StyledPostFooterBtnComment>
      <PostDialog post={post} showModal={showModal} closeModal={closeModal} />
    </>
  );
};

const StyledPostFooterBtnComment = styled.button`
  ${StyledTypo.textBody2({ color: APP_COLORS.grayLight })}
`;

export default PostBtnComment;
