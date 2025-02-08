import { NavLink, useNavigate } from 'react-router-dom';
import { MESSAGES, SCREEN_URL } from '../../libs/constants';
import styled from 'styled-components';
import { StyledDisplay, StyledPosition } from '../../styles/mixins';
import validateField from '../../libs/utils/validateField';
import React, { useEffect, useState } from 'react';
import AlertMessage from '../../components/atoms/AlertMessage';
import { APP_COLORS } from '../../themes';
import { v4 as uuidv4 } from 'uuid';

const ForgotPasswordPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    setValidate(validateField(email, 'emailOrPhone') ? true : false);

    const jsonString = JSON.stringify({ email, uid: uuidv4() });

    const challengeId = btoa(jsonString);
    localStorage.setItem('challenge_key', challengeId);
    if (!validateField(email, 'emailOrPhone'))
      navigate(SCREEN_URL.CHALLENGE.replace(':challengeId', challengeId));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => setValidate(false), 1000);

    return () => clearTimeout(timeoutId);
  }, [validate]);

  return (
    <StyledForgotPage>
      <StyledHeadingForgot>
        <i></i>
      </StyledHeadingForgot>
      <StyledContainerForgot>
        <StyledFromForgot>
          <i></i>
          <span
            style={{ fontWeight: '600', textAlign: 'center', color: 'black', fontSize: '16px' }}>
            Trouble logging in?
          </span>
          <span
            style={{ fontWeight: '500', textAlign: 'center', color: '#737373', fontSize: '14px' }}>
            Enter your email, phone, or username and we&apos;ll send you a link to get back into
            your account.
          </span>
          <StyledInputForgot
            type="text"
            placeholder="Email, Phone or Username"
            onChange={(e) => handleInputChange(e)}
          />
          <button style={{ backgroundColor: APP_COLORS.blue }} onClick={handleSubmit}>
            Send login link
          </button>
          <a
            href="https://help.instagram.com/374546259294234"
            style={{ color: '#00376b', fontSize: '12px' }}>
            Can&apos;t reset your password?
          </a>
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
          <NavLink
            to={SCREEN_URL.REGISTER}
            style={{
              fontSize: '14px',
              color: '#262626',
              fontWeight: '600'
            }}>
            Create new account
          </NavLink>
        </StyledFromForgot>
        <button
          style={{
            backgroundColor: '#fafafa',
            color: '#000',
            height: '44px',
            fontWeight: '600',
            border: '1px solid #dbdbdb',
            borderRadius: '0'
          }}>
          <NavLink to={SCREEN_URL.LOGIN}>Back to Login</NavLink>
        </button>
      </StyledContainerForgot>

      <AlertMessage message={MESSAGES.VERIFY_EMAIL_FAILED} show={validate} />
    </StyledForgotPage>
  );
};

const StyledForgotPage = styled.div`
  /* min-height: 96vh;
  height: 100%; */
  background: #fff;
  padding-bottom: 32px;
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
  width: 100%;
  position: fixed;
  background-color: #fff;

  i {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png);
    background-size: 103px;
    background-repeat: no-repeat;
    background-position: 0px -25px;
    display: inline-block;
    width: 103px;
    height: 36px;
    margin-bottom: 40px;
    ${StyledPosition.position({ left: '25%', top: '12px' })}
  }
`;

const StyledContainerForgot = styled.div`
  width: 388px;
  height: 535px;
  border: 1px solid #dbdbdb;
  align-items: center;
  box-sizing: border-box;
  vertical-align: baseline;
  margin-top: 123px;

  ${StyledDisplay.dFlexCol({})}
`;

const StyledFromForgot = styled.div`
  width: 100%;
  padding: 24px 44px;

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

export default ForgotPasswordPage;
