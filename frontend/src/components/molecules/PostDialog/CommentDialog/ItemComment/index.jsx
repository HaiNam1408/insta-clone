import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../../styles/mixins';
import { formattedNumber } from '../../../../../libs/utils/formattedNumber';
import { HeartOutlineIcon, HeartSolidIcon, OptionsIcon } from '../../../../../assets/svgs';
import { APP_COLORS } from '../../../../../themes';
import { useDispatch } from 'react-redux';
import { COMMENT_ACTIONS } from '../../../../../redux/actions/commentAction';
import { useFavorite } from '../../../../../hooks/useFavorite';

const ItemComment = (props) => {
  const { avatar, username, content, createdAt, countFavorite } = props;

  const dispatch = useDispatch();
  const { favorite, handleClickFavorite } = useFavorite(countFavorite);

  const handleClickReply = () => {
    COMMENT_ACTIONS.addReply(dispatch, `@${username}`);
  };

  return (
    <StyledItemComment>
      <StyledItemCommentAvatar>
        <img src={avatar} alt={username} />
      </StyledItemCommentAvatar>
      <StyledItemCommentContent>
        <StyledItemCommentTitle>
          <Link to="">
            <b>{username}</b>
          </Link>
          <span dangerouslySetInnerHTML={{ __html: content }}></span>
        </StyledItemCommentTitle>
        <StyledItemCommentBottom>
          <Link to="">{createdAt}</Link>
          <button>
            <b>{formattedNumber(favorite.count)} likes</b>
          </button>
          <button className="reply" onClick={handleClickReply}>
            <b>Reply</b>
          </button>
          <button className="icon-option">
            <OptionsIcon />
          </button>
        </StyledItemCommentBottom>
      </StyledItemCommentContent>
      <StyledItemCommentLike onClick={handleClickFavorite} $isFavorite={favorite.isFavorite}>
        {favorite.isFavorite ? <HeartSolidIcon /> : <HeartOutlineIcon />}
      </StyledItemCommentLike>
    </StyledItemComment>
  );
};

const sizeAnimation = keyframes`
  0%  { width: 8px;}
  50% {width: 14px;}
  /* 100% { width: 12px} */
`;

const StyledItemComment = styled.div`
  ${StyledDisplay.dFlex({ align: 'start' })}

  width: 100%;

  .icon-option {
    display: none;
  }

  &:hover .icon-option {
    ${StyledDisplay.dFlex({})}
  }
`;

const StyledItemCommentAvatar = styled(Link)`
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 999px;
  }
`;

const StyledItemCommentContent = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const StyledItemCommentLike = styled.button`
  width: 42px;
  text-align: end;

  svg {
    color: ${(props) => (props.$isFavorite ? APP_COLORS.red : APP_COLORS.grayLight)};
    width: 12px;
    transition: 0.5s;

    ${(props) =>
      props.$isFavorite &&
      css`
        animation: ${sizeAnimation} 0.5s;
      `};
  }

  svg:hover {
    color: ${APP_COLORS.grayDark};
  }

  svg:not(:hover) {
    animation: ${sizeAnimation} 0.5s;
  }
`;

const StyledItemCommentTitle = styled.div`
  ${StyledTypo.textBody2({ color: APP_COLORS.grayUltraLight })}

  a {
    margin-right: 4px;
  }
`;

const StyledItemCommentBottom = styled.div`
  ${StyledTypo.heading7({ color: APP_COLORS.grayDark })}
  ${StyledDisplay.dFlex({ justify: 'start', gap: '10px' })}

  height: 24px;

  a {
    ${StyledDisplay.dFlex({ justify: 'start', gap: '10px' })}
    height: 100%
  }

  button {
    font-size: inherit;
    font-weight: inherit;
    height: 100%;
  }
`;

export default ItemComment;
