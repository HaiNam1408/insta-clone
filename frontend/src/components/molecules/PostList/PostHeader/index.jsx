import React from 'react';
import styled from 'styled-components';
import { DotsIcon } from '../../../../assets/svgs';
import ButtonText from '../../../atoms/ButtonText';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import Avatar from 'react-avatar';
import { convertToRelativeTime } from '../../../../libs/utils/convertToRelativeTime';

const PostHeader = (props) => {
  const { avatar, username, createdAt } = props;

  return (
    <StyledPostHeader>
      <StyledPostHeaderLeft>
        <div className="image">
          {avatar ? (
            <Avatar src={avatar} round={true} size={24} />
          ) : (
            <Avatar name={username} round={true} size={24} />
          )}
        </div>
        <p className="name">{username}</p>
        <span className="dot">•</span>
        <p className="time">{convertToRelativeTime(createdAt)}</p>
        <span className="dot">•</span>
        <ButtonText title="Follow" />
      </StyledPostHeaderLeft>
      <StyledMoreIcon>
        <DotsIcon />
      </StyledMoreIcon>
    </StyledPostHeader>
  );
};

const StyledPostHeader = styled.div`
  ${StyledDisplay.dFlex({})}

  width: 100%;
`;

const StyledMoreIcon = styled.button`
  display: inline-block;

  &:active {
    color: ${APP_COLORS.grayLight};
  }
`;

const StyledPostHeaderLeft = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '2px' })}

  flex: 1;
  width: 100%;

  .name {
    ${StyledTypo.heading6({ color: APP_COLORS.grayExtraLight })}

    &:hover {
      color: ${APP_COLORS.grayLight};
    }
    &:active {
      color: ${APP_COLORS.grayDark};
    }

    cursor: pointer;
    padding-left: 4px;
  }

  .time {
    ${StyledTypo.textBody2({ color: APP_COLORS.grayLight })}
    cursor: pointer;
  }

  .dot {
    font-size: 10px;
    color: ${APP_COLORS.grayLight};
  }

  .image span {
    font-size: 12px;
  }
`;

export default PostHeader;
