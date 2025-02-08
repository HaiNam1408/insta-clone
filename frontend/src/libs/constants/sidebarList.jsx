import {
  ActivityIcon,
  ChatOutlineIcon,
  ChatSolidIcon,
  CreateOutlineIcon,
  ExploreOutlineIcon,
  ExploreSolidIcon,
  HeartOutlineIcon,
  HeartSolidIcon,
  HomeOutlineIcon,
  HomeSolidIcon,
  MenuBoldIcon,
  MenuThinIcon,
  ReelOutlineIcon,
  ReelSolidIcon,
  ReportIcon,
  SaveIcon,
  SearchOutlineIcon,
  SearchSolidIcon,
  SettingIcon,
  ThemeIcon,
  ThreadIcon
} from '../../assets/svgs';
import AvatarDefault from '../../assets/images/avatar-default.jpg';
import { SCREEN_URL } from './screenUrl';

export const SIDEBAR_LIST = {
  top: [
    {
      title: 'Home',
      icon: <HomeOutlineIcon />,
      iconActive: <HomeSolidIcon />,
      to: SCREEN_URL.HOME,
      type: 'icon'
    },
    {
      title: 'Search',
      icon: <SearchOutlineIcon />,
      iconActive: <SearchSolidIcon />,
      to: '',
      type: 'icon'
    },
    {
      title: 'Explore',
      icon: <ExploreOutlineIcon />,
      iconActive: <ExploreSolidIcon />,
      to: SCREEN_URL.EXPLORE,
      type: 'icon'
    },
    {
      title: 'Reels',
      icon: <ReelOutlineIcon />,
      iconActive: <ReelSolidIcon />,
      to: SCREEN_URL.REELS,
      type: 'icon'
    },
    {
      title: 'Messages',
      icon: <ChatOutlineIcon />,
      iconActive: <ChatSolidIcon />,
      to: SCREEN_URL.INBOX,
      type: 'icon'
    },
    {
      title: 'Notifications',
      icon: <HeartOutlineIcon />,
      iconActive: <HeartSolidIcon />,
      to: '#',
      type: 'icon'
    },
    {
      title: 'Create',
      icon: <CreateOutlineIcon />,
      iconActive: null,
      to: '#',
      type: 'icon'
    },
    {
      title: 'Profile',
      icon: AvatarDefault,
      iconActive: null,
      to: SCREEN_URL.PROFILE,
      type: 'image'
    }
  ],
  bottom: [
    {
      title: 'Threads',
      icon: <ThreadIcon />,
      iconActive: null,
      to: SCREEN_URL.THREADS,
      type: 'icon'
    },
    {
      title: 'More',
      icon: <MenuThinIcon />,
      iconActive: <MenuBoldIcon />,
      to: '#',
      type: 'icon'
    }
  ]
};

export const SIDEBAR_MORE_LIST = [
  {
    title: 'Settings',
    to: SCREEN_URL.EDIT_PROFILE,
    icon: <SettingIcon />
  },
  {
    title: 'Your activity',
    to: SCREEN_URL.ACTIVITY,
    icon: <ActivityIcon />
  },
  {
    title: 'Saved',
    to: SCREEN_URL.SAVED,
    icon: <SaveIcon />
  },
  {
    title: 'Switch appearance',
    to: '#',
    icon: <ThemeIcon />
  },
  {
    title: 'Report a problem',
    to: '#',
    icon: <ReportIcon />
  },
  {
    title: '',
    to: '#',
    icon: null
  },
  {
    title: 'Switch accounts',
    to: '#',
    icon: null
  },
  {
    title: 'Log out',
    to: '#',
    icon: null
  }
];
