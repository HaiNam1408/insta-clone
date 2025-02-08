import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCREEN_URL, SPLASH_DURATION } from '../../../libs/constants';
import { APP_COLORS, APP_SIZES } from '../../../themes';
import { StyledDisplay } from '../../../styles/mixins';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import styled from 'styled-components';
import { covertPixelToNumber } from '../../../libs/utils/covertPixelToNumber';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userAction';
import SplashScreen from '../../molecules/SplashScreen';
import { POST_ACTIONS } from '../../../redux/actions/postAction';

const StyledLayoutContainer = styled.div`
  ${StyledDisplay.dFlex({ align: 'start' })}

  background-color: ${APP_COLORS.black};
`;

const LayoutContainer = ({
  component: Component,
  isSidebar,
  isRedirect,
  isFooter,
  title,
  mode
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= covertPixelToNumber(APP_SIZES.xl)
  );
  const token = localStorage.getItem('token');
  const dataUser = JSON.parse(localStorage.getItem('data_user'));

  document.title = title + ' • Instagram';

  useEffect(() => {
    if ((!token || !dataUser) && isRedirect) return navigate(SCREEN_URL.LOGIN);
    if (token && dataUser && !isRedirect) return navigate(SCREEN_URL.HOME);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= covertPixelToNumber(APP_SIZES.xl));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userCurrent = JSON.parse(localStorage.getItem('data_user'));

    if (!token || !userCurrent || Object.keys(userCurrent).length <= 0) return;

    USER_ACTIONS.addUserCurrent(dispatch, userCurrent);
  }, []);

  return (
    <StyledLayoutContainer>
      {isSidebar && <Sidebar />}
      <div
        style={{
          width: '100%',
          marginLeft:
            isSidebar && isDesktop
              ? APP_SIZES.sidebarWidth
              : isSidebar && !isDesktop
                ? APP_SIZES.sidebarMobileWidth
                : 0
        }}>
        <Component />
        {isFooter && <Footer mode={mode} />}
      </div>
    </StyledLayoutContainer>
  );
};

export default LayoutContainer;
