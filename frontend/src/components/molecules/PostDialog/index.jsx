import React from 'react';
import styled from 'styled-components';
import ImageDialog from './ImageDialog';
import CommentDialog from './CommentDialog';
import { StyledDisplay, StyledPosition } from '../../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../../themes';
import DialogContainer from '../DialogContainer';
import SkeletonPostDialog from './SkeletonPostDialog';

const PostDialog = (props) => {
  const { post, showModal, closeModal } = props;

  return (
    <DialogContainer showModal={showModal} closeModal={closeModal}>
      <StyledPostDialogWrapper>
        {Object.keys(post).length === 0 ? (
          <SkeletonPostDialog />
        ) : (
          <>
            <ImageDialog image={post.postImage} />
            <CommentDialog
              comments={post.comments}
              avatar={post.avatar}
              postId={post.id}
              username={post.username}
              description={post.description}
              countFavorite={post.countFavorite}
              countComment={post.countComment}
              createdAt={post.createdAt}
              isVerified={post.isVerified}
            />
          </>
        )}
      </StyledPostDialogWrapper>
    </DialogContainer>
  );
};

const StyledPostDialogWrapper = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center', align: 'stretch' })}
  ${StyledPosition.position({ position: 'absolute', zIndex: 9999 })}

  max-width: ${APP_SIZES.xl};
  max-height: 80%;
  height: 100%;
  background-color: #fff;
`;

const StyledPostDialogTimes = styled.div`
  ${StyledPosition.position({ position: 'absolute', right: '16px', top: '16px', zIndex: 9999 })}
  cursor: pointer;

  &:hover {
    color: ${APP_COLORS.grayDark};
  }
`;

export default PostDialog;
