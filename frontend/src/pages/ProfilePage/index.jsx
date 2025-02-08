import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../components/atoms/PrimaryButton';
import { StyledDisplay, StyledTypo } from '../../styles/mixins';
import { InfoSettingIcon } from '../../assets/svgs';
import UserFeed from './components/UserFeed';
import UserContent from './components/UserContent';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';

function ProfilePage(props) {
  const { userCurrent } = useSelector((state) => state.users);

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledAvatarContainer>
          <Avatar
            color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
            src={userCurrent?.avatar}
            name={userCurrent?.username}
            round={true}
            size={150}
          />
        </StyledAvatarContainer>
        <StyledInfoWapper>
          <StyledInfo>
            <StyledName>{userCurrent?.fullName || userCurrent?.username}</StyledName>
            <StyledButton>
              <PrimaryButton text="Edit profile"></PrimaryButton>
              <PrimaryButton text="View archive"></PrimaryButton>
              <InfoSettingIcon />
            </StyledButton>
          </StyledInfo>
          <StyledNumber>
            <p>
              <b>0</b> post
            </p>
            <a href="#">
              <p>
                <b>38</b> followers
              </p>
            </a>
            <a href="#">
              <p>
                <b>58</b> following
              </p>
            </a>
          </StyledNumber>
          <div>
            <StyledFontStyle>
              <b>{userCurrent?.fullName || userCurrent?.username}</b>
            </StyledFontStyle>
            <StyledFontStyle>Tomorrow will be better!</StyledFontStyle>
          </div>
        </StyledInfoWapper>
      </StyledHeader>
      <UserFeed></UserFeed>
      <UserContent></UserContent>
    </StyledWrapper>
  );
}

export default ProfilePage;

const StyledFontStyle = styled.p`
  ${StyledTypo.textBody2({})}
  line-height: 24px;
`;

const StyledName = styled.span`
  ${StyledTypo.heading4({})}
  font-weight: 400;
`;

const StyledNumber = styled.div`
  ${StyledDisplay.dFlex({ gap: '28px', justify: 'start' })}
  margin: 20px 0;
`;

const StyledInfo = styled.div`
  ${StyledDisplay.dFlex({ align: 'center', gap: '20px', justify: 'start' })}
`;

const StyledInfoWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledButton = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center', gap: '8px' })}
`;

const StyledWrapper = styled.div`
  width: 100%;
  padding: 30px 52px 0;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  margin-bottom: 44px;
`;

const StyledAvatarContainer = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center' })}
  width: 50%;
`;

const StyledAvatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
