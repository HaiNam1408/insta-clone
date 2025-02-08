import React from 'react';
import styled from 'styled-components';
import { APP_COLORS, APP_SIZES } from '../../../themes';
import { StyledDisplay, StyledTypo } from '../../../styles/mixins';
import { hideEmail } from '../../../libs/utils/hideEmail';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../../libs/constants';

const MessageEmail = ({ email }) => {
  return (
    <StyledMessageEmail>
      <StyledMessageEmailContent>
        <h1>Email sent</h1>
        <p>
          We sent an email to
          <span style={{ color: APP_COLORS.black, fontWeight: 500, padding: '0 4px' }}>
            {hideEmail(email)}
          </span>
          with a link to get back into your account.
        </p>
        <Link to={SCREEN_URL.LOGIN}>OK</Link>
      </StyledMessageEmailContent>
    </StyledMessageEmail>
  );
};

const StyledMessageEmail = styled.div`
  min-height: 100vh;
  height: 100%;
  background: ${APP_COLORS.grayLightest};

  ${StyledDisplay.dFlexCol({ align: 'center', justify: 'center' })}

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

const StyledMessageEmailContent = styled.div`
  border: 1px solid #dbdbdb;
  background-color: ${APP_COLORS.white};
  color: ${APP_COLORS.black};
  text-align: center;
  width: 390px;
  padding: 32px;

  h1 {
    font-weight: 600;
    font-size: 16px;
  }

  p {
    ${StyledTypo.textBody2({ color: APP_COLORS.grayDark })}
    font-size: 14px;
    padding: 16px 0;
  }

  a {
    font-weight: 600;
    color: ${APP_COLORS.blue};

    &:hover {
      opacity: 0.3;
    }
  }
`;

export default MessageEmail;
