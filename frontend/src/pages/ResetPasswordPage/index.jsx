import { Link, useNavigate, useParams } from 'react-router-dom';
import { SCREEN_URL } from '../../libs/constants';
import styled from 'styled-components';
import { StyledDisplay, StyledTypo } from '../../styles/mixins';
import React, { useEffect, useState } from 'react';
import ErrorsPage from '../ErrorsPage';
import { APP_COLORS, APP_SIZES } from '../../themes';
import Loading from '../../components/atoms/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userAction';
import validateField from '../../libs/utils/validateField';
import { getCookie } from '../../libs/utils/getCookie';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((state) => state.users);
  const { resetToken } = useParams();
  const navigation = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({ password: '', confirmPassword: '' });

  const handleChangePassword = (e) => {
    const value = e.target.value;

    setPassword(value);
    setError({ ...error, password: validateField(value, 'password') });
  };

  const handleChangeConfirmPassword = (e) => {
    const value = e.target.value;

    setConfirmPassword(value);
    setError({ ...error, confirmPassword: value === password ? '' : "Passwords don't match." });
  };

  const handleSubmit = () => {
    USER_ACTIONS.resetPassword(dispatch, { password, token: resetToken });
  };

  const isValidForm = () => {
    return (
      error.password === '' &&
      error.confirmPassword === '' &&
      password !== '' &&
      confirmPassword !== ''
    );
  };

  useEffect(() => {
    if (message?.success && !isLoading) navigation(SCREEN_URL.LOGIN);
  }, [message, isLoading]);

  return getCookie('resetToken') !== resetToken ? (
    <ErrorsPage />
  ) : (
    <StyledResetPassword>
      <StyledHeadingReset>
        <div className="container">
          <i></i>
          <div className="group-btn">
            <Link to={SCREEN_URL.LOGIN} className="login">
              Log In
            </Link>
            <Link to={SCREEN_URL.REGISTER} className="register">
              Sign up
            </Link>
          </div>
        </div>
      </StyledHeadingReset>
      <StyledContainerReset>
        <StyledFromReset>
          <h3>Create A Strong Password</h3>
          <p>
            Your password must be at least 6 characters and should include a combination of numbers,
            letters and special characters (!$@%).
          </p>

          <StyledInputGroup>
            <small>{!!error.password && password ? error.password : ''}</small>
            <StyledInputReset
              type="password"
              placeholder="New password"
              name="password"
              onChange={handleChangePassword}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <small>{!!error.confirmPassword && confirmPassword ? error.confirmPassword : ''}</small>
            <StyledInputReset
              type="password"
              placeholder="New password, again"
              name="confirmPassword"
              onChange={handleChangeConfirmPassword}
            />
          </StyledInputGroup>
        </StyledFromReset>
        <StyledButtonNext>
          <button
            disabled={!isValidForm() || (!message?.success && isLoading)}
            onClick={handleSubmit}>
            {!message?.success && isLoading ? <Loading size={18} /> : 'Reset Password'}
          </button>
        </StyledButtonNext>
      </StyledContainerReset>
    </StyledResetPassword>
  );
};

const StyledInputGroup = styled.div`
  width: 100%;
  text-align: left;

  small {
    font-size: 10px;
    height: 16px;
    display: block;
    color: ${APP_COLORS.grayLight};
  }
`;

const StyledButtonNext = styled.div`
  margin-top: 32px;
  width: 100%;

  button {
    ${StyledDisplay.dFlex({ justify: 'center' })}
    background-color: ${APP_COLORS.blue};
    color: ${APP_COLORS.white};
    border-radius: 5px;
    height: 48px;
    font-weight: 600;
    width: 100%;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

const StyledResetPassword = styled.div`
  min-height: 100vh;
  height: 100%;

  background: ${APP_COLORS.grayLightest};

  ${StyledDisplay.dFlexCol({ align: 'center', justify: 'flex-start' })}
`;

const StyledHeadingReset = styled.div`
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

  .group-btn {
    ${StyledDisplay.dFlex({ gap: '8px' })}
  }

  .login,
  .register {
    padding: 6px 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
  }

  .login {
    color: ${APP_COLORS.white};
    background-color: ${APP_COLORS.blue};
  }

  .register {
    color: ${APP_COLORS.blue};
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

const StyledContainerReset = styled.div`
  max-width: 360px;
  border: 1px solid #dbdbdb;
  background: ${APP_COLORS.white};
  align-items: center;
  box-sizing: border-box;
  vertical-align: baseline;
  margin-top: 123px;
  padding: 48px;

  ${StyledDisplay.dFlexCol({})}
`;

const StyledFromReset = styled.div`
  width: 100%;
  max-width: 360px;
  color: ${APP_COLORS.black};
  text-align: center;

  ${StyledDisplay.dFlexCol({ align: 'center', justify: 'flex-start', gap: '16px' })}

  i {
    width: 96px;
    height: 96px;
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-position: -130px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
  }

  p {
    ${StyledTypo.textThin({ color: APP_COLORS.grayDark })}
    font-size: 14px;
    padding-bottom: 20px;
  }
`;

const StyledInputReset = styled.input`
  padding: 16px 12px;
  width: 100%;
  color: black;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  flex: 1 0 auto;
  outline: none;
  overflow: hidden;
`;

export default ResetPasswordPage;
