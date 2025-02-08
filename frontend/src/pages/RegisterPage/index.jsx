import { NavLink, useNavigate } from 'react-router-dom';
import { SCREEN_URL, USER_TYPES } from '../../libs/constants';
import styled from 'styled-components';
import { APP_COLORS } from '../../themes';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../styles/mixins';
import validateField from '../../libs/utils/validateField';
import React, { useEffect, useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userAction';
import Loading from '../../components/atoms/Loading';

const StyledPageRegister = styled.div`
  background-color: ${APP_COLORS.white};
  min-height: 100vh;
  height: 100%;
  padding: 12px;
  ${StyledDisplay.dFlexCol({ justify: 'flex-start', align: 'center' })}
`;

const StyledFromRegister = styled.div`
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  vertical-align: baseline;
  width: 350px;
  padding: 40px;
  margin-bottom: 10px;
  ${StyledDisplay.dFlexCol({ justify: 'start', gap: '18px' })};

  i {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0px -52px;
    display: inline-block;
    width: 175px;
    height: 51px;
  }

  p {
    color: #737373;
    font-weight: 600;
    text-align: center;
    font-size: 15px;
  }

  button {
    ${StyledDisplay.dFlex({ justify: 'center' })};

    background-color: #1877f2;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    height: 34px;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  span {
    color: #737373;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }
`;

const StyledFromInput = styled.div`
  width: 100%;
  ${StyledDisplay.dFlexCol({ gap: '8px' })}
`;

const StyledGetApp = styled.div`
  width: 350px;
  margin-top: 10px;
  padding: 7px;
  ${StyledDisplay.dFlexCol({ align: 'center' })};

  span {
    color: black;
    margin-bottom: 16px;
  }

  div {
    ${StyledDisplay.dFlex({ justify: 'center' })};

    img {
      width: auto;
      height: 40px;
    }
  }
`;

const StyledLogin = styled.div`
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  box-sizing: border-box;
  vertical-align: baseline;
  width: 350px;
  padding: 25px;
  ${StyledDisplay.dFlex({ justify: 'center' })};

  span {
    color: black;
  }

  a {
    color: #4cb5f9;
    font-weight: bold;
  }
`;

const StyledRegisterInput = styled.input`
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
  background-color: rgba(255, 48, 64, 0.3);
  border: 1px solid ${APP_COLORS.red};
  text-align: center;
`;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, message } = useSelector((state) => state.users);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit && message.success) navigate(SCREEN_URL.LOGIN);
  }, [message]);

  const handleInputChange = (event, set) => {
    set(event.target.value);
  };

  const handleSubmit = () => {
    const user = {
      username,
      email,
      fullName,
      password
    };

    USER_ACTIONS.register(dispatch, user);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: USER_TYPES.REGISTER, payload: {} });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <StyledPageRegister>
      <StyledFromRegister>
        <i></i>
        <p>Sign up to see photos and videos from your friends.</p>
        <button
          style={{
            backgroundColor: '#0095f6'
          }}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <FaFacebookSquare style={{ width: '20px', height: 'auto', color: 'white' }} />
            <span style={{ fontWeight: 'w500', marginLeft: '10px', color: 'white' }}>
              Login with Facebook
            </span>
          </div>
        </button>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <div style={{ height: '1px', width: '100%', backgroundColor: '#dbdbdb' }}></div>
          <p style={{ color: '#737373', padding: '0 10px', fontSize: '13px' }}>OR</p>
          <div style={{ height: '1px', width: '100%', backgroundColor: '#dbdbdb' }}></div>
        </div>
        {message.success === false && <StyledErrorMessage>{message.message}</StyledErrorMessage>}
        <StyledFromInput>
          <StyleValidate>
            <StyledRegisterInput
              type="text"
              placeholder="Mobile Number or Email"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            <div>
              {email.length === 0 ? (
                <div></div>
              ) : validateField(email, 'emailOrPhone') ? (
                <CiCircleRemove style={{ color: '#f2626f' }} />
              ) : (
                <CiCircleCheck />
              )}
            </div>
          </StyleValidate>
          <StyleValidate>
            <StyledRegisterInput
              type="text"
              placeholder="Full Name"
              onChange={(e) => handleInputChange(e, setFullName)}
            />
            <div>
              {fullName.length === 0 ? (
                <div></div>
              ) : validateField(fullName, 'username') ? (
                <CiCircleRemove style={{ color: '#f2626f' }} />
              ) : (
                <CiCircleCheck />
              )}
            </div>
          </StyleValidate>
          <StyleValidate>
            <StyledRegisterInput
              type="text"
              placeholder="Username"
              onChange={(e) => handleInputChange(e, setUsername)}
            />
            <div>
              {username.length === 0 ? (
                <div></div>
              ) : validateField(username, 'username') ? (
                <CiCircleRemove style={{ color: '#f2626f' }} />
              ) : (
                <CiCircleCheck />
              )}
            </div>
          </StyleValidate>
          <StyleValidate>
            <StyledRegisterInput
              type={showPassword ? 'test' : 'password'}
              placeholder="Password"
              onChange={(e) => handleInputChange(e, setPassword)}
            />
            <div style={{ right: '45px' }}>
              {password.length === 0 ? (
                <div></div>
              ) : validateField(password, 'password') ? (
                <CiCircleRemove style={{ color: '#f2626f' }} />
              ) : (
                <CiCircleCheck />
              )}
            </div>
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

        <span>
          People who use our service may have uploaded your contact information to Instagram.{' '}
          <span style={{ color: '#00376b' }}>Learn More</span>
        </span>

        <span>
          By signing up, you agree to our{' '}
          <span style={{ color: '#00376b' }}>
            Terms , Privacy Policy <span>and</span> Cookies Policy .
          </span>
        </span>
        <button
          onClick={handleSubmit}
          disabled={
            validateField(password, 'password') ||
            validateField(username, 'username') ||
            validateField(email, 'emailOrPhone') ||
            validateField(fullName, 'username')
          }>
          {isLoading ? <Loading size={18} /> : 'Sign up'}
        </button>
      </StyledFromRegister>
      <StyledLogin>
        <span>Have an account?&nbsp;</span>
        <NavLink to={SCREEN_URL.LOGIN}> Log in </NavLink>
      </StyledLogin>
      <StyledGetApp>
        <span>Get the app.</span>
        <div>
          <a href="#">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
          </a>
          <a href="#">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              style={{ marginLeft: '8px' }}
              alt=""
            />
          </a>
        </div>
      </StyledGetApp>
    </StyledPageRegister>
  );
};

export default RegisterPage;
