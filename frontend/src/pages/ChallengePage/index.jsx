import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { SCREEN_URL } from '../../libs/constants';
import { StyledDisplay } from '../../styles/mixins';
import { RE_CAPTCHA_SITE_KEY } from '../../configs/captchaConfig';
import { APP_COLORS, APP_SIZES } from '../../themes';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userAction';
import ReCAPTCHA from 'react-google-recaptcha';
import Loading from '../../components/atoms/Loading';
import ErrorsPage from '../ErrorsPage';
import MessageEmail from './MessageEmail';

const ChallengePage = () => {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((state) => state.users);
  const { challengeId } = useParams();

  const [shouldRenderErrorsPage, setShouldRenderErrorsPage] = useState(false);
  const [hasReCaptcha, setHasReCaptcha] = useState(false);
  const [sentEmail, setSentEmail] = useState('');
  const [hasSend, setHasSent] = useState(false);

  const handleChangeReCaptcha = (value) => {
    setHasReCaptcha(!!value);
  };

  const handleSubmit = () => {
    if (hasReCaptcha) {
      const getChallengeId = localStorage.getItem('challenge_key');
      const { email } = JSON.parse(atob(getChallengeId));
      USER_ACTIONS.forgotPassword(dispatch, email);
      setSentEmail(email);
    }
  };

  useEffect(() => {
    const getChallengeId = localStorage.getItem('challenge_key');

    if (getChallengeId !== challengeId) setShouldRenderErrorsPage(true);
  }, [challengeId]);

  useEffect(() => {
    if (message?.success && !isLoading) setHasSent(true);
  }, [message, isLoading]);

  return shouldRenderErrorsPage ? (
    <ErrorsPage />
  ) : (
    <StyledForgotPage>
      <StyledHeadingForgot>
        <div className="container">
          <i></i>
          <Link to={SCREEN_URL.LOGIN}>Login into another account</Link>
        </div>
      </StyledHeadingForgot>
      {hasSend ? (
        <MessageEmail email={sentEmail} />
      ) : (
        <StyledContainerForgot>
          <StyledFromForgot>
            <span
              style={{ fontWeight: '700', textAlign: 'center', color: 'black', fontSize: '24px' }}>
              Confirm it{"'"}s you to login
            </span>
            <span
              style={{
                fontWeight: '400',
                textAlign: 'center',
                color: APP_COLORS.black,
                fontSize: '15px'
              }}>
              We noticed unusual activity from your account so we{"'"}ve logged you out.
            </span>
            <span
              style={{
                fontWeight: '400',
                textAlign: 'center',
                color: APP_COLORS.black,
                fontSize: '15px'
              }}>
              Follow the next steps within 1 day so we can try to get you back into your account
              before it{"'"}s disabled.
            </span>
            <ReCAPTCHA sitekey={RE_CAPTCHA_SITE_KEY} onChange={handleChangeReCaptcha} />
            <span
              style={{
                fontWeight: '400',
                textAlign: 'justify',
                color: APP_COLORS.grayDark,
                fontSize: '10px',
                padding: '0 12px'
              }}>
              This helps us to combat harmful conduct, detect and prevent spam and maintain the
              integrity of our Products.
              <br /> <br />
              We’ve used Google{"'"}s reCAPTCHA Enterprise product to provide this security check.
              Your use of reCAPTCHA Enterprise is subject to Google’s Privacy Policy and Terms of
              Use.
              <br />
              <br /> reCAPTCHA Enterprise collects hardware and software information, such as device
              and application data, and sends it to Google to provide, maintain, and improve
              reCAPTCHA Enterprise and for general security purposes. This information is not used
              by Google for personalized advertising.
            </span>
          </StyledFromForgot>
          <StyledButtonNext $hasReCaptcha={hasReCaptcha}>
            <button onClick={handleSubmit} disabled={!message?.success && isLoading}>
              {!message?.success && isLoading ? <Loading size={18} /> : 'Next'}
            </button>
          </StyledButtonNext>
        </StyledContainerForgot>
      )}
    </StyledForgotPage>
  );
};

const StyledButtonNext = styled.div`
  padding: 16px;
  width: 100%;
  border-top: 1px solid #dbdbdb;

  button {
    ${StyledDisplay.dFlex({ justify: 'center' })}
    background-color: ${APP_COLORS.blue};
    color: ${APP_COLORS.white};
    border-radius: 10;
    height: 32px;
    font-weight: 600;
    width: 100%;
    opacity: ${(props) => (props.$hasReCaptcha ? 1 : 0.4)};
  }
`;

const StyledForgotPage = styled.div`
  min-height: 100vh;
  height: 100%;
  background: ${APP_COLORS.grayLightest};

  ${StyledDisplay.dFlexCol({ align: 'center', justify: 'flex-start' })}

  button {
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    height: 34px;
  }
`;

const StyledHeadingForgot = styled.div`
  border-bottom: 1px solid #dbdbdb;
  height: 60px;
  position: fixed;
  width: 100%;
  background-color: #fff;

  .container {
    ${StyledDisplay.dFlex({})}

    height: 100%;
    width: ${APP_SIZES.lg};
    margin: 0 auto;
  }

  i {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png);
    background-size: 103px;
    background-repeat: no-repeat;
    background-position: 0px -25px;
    display: inline-block;
    width: 103px;
    height: 36px;
  }

  a {
    color: ${APP_COLORS.grayDark};
  }
`;

const StyledContainerForgot = styled.div`
  max-width: 360px;
  border: 1px solid #dbdbdb;
  background: ${APP_COLORS.white};
  align-items: center;
  box-sizing: border-box;
  vertical-align: baseline;
  margin-top: 123px;

  ${StyledDisplay.dFlexCol({})}
`;

const StyledFromForgot = styled.div`
  width: 100%;
  padding: 16px;
  max-width: 360px;

  ${StyledDisplay.dFlexCol({ align: 'center', justify: 'flex-start', gap: '16px' })}

  i {
    width: 96px;
    height: 96px;
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-position: -130px 0;
  }
`;

const StyledInputForgot = styled.input`
  padding: 12px;
  width: 100%;
  height: 36px;
  color: black;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  flex: 1 0 auto;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
`;

export default ChallengePage;
