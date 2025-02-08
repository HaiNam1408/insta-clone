import React from 'react';
import styled from 'styled-components';
import ItemComment from '../ItemComment';
import { StyledDisplay } from '../../../../../styles/mixins';

const ListComment = ({ comments }) => {
  document.body.style.overflow = 'hidden';
  return (
    <StyledListComment>
      {comments?.map(({ avatar, username, content, createdAt, countFavorite }, index) => (
        <ItemComment
          key={index}
          avatar={avatar}
          username={username}
          content={content}
          createdAt={createdAt}
          countFavorite={countFavorite}
        />
      ))}
    </StyledListComment>
  );
};

const StyledListComment = styled.div`
  ${StyledDisplay.dFlexCol({ align: 'start', gap: '16px' })}

  flex: 1;
  overflow-y: auto;
  padding: 14px 16px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default ListComment;
