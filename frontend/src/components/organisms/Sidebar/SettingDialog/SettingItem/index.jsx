import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../../../styles/mixins';
import { APP_COLORS } from '../../../../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../../../../redux/actions/userAction';
import { SCREEN_URL } from '../../../../../libs/constants';

const SettingItem = (props) => {
  const { title, to, icon } = props;

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogout = (title) => {
    if (title.toLowerCase() === 'log out') {
      USER_ACTIONS.logout(dispatch);
      navigator(SCREEN_URL.LOGIN);
    }
  };

  const SettingItemComp = icon ? (
    <StyledSettingItem title={title} to={to} as={Link}>
      <StyledSettingItemIcon>{icon}</StyledSettingItemIcon>
      <StyledSettingItemTitle>{title}</StyledSettingItemTitle>
    </StyledSettingItem>
  ) : !title ? (
    <StyledSettingDivider />
  ) : (
    <StyledSettingItem title={title} onClick={() => handleLogout(title)} as="button">
      <StyledSettingItemTitle>{title}</StyledSettingItemTitle>
    </StyledSettingItem>
  );

  return SettingItemComp;
};

const StyledSettingItem = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '16px' })}
  ${StyledTypo.textBody({ color: APP_COLORS.grayExtraLight })};

  width: 100%;
  padding: 12px;
  margin: 2px 0;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.1);
  }

  &:active {
    color: ${APP_COLORS.grayLighter};
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.05);
  }
`;

const StyledSettingItemTitle = styled.p``;

const StyledSettingItemIcon = styled.span`
  ${StyledDisplay.dFlex({ justify: 'center' })}
`;

const StyledSettingDivider = styled.span`
  display: block;
  height: 5px;
  width: 107%;
  margin: 8px -8px;
  background-color: rgba(${APP_COLORS.whiteRBG}, 0.1);
`;

export default SettingItem;
