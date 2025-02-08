import React from 'react';
import styled from 'styled-components';
import SuggestedImage from '../../assets/images/confirm-refresh-light.png';
import { StyledDisplay, StyledTypo } from '../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../themes';
import ButtonText from '../../components/atoms/ButtonText';
import { PostList } from '../../components/molecules';
import SuggestList from '../../components/molecules/SuggestList';
import SuggestAccount from '../../components/molecules/SuggestList/SuggestAccount';
import { SCREEN_URL } from '../../libs/constants';
import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <StyledHome>
      <StyledHomePost>
        <StyledHomePostWrapper>
          <StyledHomePostList>
            <StyledHomeHeading>Suggested Posts</StyledHomeHeading>
            <PostList />
          </StyledHomePostList>
          <StyledHomeBanner>
            <img src={SuggestedImage} alt="confirm-refresh-light" />
            <StyledHomeHeading>You{"'"}ve all caught up</StyledHomeHeading>
            <p>You{"'"}ve seen all new posts from the past 3 days.</p>
          </StyledHomeBanner>
        </StyledHomePostWrapper>
      </StyledHomePost>
      <StyledHomeSuggested>
        <SuggestAccount />
        <StyledSuggestTitle>
          <StyledText>Suggested for you</StyledText>
          <StyledButton to={SCREEN_URL.PEOPLE}>See All</StyledButton>
        </StyledSuggestTitle>
        <SuggestList />
        <StyledSuggestFooter>
          <StyledSuggestFooterTop>
            {footers.map(({ title, link }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </StyledSuggestFooterTop>

          <p className="from">© 2024 INSTAGRAM FROM META</p>
        </StyledSuggestFooter>
      </StyledHomeSuggested>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  ${StyledDisplay.dFlex({ justify: 'center', align: 'start' })}

  max-width: ${APP_SIZES.xl};
  width: 100%;
  margin: 0 auto;
  padding-top: 24px;
`;

const StyledHomeBanner = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center' })}

  padding: 32px 12px;
  border-bottom: 1px solid ${APP_COLORS.veryDark};

  a {
    margin-top: 20px;
    margin-bottom: 14px;
  }

  img {
    width: 96px;
    height: 96px;
    margin-bottom: 16px;
  }

  p {
    ${StyledTypo.textBody2({ color: APP_COLORS.grayLight })}

    padding-top: 8px;
  }
`;

const StyledHomeHeading = styled.h3`
  ${StyledTypo.textBodyBig({})}
`;

const StyledHomePost = styled.div`
  max-width: ${APP_SIZES.postWidth};
  width: 100%;
  margin: 0 auto;
`;

const StyledHomePostWrapper = styled.div`
  max-width: ${APP_SIZES.postWrapperWidth};
  width: 100%;
  margin: 0 auto;
`;

const StyledHomePostList = styled.div`
  ${StyledHomeHeading} {
    padding: 16px 0;
  }
`;

const StyledHomeSuggested = styled.div`
  max-width: ${APP_SIZES.suggestedWidth};
  width: 100%;
  margin: 0 auto;
`;

const StyledSuggestTitle = styled.div`
  ${StyledDisplay.dFlex({})}
  padding-top: 15px;
  width: 100%;
  font-weight: 600;
`;
const StyledText = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', gap: '10px' })}
  font-size: 14px;
  color: rgb(168, 168, 168);
  flex-grow: 3;
`;

const StyledButton = styled(Link)`
  ${StyledTypo.heading7({ color: APP_COLORS.white, fontWeight: 600 })}
  cursor: pointer;

  &:hover {
    color: ${APP_COLORS.grayLight};
  }
`;

const StyledSuggestFooterTop = styled.div`
  ${StyledDisplay.dFlex({ justify: 'start', wrap: 'wrap' })}

  cursor: pointer;

  a {
    ${StyledDisplay.dFlex({ justify: 'center' })}

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-of-type)::after {
      content: '';
      display: block;
      width: 2px;
      height: 2px;
      margin: 0 4px;
      border-radius: 99px;
      background-color: ${APP_COLORS.grayMedium};
    }
  }
`;

const StyledSuggestFooter = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'start', align: 'start' })}
  ${StyledTypo.textBody3({ color: APP_COLORS.grayDark })}

  margin-top: 32px;

  .from {
    text-align: left;
    margin-top: 16px;
  }
`;

const footers = [
  { title: 'About', link: 'https://about.instagram.com/' },
  { title: 'Help', link: 'https://help.instagram.com/' },
  { title: 'Press', link: 'https://about.instagram.com/blog/' },
  { title: 'API', link: 'https://developers.facebook.com/docs/instagram' },
  { title: 'Jobs', link: 'https://www.instagram.com/about/jobs/' },
  { title: 'Privacy', link: 'https://www.instagram.com/legal/privacy/' },
  { title: 'Terms', link: 'https://www.instagram.com/legal/terms/' },
  { title: 'Locations', link: 'https://www.instagram.com/explore/locations/' },
  { title: 'Language', link: 'https://www.instagram.com/language/preferences/' },
  {
    title: 'Meta Verified',
    link: 'https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer'
  }
];
export default HomePage;
