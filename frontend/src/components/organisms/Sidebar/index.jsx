import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { InstagramOutlineIcon, InstagramTextIcon } from '../../../assets/svgs';
import { APP_SIZES } from '../../../themes/appSizes';
import { covertPixelToNumber } from '../../../libs/utils/covertPixelToNumber';
import { Link, useLocation } from 'react-router-dom';
import { SCREEN_URL, SIDEBAR_LIST } from '../../../libs/constants';
import { StyledDisplay, StyledPosition } from '../../../styles/mixins';
import SidebarItem from './SidebarItem';
import { APP_COLORS } from '../../../themes';
import SearchBar from './SearchBar';
import CreatePost from '../../molecules/CreatePost';
import { useModal } from '../../../hooks/useModal';

function Sidebar(props) {
  const { pathname } = useLocation();

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= covertPixelToNumber(APP_SIZES.xl)
  );
  const { showModal, openModal, closeModal } = useModal();
  const [tabName, setTabName] = useState(pathname.split('/')[1] || 'home');
  const [prevTabName, setPrevTabName] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= covertPixelToNumber(APP_SIZES.xl));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickTabItem = (title) => {
    if (showSearch && title === 'search') {
      setTabName(prevTabName);
      setShowSearch(false);
      return;
    }

    if (!showSearch && title === 'search') {
      setPrevTabName(tabName);
      setShowSearch(true);
    }

    if (title !== 'search') setShowSearch(false);

    setTabName(title);

    if (title === 'create') {
      document.body.style.overflow = 'hidden';
      openModal();
    }
  };

  useEffect(() => {
    const clickHandler = () => {
      if (showSearch && tabName === 'search') {
        setTabName(prevTabName);
        setShowSearch(false);
      }
    };
    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [tabName, prevTabName, showSearch]);

  return (
    <StyledSidebar $isDesktop={isDesktop} $tabName={tabName} onClick={(e) => e.stopPropagation()}>
      <StyedLogo $isDesktop={isDesktop} $tabName={tabName} onClick={() => setTabName('home')}>
        <Link to={SCREEN_URL.HOME} className="link">
          <span className="icon">
            <InstagramOutlineIcon />
          </span>
          <span className="text-icon">
            <InstagramTextIcon />
          </span>
        </Link>
      </StyedLogo>

      <StyledBarList $first={true}>
        {SIDEBAR_LIST?.top?.map(({ title, icon, iconActive, to, type }, index) => (
          <SidebarItem
            key={title}
            to={to}
            index={index}
            type={type}
            title={title}
            icon={icon}
            iconActive={iconActive}
            isDesktop={isDesktop}
            tabName={tabName}
            handleClickTabItem={handleClickTabItem}
          />
        ))}
      </StyledBarList>

      <StyledBarList>
        {SIDEBAR_LIST?.bottom?.map(({ title, icon, iconActive, to, type }, index) => (
          <SidebarItem
            key={title}
            to={to}
            type={type}
            title={title}
            icon={icon}
            tabName={tabName}
            iconActive={iconActive}
            isDesktop={isDesktop}
          />
        ))}
      </StyledBarList>

      <SearchBar tabName={tabName} />
      <CreatePost showModal={showModal} closeModal={closeModal} />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  ${StyledPosition.position({ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 9999 })}
  ${StyledDisplay.dFlexCol({ align: 'start' })}

  width: ${({ $isDesktop, $tabName }) =>
    !$isDesktop || $tabName === 'search' ? APP_SIZES.sidebarMobileWidth : APP_SIZES.sidebarWidth};
  padding: 8px 12px;
  padding-bottom: 20px;
  border-right: 1px solid
    ${({ $isDesktop, $tabName }) =>
      !$isDesktop || $tabName === 'search' ? APP_COLORS.transparent : APP_COLORS.veryDark};
`;

const StyedLogo = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 2px;
  position: relative;

  .link {
    ${StyledDisplay.dFlex({ justify: 'start', align: 'center' })}

    padding: 12px;
    margin-bottom: 19px;
  }

  .icon {
    ${({ $isDesktop, $tabName }) =>
      !$isDesktop || $tabName === 'search'
        ? css`
            transform: scale(1);
          `
        : css`
            transform: scale(0);
            position: absolute;
          `};

    width: 24px;
    height: 24px;
    left: 7px;
    transition: 0.3s;
  }

  .text-icon {
    transition: 0.3s;
    ${({ $isDesktop, $tabName }) =>
      !$isDesktop || $tabName === 'search'
        ? css`
            opacity: 0;
            visibility: hidden;
            position: absolute;
          `
        : css`
            opacity: 1;
            visibility: visible;
          `};
  }

  ${({ $isDesktop, $tabName }) =>
    !$isDesktop || $tabName === 'search'
      ? css`
          .link {
            border-radius: 8px;
            transition: 0.2s;
          }

          &:hover .link {
            background-color: rgba(255, 255, 255, 0.1);
          }

          &:active .link {
            color: ${APP_COLORS.grayLighter};
            background-color: rgba(255, 255, 255, 0.05);
          }

          &:hover .icon {
            transform: scale(1.08);
          }

          &:active .icon {
            transform: scale(0.95);
            color: ${APP_COLORS.grayLighter};
          }
        `
      : null}
`;

const StyledBarList = styled.ul`
  ${StyledDisplay.dFlexCol({ justify: 'start', align: 'center' })}
  ${(props) =>
    props.$first
      ? css`
          flex: 1;
        `
      : null};

  width: 100%;
`;

export default Sidebar;
