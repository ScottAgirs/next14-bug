interface MenuItem {
  action?: {
    href: string;
    label: string;
  };
  href: string;
  icon: any;
  isGuestOnly?: boolean;
  isLoggedInOnly?: boolean;
  isAdminOnly?: boolean;
  label: string;
}

interface MenuSection {
  icon: any;
  isAdminOnly?: boolean;
  isGuestOnly?: boolean;
  isLoggedInOnly?: boolean;
  items: MenuItem[];
  shouldSeparate: boolean;
  title: string;
}

export const SLIDEOUT_MENU_ITEMS: MenuSection[] = [
  {
    icon: null,
    title: 'Scan',
    // eslint-disable-next-line sort-keys
    items: [
      {
        href: '/scan',
        icon: 'barcode-read',
        label: 'Scan barcode',
      },
    ],
    shouldSeparate: true,
  },
  {
    icon: null,
    isGuestOnly: true,
    title: 'Join',
    // eslint-disable-next-line sort-keys
    items: [
      {
        href: '/login',
        icon: 'sign-in',
        label: 'Sign in',
      },
    ],
    shouldSeparate: true,
  },
  {
    icon: null,
    title: 'Main',
    // eslint-disable-next-line sort-keys
    items: [
      {
        href: '/',
        icon: 'home',
        label: 'Home',
      },
      {
        href: '/dashboard',
        icon: 'dashboard',
        isLoggedInOnly: true,
        label: 'Dashboard',
      },
      {
        href: '/blog',
        icon: 'blog',
        label: 'Blog',
      },
    ],
    shouldSeparate: true,
  },
  {
    icon: null,
    title: 'Contribute',
    // eslint-disable-next-line sort-keys
    items: [
      {
        href: '/to/add/product',
        icon: 'salad',
        label: 'Add a product',
      },
      {
        href: '/new-article',
        icon: 'blog',
        label: 'Write an Article',
      },
    ],
    shouldSeparate: true,
  },
  {
    icon: null,
    isAdminOnly: true,
    title: 'Admin',
    // eslint-disable-next-line sort-keys
    items: [
      {
        href: '/wi/admin',
        icon: 'dashboard',
        label: 'Admin Dashboard',
      },
    ],
    shouldSeparate: true,
  },
];

export const adminHref = '/admin';
export const authorDashboardHref = '/dashboard';
export const postHref = '/a';

export const addProductHref = '/to/add/product';
export const addBrandHref = '/to/add/brand';

export const revisionProductHref = '/to/revision/product';
export const revisionBrandHref = '/to/revision/brand';

export const editProductHref = '/to/edit/product';
export const editBrandHref = '/to/edit/brand';
export const editPostHref = '/edit/article';

export const registerCompanyHref = '/to/register/company';
