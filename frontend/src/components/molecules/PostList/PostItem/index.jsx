import React from 'react';
import styled from 'styled-components';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import PostContent from '../PostContent';
import { StyledDisplay } from '../../../../styles/mixins';

const PostItem = (props) => {
  const { id, avatar, username, createdAt, postImage, countFavorite, countComment, description } =
    props;

  return (
    <StyledPostItem>
      <PostHeader avatar={avatar} username={username} createdAt={createdAt} />
      <PostContent postImage={postImage} />
      <PostFooter
        id={id}
        username={username}
        countFavorite={countFavorite}
        countComment={countComment}
        description={description}
      />
    </StyledPostItem>
  );
};

const StyledPostItem = styled.div`
  ${StyledDisplay.dFlexCol({})}

  width: 100%;
`;

export default PostItem;
