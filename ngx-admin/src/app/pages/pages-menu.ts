import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'FUNCTION',
    group: true,
  },
  {
    title: 'Settlement Management',
    icon: 'layout-outline',
    children: [
      {
        title: 'Settlement Detail',
        // link: '/pages/layout/infinite-list',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Settlement statement',
        link: '/pages/layout/list',
      },
      {
        title: 'Settlement Process',
        link: '',
      },
      // {
      //   title: 'Accordion',
      //   link: '/pages/layout/accordion',
      // },
      // {
      //   title: 'Tabs',
      //   pathMatch: 'prefix',
      //   link: '/pages/layout/tabs',
      // },
    ],
  },
  // {
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  {
    title: 'Transaction Management',
    icon: 'grid-outline',
    children: [
      {
        title: 'Order Inquiry',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Collection Code',
        link: '/pages/tables/tree-grid',
      },
      {
        title: 'Refund Inquiry',
        // link: '/pages/miscellaneous/404',
        link: '',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        // link: '/pages/extra-components/calendar',
        link: '',
      },
      // {
      //   title: 'Progress Bar',
      //   link: '/pages/extra-components/progress-bar',
      // },
      // {
      //   title: 'Spinner',
      //   link: '/pages/extra-components/spinner',
      // },
      // {
      //   title: 'Alert',
      //   link: '/pages/extra-components/alert',
      // },
      // {
      //   title: 'Calendar Kit',
      //   link: '/pages/extra-components/calendar-kit',
      // },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Account Management',
    icon: 'map-outline',
    children: [
      {
        title: 'Account Balance',
        // link: '/pages/maps/gmaps',
        link: '',
      },
      {
        title: 'Income and Expenditure',
        // link: '/pages/maps/leaflet',
        link: '',
      },
      {
        title: 'Withdrawal',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Exception Handling',
        // link: '/pages/maps/bubble',
        link: '',
      },
    ],
  },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      // {
      //   title: 'Login',
      //   link: '/auth/login',
      // },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
