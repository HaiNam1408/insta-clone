import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledDisplay, StyledPosition } from '../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../themes';
import { SCREEN_URL, SETTING_LIST } from '../../libs/constants';
import SettingItem from './SettingItem';
import EditProfilePage from '../EditProfilePage';

function SettingPage(props) {
  const [tab, setTab] = useState('Edit profile');

  const handleChangeTab = (title) => setTab(title);

  return (
    <StyledContainer>
      <StyledSidebar>
        <p style={{ fontSize: '20px', fontWeight: '700', padding: '0 50px' }}>Settings</p>
        <StyledItem>
          {SETTING_LIST.map((setting, index) => (
            <div key={index} style={{ width: '100%' }}>
              <p style={{ color: APP_COLORS.grayLight }}>{Object.keys(setting)[0]}</p>

              {setting[Object.keys(setting)[0]].map((item, index) => (
                <SettingItem
                  key={index}
                  to={item.to}
                  index={index}
                  title={item.title}
                  icon={item.icon}
                  tab={tab}
                  handleChangeTab={handleChangeTab}></SettingItem>
              ))}
            </div>
          ))}
        </StyledItem>
      </StyledSidebar>
      <EditProfilePage></EditProfilePage>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  ${StyledDisplay.dFlex({ justify: 'flex-start', align: 'flex-start' })}
`;

const StyledSidebar = styled.div`
  overflow-y: scroll;
  height: 100vh;
  background-color: #000;
  width: 360px;
  padding: 40px 0;
  border-right: 1px solid ${APP_COLORS.veryDark};

  ${StyledDisplay.dFlexCol({ justify: 'flex-start', align: 'flex-start', gap: '24px' })}
`;

const StyledItem = styled.div`
  width: 100%;
  padding: 0 25px;

  ${StyledDisplay.dFlexCol({ justify: 'flex-start', align: 'flex-start' })};

  p {
    width: 100%;
    padding: 16px 12px;
    text-align: start;
    color: 737373;
    font-size: 12px;
    font-weight: 600;
  }
`;
export default SettingPage;
