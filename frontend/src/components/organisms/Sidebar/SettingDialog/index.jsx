import React from 'react';
import styled from 'styled-components';
import { StyledPosition } from '../../../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../../../themes';
import { SCREEN_URL, SIDEBAR_MORE_LIST } from '../../../../libs/constants';
import SettingItem from './SettingItem';
const SettingDialog = () => {
  return (
    <StyledSettingDialog>
      {SIDEBAR_MORE_LIST?.map(({ title, to, icon }) => (
        <SettingItem key={title} to={to} title={title} icon={icon} />
      ))}
    </StyledSettingDialog>
  );
};

const StyledSettingDialog = styled.div`
  ${StyledPosition.position({ position: 'absolute', bottom: '100%', zIndex: 9999 })}

  width:${APP_SIZES.settingWidth};
  padding: 8px;
  border-radius: 15px;
  background-color: ${APP_COLORS.veryDark};
`;

export default SettingDialog;
