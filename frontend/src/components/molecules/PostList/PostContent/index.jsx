import React from 'react';
import styled from 'styled-components';
import { APP_COLORS } from '../../../../themes';

const PostContent = (props) => {
  const { postImage } = props;
  return (
    <StyledPostContent>
      <img src={postImage} alt="" />
    </StyledPostContent>
  );
};

const StyledPostContent = styled.div`
  width: 468px;
  height: 468px;
  margin: 12px 0;
  border-radius: 5px;
  border: 1px solid ${APP_COLORS.veryDark};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export default PostContent;
