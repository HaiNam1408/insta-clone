import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { APP_COLORS } from '../../../themes';

function Footer({ mode }) {
  return (
    <StyledFooterPage $mode={mode}>
      <StyledFooterLine>
        <Link href="#">Meta</Link>
        <Link href="#">About</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Helps</Link>
        <Link href="#">API</Link>
        <Link href="#">Privaci</Link>
        <Link href="#">Terms</Link>
        <Link href="#">Locations</Link>
        <Link href="#">Intagram lite</Link>
        <Link href="#">Threads</Link>
        <Link href="#">Contact Uploading & Non-Users Meta </Link>
        <Link href="#">Meta Verified</Link>
      </StyledFooterLine>
      <StyledFooterLine>
        <Link href="#">English &#709; </Link>
        <Link href="#">&#169; 2024 Instagram from Meta</Link>
      </StyledFooterLine>
    </StyledFooterPage>
  );
}
const StyledFooterPage = styled.div`
  font-size: 12px;
  color: ${APP_COLORS.grayDark};
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  background-color: ${(props) => (props.$mode === 'dark' ? APP_COLORS.black : APP_COLORS.white)};
`;
const StyledFooterLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export default Footer;
