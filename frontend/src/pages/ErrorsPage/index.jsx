import styled from 'styled-components';
import { NotFoundIcon } from '../../assets/svgs';
import { APP_COLORS } from '../../themes';
import { StyledDisplay, StyledTypo } from '../../styles/mixins';
import { SPLASH_DURATION } from '../../libs/constants';
import { useEffect, useState } from 'react';
import SplashScreen from '../../components/molecules/SplashScreen';

function ErrorsPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(true);

    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION);

    return () => clearTimeout(timeoutId);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : (
    <StyledErrorPage>
      <NotFoundIcon />
      <h1>Something went wrong</h1>
      <p>There{"'"}s an issue and the page could not be loaded.</p>
      <button onClick={() => window.location.reload()}>Reload page</button>
    </StyledErrorPage>
  );
}

const StyledErrorPage = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })};

  width: 100%;
  height: 100vh;
  color: ${APP_COLORS.black};
  background-color: ${APP_COLORS.white};

  h1 {
    ${StyledTypo.textBodyBig({ color: APP_COLORS.black })}

    padding-top: 16px;
    font-size: 22px;
  }

  p {
    ${StyledTypo.textThin({ color: APP_COLORS.grayDark })}

    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
  }

  button {
    ${StyledDisplay.dFlex({ justify: 'center' })}
    ${StyledTypo.heading6({})}

    margin-top: 16px;
    border-radius: 10px;
    height: 44px;
    padding: 0 16px;
    background-color: ${APP_COLORS.blue};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default ErrorsPage;
