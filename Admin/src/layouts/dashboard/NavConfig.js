// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: getIcon('eva:pie-chart-2-fill'),
  // },
  {
    title: 'Banner',
    path: '/banner',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Product Image',
    path: '/productImage',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Category',
    path: '/category',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Testimonials',
    path: '/testimonials',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Trusted Partners',
    path: '/trustedPartners',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Contact Us',
    path: '/contactUs',
    icon: getIcon('eva:people-fill'),
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
