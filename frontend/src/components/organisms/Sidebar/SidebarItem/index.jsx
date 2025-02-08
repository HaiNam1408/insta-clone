import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS } from '../../../../themes';
import SettingDialog from '../SettingDialog';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';

const SidebarItem = (props) => {
  const { title, icon, iconActive, isDesktop, to, type, tabName, handleClickTabItem } = props;
  const [toggleMore, setToggleMore] = useState(false);
  const { userCurrent } = useSelector((state) => state.users);

  const prefixIcon =
    type === 'image' ? (
      <StyedAvatar>
        {userCurrent && userCurrent?.avatar ? (
          <Avatar src={userCurrent?.avatar} round={true} size={24} />
        ) : (
          <Avatar name={userCurrent?.username} round={true} size={24} />
        )}
      </StyedAvatar>
    ) : tabName === title.toLowerCase() && iconActive ? (
      iconActive
    ) : (
      icon
    );

  let SidebarItemComponent =
    title.toLowerCase() === 'more' ? (
      <StyledSidebarItem title={title} onClick={() => setToggleMore(!toggleMore)}>
        <StyledSidebarLink to={to} $isActive={iconActive && toggleMore} $tabName={tabName}>
          {iconActive && toggleMore ? iconActive : icon}
          <StyledTitle $isDesktop={isDesktop} $tabName={tabName}>
            {title}
          </StyledTitle>
        </StyledSidebarLink>
        {iconActive && toggleMore && <SettingDialog />}
      </StyledSidebarItem>
    ) : (
      <StyledSidebarItem
        title={title}
        onClick={() => {
          handleClickTabItem(title.toLowerCase());
        }}>
        <StyledSidebarLink
          to={to.includes(':username') ? to.replace(':username', userCurrent?.username) : to}
          $isActive={iconActive && tabName === title.toLowerCase()}
          $isDesktop={isDesktop}
          $tabName={tabName}
          className={`${
            tabName === 'search' && iconActive && tabName === title.toLowerCase() ? 'active' : ''
          }`}>
          {prefixIcon}
          <StyledTitle $isDesktop={isDesktop} $tabName={tabName}>
            {title}
          </StyledTitle>
        </StyledSidebarLink>
      </StyledSidebarItem>
    );

  return SidebarItemComponent;
};

const StyledSidebarItem = styled.li`
  ${StyledDisplay.dFlex({ justify: 'start' })}

  width: 100%;
  position: relative;
`;

const StyledSidebarLink = styled(Link)`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '16px' })}
  ${(props) =>
    props.$isActive
      ? StyledTypo.heading5({ color: APP_COLORS.grayExtraLight })
      : StyledTypo.textBody({ color: APP_COLORS.grayExtraLight })};

  width: 100%;
  padding: 12px;
  margin: 2px 0;
  border-radius: 8px;
  transition: 0.3s;

  ${({ $isDesktop, $tabName }) =>
    $tabName === 'search'
      ? css`
          &.active {
            border: 1px solid ${APP_COLORS.white};
          }
        `
      : null};

  &:hover {
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.1);
  }

  &:active {
    color: ${APP_COLORS.grayLighter};
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.05);
  }

  svg {
    transition: 0.3s;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  &:active svg {
    transform: scale(0.95);
    color: ${APP_COLORS.grayLighter};
  }
`;

const StyedAvatar = styled.div`
  span {
    font-size: 12px;
  }
`;

const StyledTitle = styled.p`
  ${({ $isDesktop, $tabName }) =>
    !$isDesktop || $tabName === 'search'
      ? css`
          opacity: 0;
          visibility: hidden;
          transform: translateX(120%);
          position: absolute;
        `
      : css`
          opacity: 1;
          visibility: visible;
          transform: translateX(0%);
          position: relative;
        `};

  transition: 0.3s;
`;

export default SidebarItem;
