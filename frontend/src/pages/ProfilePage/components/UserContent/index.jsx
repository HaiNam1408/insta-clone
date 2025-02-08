import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledDisplay } from '../../../../styles/mixins';
import { UserGridIcon, UserMarkdownIcon } from '../../../../assets/svgs';
import { UserCardIcon } from '../../../../assets/svgs/UserCardIcon';
import { APP_COLORS } from '../../../../themes';
import UserPost from '../UserPost';
import UserMarkdown from '../UserMarkdown';
import UserCard from '../UserCard';

function UserContent(props) {
  const tabList = [
    { title: 'POSTS', icon: <UserGridIcon></UserGridIcon> },
    { title: 'SAVED', icon: <UserMarkdownIcon></UserMarkdownIcon> },
    { title: 'TAGGED', icon: <UserCardIcon></UserCardIcon> }
  ];
  const contentList = [
    <UserPost key={0}></UserPost>,
    <UserMarkdown key={1}></UserMarkdown>,
    <UserCard key={2}></UserCard>
  ];
  const [index, setIndex] = useState(0);
  return (
    <StyledContentWrapper>
      <StyledTabList>
        {tabList.map((e, i) =>
          index == i ? (
            <StyledTab onClick={(e) => setIndex(i)} active={true} key={e.title}>
              {e.icon}
              <p>{e.title}</p>
            </StyledTab>
          ) : (
            <StyledTab onClick={(e) => setIndex(i)} key={e.title}>
              {e.icon}
              <p>{e.title}</p>
            </StyledTab>
          )
        )}
      </StyledTabList>
      <StyledContent>{contentList[index]}</StyledContent>
    </StyledContentWrapper>
  );
}

const StyledContent = styled.a`
  ${StyledDisplay.dFlex({ justify: 'center' })}
`;

const StyledTab = styled.a`
  ${StyledDisplay.dFlex({ justify: 'center', gap: '8px' })}
  font-size: 14px;
  padding: 16px 0;
  border-top: 1px solid
    ${(props) => (props.active == true ? APP_COLORS.white : APP_COLORS.transparent)};
`;

const StyledTabList = styled.ul`
  ${StyledDisplay.dFlex({ justify: 'center', gap: '40px' })}
  border-top: solid 1px #262626;
`;

const StyledContentWrapper = styled.div``;

export default UserContent;
