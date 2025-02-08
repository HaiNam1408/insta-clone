import React from 'react';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../styles/mixins';
import videoSrc from '../../assets/videos/video1.mp4';
import musicImg from '../../assets/images/avatar-default.jpg';
import {
  HeartOutlineIcon,
  CommentIcon,
  BookmarkIcon,
  ShareIcon,
  DotsIcon
} from '../../assets/svgs';
import { APP_COLORS } from '../../themes';

function ReelsPage(props) {
  const videoList = [
    {
      username: 'thnh.dev',
      avatar: musicImg,
      video: videoSrc,
      like: 1234,
      comment: 50,
      caption: 'This is absolutly amazing app!!'
    },
    {
      username: 'namphh_',
      avatar: musicImg,
      video: videoSrc,
      like: 4234,
      comment: 230,
      caption: 'I love this, that so cool😊😊'
    },
    {
      username: 'umbbbaw.sad',
      avatar: musicImg,
      video: videoSrc,
      like: 123,
      comment: 5,
      caption: '👌👌👌'
    },
    {
      username: 'thu.bh.bh',
      avatar: musicImg,
      video: videoSrc,
      like: 435,
      comment: 50,
      caption: 'That niceeee, I love it!'
    }
  ];

  return (
    <StyledPageWrapper>
      {videoList.map((e, i) => (
        <StyledReelWrapper key={i}>
          <div style={{ position: 'relative' }}>
            <video src={e.video} loop muted autoPlay width={360}></video>
            <StyledVideoInfo>
              <StyledUserInfo>
                <StyledUserAvatar src={e.avatar}></StyledUserAvatar>
                <b>{e.username}</b>
                <p>•</p>
                <StyledTrackButton>Track</StyledTrackButton>
              </StyledUserInfo>
              <p>{e.caption}</p>
              <p style={{ color: '#ffffff' }}>&#127925; {e.username} Music Original</p>
            </StyledVideoInfo>
          </div>
          <StyledNavbar>
            <StyledActionButton>
              <HeartOutlineIcon></HeartOutlineIcon>
              <StyledActionText>{e.like}</StyledActionText>
            </StyledActionButton>
            <StyledActionButton>
              <CommentIcon></CommentIcon>
              <StyledActionText>{e.comment}</StyledActionText>
            </StyledActionButton>
            <StyledActionButton>
              <ShareIcon></ShareIcon>
            </StyledActionButton>
            <StyledActionButton>
              <BookmarkIcon></BookmarkIcon>
            </StyledActionButton>
            <StyledActionButton>
              <DotsIcon></DotsIcon>
            </StyledActionButton>
            <StyledActionButton>
              <StyledMusicImg src={e.avatar} />
            </StyledActionButton>
          </StyledNavbar>
        </StyledReelWrapper>
      ))}
    </StyledPageWrapper>
  );
}

const StyledTrackButton = styled.a`
  padding: 4px 8px;
  border-radius: 8px;
  border: solid 1px ${APP_COLORS.grayLight};
`;

const StyledUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledUserInfo = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', align: 'center', gap: '12px' })}
`;

const StyledVideoInfo = styled.div`
  ${StyledDisplay.textOverflowEllipsis({ line: 3 })}
  ${StyledDisplay.dFlex({ align: 'start', gap: '16px' })}
  flex-direction: column;
  width: 90%;
  position: absolute;
  bottom: 40px;
  left: 12px;
`;

const StyledVideo = styled.video`
  position: relative;
  width: 360px;
`;

const StyledMusicImg = styled.img`
  width: 28px;
  height: 28px;
  border: solid 1px #ffffff;
  border-radius: 4px;
`;

const StyledActionButton = styled.a`
  ${StyledDisplay.dFlex({ justify: 'end', align: 'center', gap: '8px' })}
  flex-direction: column;
  margin-top: 32px;
`;

const StyledActionText = styled.p`
  ${StyledTypo.textBody3({})}
`;

const StyledNavbar = styled.div`
  padding: 32px;
  ${StyledDisplay.dFlex({ justify: 'end', align: 'center' })}
  flex-direction: column;
`;

const StyledPageWrapper = styled.div`
  padding: 32px;
  ${StyledDisplay.dFlex({ justify: 'center', gap: '16px' })}
  flex-direction: column;
`;

const StyledReelWrapper = styled.div`
  ${StyledDisplay.dFlex({ justify: 'space-between', align: 'end' })}
  position: relative;
  min-width: '400px';
`;

export default ReelsPage;
