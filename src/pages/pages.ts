export enum Pages {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
  Home = 'Home',
  Favorites = 'Favorites',
  Profile = 'Profile',
  ForbiddenAccess = 'ForbiddenAccess',
}

export type Page = {
  path: string
  url: ((params: Record<string, unknown>) => string) | (() => string)
  title: string
  validate?: (user: any) => boolean
}

export const pages: Record<Pages, Page> = {
  [Pages.SignIn]: {
    path: '/auth/sign-in',
    url: () => '/auth/sign-in',
    title: 'Sign in',
  },
  [Pages.SignUp]: {
    path: '/auth/sign-up',
    url: () => '/auth/sign-up',
    title: 'Sign up',
  },
  [Pages.ForgotPassword]: {
    path: '/auth/forgot-password',
    url: () => '/auth/forgot-password',
    title: 'Forgot password',
  },
  [Pages.Home]: {
    path: '/',
    url: () => '/',
    title: 'Passwords',
  },
  [Pages.Favorites]: {
    path: '/favorites',
    url: () => '/favorites',
    title: 'Favorites',
  },
  [Pages.ForbiddenAccess]: {
    path: '/forbidden-access',
    url: () => '/forbidden-access',
    title: 'Forbidden Access',
  },
  [Pages.Profile]: {
    path: '/profile',
    url: () => '/profile',
    title: 'Profile',
  },
}
