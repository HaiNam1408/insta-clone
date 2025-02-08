import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { FaTimesCircle } from 'react-icons/fa';
import { StyledDisplay, StyledPosition, StyledTypo } from '../../../../styles/mixins';
import { APP_COLORS, APP_SIZES } from '../../../../themes';
import { usersData } from '../../../../data/usersData';
import SearchListItem from './SearchListItem';

const SearchBar = (props) => {
  const { tabName } = props;
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search.trim()) {
        setFilteredData([]);
      } else {
        const filteredResults = usersData.filter(({ username }) =>
          username.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredResults);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [search, usersData]);

  return (
    <StyledSearch $tabName={tabName}>
      <StyledSearchHeader>
        <StyledSearchHeading>Search</StyledSearchHeading>
        <StyledSearchInput>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="icon" onClick={() => setSearch('')}>
            <FaTimesCircle />
          </span>
        </StyledSearchInput>
      </StyledSearchHeader>

      <StyledSearchResult $isData={filteredData?.length > 0}>
        {filteredData?.length > 0 ? (
          <StyedSearchList>
            {filteredData?.map(({ id, username, avatar, description, isVerified }) => (
              <SearchListItem
                key={id}
                id={id}
                avatar={avatar}
                username={username}
                description={description}
                isVerified={isVerified}
              />
            ))}
          </StyedSearchList>
        ) : (
          <>
            <StyledSearchSubHeading>Recent</StyledSearchSubHeading>
            <StyledSearchEmpty>
              <p>No recent searches.</p>
            </StyledSearchEmpty>
          </>
        )}
      </StyledSearchResult>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  ${StyledPosition.position({
    position: 'fixed',
    top: 0,
    left: APP_SIZES.sidebarMobileWidth,
    bottom: 0,
    zIndex: 999
  })}

  width: ${APP_SIZES.searchWidth};
  background-color: ${APP_COLORS.black};
  transition: 0.3s;

  border-right: 1px solid
    ${({ $tabName }) => ($tabName === 'search' ? APP_COLORS.veryDark : APP_COLORS.transparent)};

  ${(props) =>
    props.$tabName.toLowerCase() === 'search'
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-150%);
        `};
`;

const StyledSearchHeader = styled.div`
  padding: 24px 16px;
`;

const StyledSearchHeading = styled.h2`
  ${StyledTypo.heading3({})}

  padding-bottom: 36px;
`;

const StyledSearchInput = styled.div`
  ${StyledDisplay.dFlex({})}
  background-color: ${APP_COLORS.veryDark};
  border-radius: 8px;

  height: 40px;
  position: relative;

  input {
    ${StyledTypo.textBody({})}
    display: block;
    width: 100%;
    height: 100%;
    padding: 3px 16px;
    background-color: transparent;
  }

  .icon {
    position: absolute;
    top: 12px;
    right: 10px;
    color: ${APP_COLORS.grayLightest};
    cursor: pointer;

    &:hover {
      color: ${APP_COLORS.grayLighter};
    }
  }
`;

const StyledSearchSubHeading = styled.p`
  ${StyledTypo.heading5({})}
`;

const StyledSearchResult = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'start', align: 'start' })}

  width: 100%;
  height: 100%;

  ${(props) =>
    props.$isData
      ? css`
          padding: 0;
          margin-bottom: 48px;
          overflow-y: scroll;
          height: 80%;
        `
      : css`
          padding: 24px 16px;
          border-top: 1px solid ${APP_COLORS.veryDark};
        `};
`;

const StyedSearchList = styled.div`
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'start', gap: '8px' })}
`;

const StyledSearchEmpty = styled.div`
  ${StyledTypo.heading6({ color: APP_COLORS.grayLight })}
  ${StyledDisplay.dFlexCol({ justify: 'center', align: 'center' })}

  flex: 1;
  width: 100%;
`;

export default SearchBar;
