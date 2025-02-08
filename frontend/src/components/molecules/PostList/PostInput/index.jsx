import React, { useEffect, useState } from 'react';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import styled, { css } from 'styled-components';
import ButtonText from '../../../atoms/ButtonText';
import { EmojiIcon } from '../../../../assets/svgs';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const PostInput = ({ id, place = 'right', reply }) => {
  const [comment, setComment] = useState('');
  const [idx, setIdx] = useState(-1);

  useEffect(() => {
    if (reply) setComment(reply);
  }, [reply]);

  const onEmojiClick = (e) => {
    const sym = e.unified.split('_');
    const codeArray = [];

    sym.forEach((e) => codeArray.push('0x' + e));

    let emoji = String.fromCodePoint(...codeArray);
    setComment(comment + emoji);
  };

  const PostEmoji = (
    <StyledPostEmoji $place={place} $hasValue={!comment.trim()}>
      <button onClick={() => setIdx(idx ? null : id)} className="btn-emoji">
        <EmojiIcon />
      </button>
      {id === idx && (
        <span className="emoji-picker">
          <Picker data={data} onEmojiSelect={onEmojiClick} />
        </span>
      )}
    </StyledPostEmoji>
  );

  return (
    <StyledPostInput $place={place}>
      {place === 'left' && PostEmoji}
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {(comment || place === 'left') && (
        <ButtonText title="Post" disable={!comment.trim()} onClick={() => {}} />
      )}
      {place === 'right' && PostEmoji}
    </StyledPostInput>
  );
};

const StyledPostInput = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '16px' })}
  ${StyledTypo.textBody2({ color: APP_COLORS.grayUltraLight })}

  width: 100%;

  ${(props) =>
    props.$place === 'left'
      ? css`
          padding: 8px 16px;
          border-top: 1px solid ${APP_COLORS.veryDark};
        `
      : css`
          padding-bottom: 8px;
          border-bottom: 1px solid ${APP_COLORS.veryDark};
        `};

  input {
    width: 100%;
    padding: 8px 0;
    background-color: transparent;
  }
`;

const StyledPostEmoji = styled.div`
  position: relative;

  .btn-emoji svg {
    width: ${(props) => (props.$place === 'left' ? 22 : 12)}px;
  }

  .btn-emoji:hover {
    cursor: pointer;
    color: ${APP_COLORS.grayLight};
  }
  .btn-emoji:active {
    color: ${APP_COLORS.grayDark};
  }

  .emoji-picker {
    position: absolute;
    bottom: 100%;
  }
`;

export default PostInput;
