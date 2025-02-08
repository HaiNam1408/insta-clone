import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { formattedNumber } from '../../../../libs/utils/formattedNumber';
import { APP_COLORS } from '../../../../themes';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { EmojiIcon } from '../../../../assets/svgs';

const LIMIT_TEXT = 2200;

const SharePost = (props) => {
  const { photoCropURL, text, handleInputChange, onEmojiClick } = props;
  const { userCurrent } = useSelector((state) => state.users);

  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [countIncrement, setCountIncrement] = useState(0);

  useEffect(() => {
    const wordCount = text.length;

    if (wordCount > LIMIT_TEXT) {
      return;
    }

    setCountIncrement(wordCount);
  }, [text]);

  return (
    <StyledSharePost>
      <StyledSharePostImage>
        <img src={photoCropURL} alt="" />
      </StyledSharePostImage>
      <StyledSharePostBar>
        <StyledPostHeader>
          <Avatar
            color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
            size={28}
            round={true}
            name={userCurrent?.username}
            src={userCurrent?.avatar}
          />
          <p>{userCurrent?.username}</p>
        </StyledPostHeader>
        <StyledPostTextArea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write a caption..."
          value={text}
          onChange={handleInputChange}></StyledPostTextArea>
        <StyledSharePostInput>
          <StyledSharePostEmoji>
            <button onClick={() => setToggleEmoji(!toggleEmoji)} className="btn-emoji">
              <EmojiIcon />
            </button>
            {toggleEmoji && (
              <span className="emoji-picker">
                <Picker
                  data={data}
                  onEmojiSelect={onEmojiClick}
                  navPosition="none"
                  searchPosition="none"
                  perLine={7}
                />
              </span>
            )}
          </StyledSharePostEmoji>
          <p>
            {countIncrement ? formattedNumber(countIncrement) : '0'}/{formattedNumber(LIMIT_TEXT)}
          </p>
        </StyledSharePostInput>
      </StyledSharePostBar>
    </StyledSharePost>
  );
};

const StyledSharePost = styled.div`
  ${StyledDisplay.dFlex({ align: 'start' })}
  width: 100%;
  height: 100%;
`;

const StyledSharePostImage = styled.div`
  ${StyledDisplay.dFlex({ align: 'center' })}
  width: calc(100% - 324px);
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StyledSharePostBar = styled.div`
  width: 324px;
  padding: 12px;
`;

const StyledSharePostEmoji = styled.div`
  position: relative;

  .btn-emoji svg {
    font-size: ${(props) => (props.$place === 'left' ? 22 : 12)}px;
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
    top: 100%;
    left: 0;
    height: 150px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`;

const StyledPostHeader = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '12px' })}
  ${StyledTypo.heading6({})}

  width: 324px;

  .sb-avatar__text span {
    font-size: 12px;
  }
`;

const StyledPostTextArea = styled.textarea`
  ${StyledTypo.textBody({})}

  width: 100%;
  margin-top: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
`;

const StyledSharePostInput = styled.div`
  ${StyledDisplay.dFlex({})}

  p {
    ${StyledTypo.textThin({ color: APP_COLORS.grayDark })}
  }
`;
export default SharePost;
