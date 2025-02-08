import {
  BellIcon,
  BlockIcon,
  BoxChatIcon,
  ChipIcon,
  CircleStatIcon,
  CircleUserIcon,
  CrownIcon,
  DisLikeIcon,
  DownloadIcon,
  GroundIcon,
  HiddenIcon,
  HideIcon,
  LaptopIcon,
  LockIcon,
  MessageIcon,
  RotateIcon,
  TagIcon,
  ToolIcon,
  TranslateIcon,
  UnBellIcon,
  UnCircleUserIcon,
  UserIcon
} from '../../assets/svgs';
import { SCREEN_URL } from './screenUrl';

export const SETTING_LIST = [
  {
    'How you use Instagram': [
      {
        title: 'Edit profile',
        icon: <CircleUserIcon />,
        to: '#'
      },
      {
        title: 'Notifications',
        icon: <BellIcon />,
        to: '#'
      }
    ]
  },
  {
    'What you see': [
      {
        title: 'Muted accounts',
        icon: <UnBellIcon />,
        to: '#'
      },
      {
        title: 'Like and share counts',
        icon: <DisLikeIcon />,
        to: '#'
      },
      {
        title: 'Subscriptions',
        icon: <CrownIcon />,
        to: '#'
      }
    ]
  },
  {
    'Who can see your content': [
      {
        title: 'Account privacy',
        icon: <LockIcon />,
        to: '#'
      },
      {
        title: 'Close Friends',
        icon: <CircleStatIcon />,
        to: '#'
      },
      {
        title: 'Blocked',
        icon: <BlockIcon />,
        to: '#'
      },
      {
        title: 'Hide story and live',
        icon: <HideIcon />,
        to: '#'
      }
    ]
  },
  {
    'How others can interact with you': [
      {
        title: 'Message and story replies',
        icon: <MessageIcon />,
        to: '#'
      },
      {
        title: 'Tags and mentioins',
        icon: <TagIcon />,
        to: '#'
      },
      {
        title: 'Comments',
        icon: <BoxChatIcon />,
        to: '#'
      },
      {
        title: 'Sharing and remixes',
        icon: <RotateIcon />,
        to: '#'
      },
      {
        title: 'Restricted account',
        icon: <UnCircleUserIcon />,
        to: '#'
      },
      {
        title: 'Hidden Words',
        icon: <HiddenIcon />,
        to: '#'
      }
    ]
  },
  {
    'Your app and media': [
      {
        title: 'Archiving and downloading',
        icon: <DownloadIcon />,
        to: '#'
      },
      {
        title: 'Language',
        icon: <TranslateIcon />,
        to: '#'
      },
      {
        title: 'Website permissions',
        icon: <LaptopIcon />,
        to: '#'
      }
    ]
  },
  {
    'For families': [
      {
        title: 'Supervision',
        icon: <GroundIcon />,
        to: '#'
      }
    ]
  },
  {
    'For professionals': [
      {
        title: 'Account type and tools',
        icon: <ToolIcon />,
        to: '#'
      }
    ]
  },
  {
    'More info and support': [
      {
        title: 'Help',
        icon: <ChipIcon />,
        to: '#'
      },
      {
        title: 'Account Status',
        icon: <UserIcon />,
        to: '#'
      }
    ]
  }
];
