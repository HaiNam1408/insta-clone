import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../../styles/mixins';
import { APP_COLORS } from '../../../themes';

const SettingItem = (props) => {
  const { title, icon, to, tab, handleChangeTab } = props;

  return (
    <StyledSettingLink
      to={to}
      onClick={() => handleChangeTab(title)}
      className={`${tab === title ? 'active' : ''}`}>
      {icon}
      <StyledTitle style={{ padding: 0 }}>{title}</StyledTitle>
    </StyledSettingLink>
  );
};

const StyledSettingLink = styled(Link)`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '16px' })}
  ${(props) =>
    props.$isActive
      ? StyledTypo.heading5({ color: APP_COLORS.grayExtraLight })
      : StyledTypo.textBody({ color: APP_COLORS.grayExtraLight })};

  width: 100%;
  padding: 18px 12px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover,
  &.active {
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.1);
  }

  &:active {
    color: ${APP_COLORS.grayLighter};
    background-color: rgba(${APP_COLORS.whiteRBG}, 0.05);
  }

  svg {
    transition: 0.3s;
    width: 50px;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  &:active svg {
    transform: scale(0.95);
    color: ${APP_COLORS.grayLighter};
  }
`;

const StyledTitle = styled.p`
  opacity: 1;
  visibility: visible;
  transform: translateX(0%);
  position: relative;
  transition: 0.3s;
`;

export default SettingItem;
