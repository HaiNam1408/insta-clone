import { SCREEN_URL } from '../libs/constants';
import {
  ErrorsPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ForgotPasswordPage,
  ExplorePage,
  SettingPage,
  EditProfilePage,
  ReelsPage,
  PeoplePage,
  ChallengePage,
  ResetPasswordPage
} from '../pages';

export const layoutRoutes = [
  {
    path: SCREEN_URL.PEOPLE,
    component: PeoplePage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    mode: 'dark',
    title: 'People'
  },
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    mode: 'dark',
    title: 'Home'
  },
  {
    path: SCREEN_URL.PROFILE,
    component: ProfilePage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    mode: 'dark',
    title: 'Profile'
  },
  {
    path: SCREEN_URL.REELS,
    component: ReelsPage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    mode: 'dark',
    title: 'Reels'
  },
  {
    path: SCREEN_URL.EXPLORE,
    component: ExplorePage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    mode: 'dark',
    title: 'Explore'
  },
  {
    path: SCREEN_URL.LOGIN,
    component: LoginPage,
    isSidebar: false,
    isFooter: true,
    isRedirect: true,
    mode: 'light',
    title: 'Login'
  },
  {
    path: SCREEN_URL.REGISTER,
    component: RegisterPage,
    isSidebar: false,
    isFooter: true,
    isRedirect: true,
    mode: 'light',
    title: 'Register'
  },
  {
    path: SCREEN_URL.FORGOT_PASSWORD,
    component: ForgotPasswordPage,
    isSidebar: false,
    isFooter: true,
    isRedirect: false,
    mode: 'light',
    title: 'Forgot password'
  },
  {
    path: SCREEN_URL.EDIT_PROFILE,
    component: SettingPage,
    isSidebar: true,
    isFooter: false,
    isRedirect: true,
    title: 'Settings'
  },
  {
    path: SCREEN_URL.EDIT_PROFILE,
    component: EditProfilePage,
    isSidebar: false,
    isFooter: true,
    isRedirect: true,
    title: 'Edit profile'
  },
  {
    path: SCREEN_URL.CHALLENGE,
    component: ChallengePage,
    isSidebar: false,
    isFooter: false,
    isRedirect: false,
    title: 'Challenge'
  },
  {
    path: SCREEN_URL.RESET_PASSWORD,
    component: ResetPasswordPage,
    isSidebar: false,
    isFooter: false,
    isRedirect: false,
    title: 'Reset Password'
  },
  {
    path: SCREEN_URL.ERRORS,
    component: ErrorsPage,
    isSidebar: false,
    isFooter: false,
    isRedirect: false,
    mode: 'dark',
    title: '404 Not Found'
  },
  {
    path: SCREEN_URL.EXPLORE,
    component: ExplorePage,
    isSidebar: true,
    isFooter: true,
    isRedirect: true,
    title: '404 Not Found'
  }
];
