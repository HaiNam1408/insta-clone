import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SCREEN_URL, USER_TYPES } from '../../libs/constants';
import styled from 'styled-components';
import { APP_COLORS } from '../../themes';
import validateField from '../../libs/utils/validateField';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../styles/mixins';
import React, { useEffect, useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userAction';
import screenshotLogin from '../../assets/images/screenshot-login.png';
import ResetPasswordPage from '../ResetPasswordPage';
import Loading from '../../components/atoms/Loading';

const StyledPageLogin = styled.div`
  background-color: ${APP_COLORS.white};
  height: 100%;
  min-height: 100vh;
  ${StyledDisplay.dFlex({ justify: 'center', align: 'center', gap: '30px' })}
`;

const StyledImage = styled.div`
  width: 470px;
  height: 634.15px;
  background-image: url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk);
  background-size: 468.32px 634.15px;
  background-position: 0 0;
  background-repeat: no-repeat;
  position: relative;
  margin-top: 40px;

  img {
    position: absolute;
    top: 24px;
    right: 62px;
  }
`;

const StyledLogin = styled.div`
  ${StyledDisplay.dFlexCol({ gap: '10px', align: 'center' })}

  button {
    ${StyledDisplay.dFlex({ justify: 'center' })};

    background-color: #1877f2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    margin-top: 13px;
    height: 32px;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const StyledFromLogin = styled.div`
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  vertical-align: baseline;
  width: 350px;
  padding: 40px;
  ${StyledDisplay.dFlexCol({ justify: 'start' })};

  i {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0px -52px;
    display: inline-block;
    width: 175px;
    height: 51px;
    margin-bottom: 40px;
  }
`;

const StyledGetApp = styled.div`
  width: 350px;
  padding: 7px;
  ${StyledDisplay.dFlexCol({ align: 'center', gap: '16px' })};

  span {
    color: black;
  }

  div {
    ${StyledDisplay.dFlex({ justify: 'center', gap: '8px' })};

    img {
      width: auto;
      height: 40px;
    }
  }
`;

const StyledSignUp = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  vertical-align: baseline;
  width: 350px;
  padding: 25px;
  text-align: center;

  span {
    color: black;
  }

  a {
    color: #4cb5f9;
    font-weight: bold;
  }
`;
const StyledFromInput = styled.div`
  width: 100%;
  ${StyledDisplay.dFlexCol({ gap: '8px' })}
`;

const StyledLoginInput = styled.input`
  padding: 12px;
  width: 100%;
  height: 36px;
  color: black;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  flex: 1 0 auto;
  outline: none;
  overflow: hidden;
  padding: 9px 0 7px 8px;
`;

const StyleValidate = styled.div`
  position: relative;
  width: 100%;

  div {
    ${StyledPosition.position({ right: '3px', top: '6px' })}
    color: #bcbec0;
    font-size: 25px;
  }

  input[type='password']::-ms-reveal,
  input[type='password']::-ms-clear {
    display: none;
  }
`;

const StyledErrorMessage = styled.div`
  ${StyledTypo.heading7({ color: APP_COLORS.red })}

  width: 100%;
  padding: 8px 0;
  margin-bottom: 12px;
  background-color: rgba(255, 48, 64, 0.3);
  border: 1px solid ${APP_COLORS.red};
  text-align: center;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, message, userCurrent } = useSelector((state) => state.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (event, set) => {
    set(event.target.value);
  };

  useEffect(() => {
    if (isSubmit && message.success && !!userCurrent.token) navigate(SCREEN_URL.HOME);
  }, [message]);

  const handleSubmit = () => {
    const user = {
      email,
      password
    };

    USER_ACTIONS.login(dispatch, user);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: USER_TYPES.LOGIN, payload: {} });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <StyledPageLogin>
      <StyledImage>
        <img src={screenshotLogin} alt="image" />
      </StyledImage>
      <StyledLogin>
        <StyledFromLogin>
          <i></i>
          {message.success === false && <StyledErrorMessage>{message.message}</StyledErrorMessage>}
          <StyledFromInput>
            <StyledLoginInput
              type="text"
              placeholder="Mobile Number or Email"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            <StyleValidate>
              <StyledLoginInput
                type={showPassword ? 'test' : 'password'}
                placeholder="Password"
                onChange={(e) => handleInputChange(e, setPassword)}
              />

              {password.length > 0 ? (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#262626',
                    cursor: 'pointer',
                    top: '10px',
                    right: '  8px'
                  }}>
                  {showPassword ? 'Hide' : 'Show'}
                </div>
              ) : null}
            </StyleValidate>
          </StyledFromInput>

          <button
            onClick={handleSubmit}
            disabled={validateField(password, 'password') || validateField(email, 'emailOrPhone')}>
            {isLoading ? <Loading size={18} /> : 'Login'}
          </button>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '18px 0'
            }}>
            <div style={{ height: '1px', width: '100%', backgroundColor: '#dbdbdb' }}></div>
            <p style={{ color: 'black', padding: '0 10px' }}>OR</p>
            <div style={{ height: '1px', width: '100%', backgroundColor: '#dbdbdb' }}></div>
          </div>
          <a
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
            href="#">
            <FaFacebookSquare style={{ width: '20px', height: 'auto', color: '#00376b' }} />
            <span
              style={{ fontWeight: '600', marginLeft: '10px', color: '#00376b', fontSize: '14px' }}>
              Login with Facebook
            </span>
          </a>
          <NavLink to={SCREEN_URL.FORGOT_PASSWORD} style={{ fontSize: '12px', color: '#00376b' }}>
            Forgot password
          </NavLink>
        </StyledFromLogin>
        <StyledSignUp>
          <span>Don&apos;t have an account?&nbsp;</span>
          <Link to={SCREEN_URL.REGISTER}> Sign up </Link>
        </StyledSignUp>
        <StyledGetApp>
          <span>Get the app.</span>
          <div>
            <a href="#">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt="google play"
              />
            </a>
            <a href="#">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                style={{ marginLeft: '8px' }}
                alt="microsoft"
              />
            </a>
          </div>
        </StyledGetApp>
      </StyledLogin>
    </StyledPageLogin>
  );
};

export default LoginPage;
