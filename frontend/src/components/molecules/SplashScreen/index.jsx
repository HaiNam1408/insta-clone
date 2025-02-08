import React from 'react';
import styled from 'styled-components';
import logoInstagram from '../../../assets/images/logo-instagram.png';
import logoMeta from '../../../assets/images/from-meta.png';
import { APP_COLORS } from '../../../themes';
import { StyledDisplay } from '../../../styles/mixins';

const SplashScreen = () => {
  return (
    <StyledSplashScreen>
      <StyledLogoInstagram>
        <img src={logoInstagram} alt="" className="instagram" />
      </StyledLogoInstagram>
      <img src={logoMeta} alt="" className="meta" />
    </StyledSplashScreen>
  );
};

const StyledSplashScreen = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })}

  padding: 48px 0;
  background-color: ${APP_COLORS.white};
  width: 100%;
  height: 100vh;

  .meta {
    width: 62px;
  }
`;

const StyledLogoInstagram = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })}

  flex: 1;

  .instagram {
    width: 85px;
  }
`;

export default SplashScreen;
