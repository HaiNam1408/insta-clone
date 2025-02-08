import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StyledDisplay } from '../../../styles/mixins';
import { useDispatch, useSelector } from 'react-redux';
import { POST_ACTIONS } from '../../../redux/actions/postAction';
import PostItem from './PostItem';
import PostSkeleton from './PostSkeleton';

const PostList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);

  useEffect(() => {
    POST_ACTIONS.findAllPosts(dispatch);
  }, []);

  return !data || data.length === 0 ? (
    <>
      {Array(20)
        .fill()
        .map((_, index) => (
          <PostSkeleton key={index} />
        ))}
    </>
  ) : (
    <StyledPostList>
      {data?.map(
        (
          { id, avatar, username, createdAt, postImage, countFavorite, countComment, description },
          index
        ) => (
          <PostItem
            key={index}
            id={id}
            avatar={avatar}
            username={username}
            createdAt={createdAt}
            postImage={postImage}
            countFavorite={countFavorite}
            countComment={countComment}
            description={description}
          />
        )
      )}
    </StyledPostList>
  );
};

const StyledPostList = styled.div`
  ${StyledDisplay.dFlexCol({ gap: '16px' })}
`;

export default PostList;
