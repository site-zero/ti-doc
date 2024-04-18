import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

import sidebar from './sidebar';

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      { rel: 'stylesheet', href: '/zmdi/css/material-design-iconic-font.css' },
    ],
    ['link', { rel: 'stylesheet', href: '/fontawesome/6.4.2-web/css/all.css' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/ti-logo2.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar,
  }),
});
