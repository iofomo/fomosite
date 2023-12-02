// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
const path = require('path');

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iofomo | Open-source organization',
  tagline: 'iofomo are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.iofomo.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iofomo', // Usually your GitHub org/user name.
  projectName: 'fomosite', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  //   localeConfigs: {
  //     en: { label: 'English' },
  //     zh: { label: '简体中文' },
  //   }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/iofomo/fomosite/blob/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/iofomo/fomosite/blob/main/website/',
        },
        theme: {
          customCss: [
            require.resolve("./src/custom-theme/css/fonts.css"),
            require.resolve("./src/custom-theme/css/custom.css"),
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/split-pane.css"),
          ],
        },
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        hideOnScroll: true,
        // title: 'iofomo',
        logo: {
          alt: 'iofomo Logo',
          src: 'img/logo-dark.png',
          href: '/',
          target: '_self',
        },
        items: [
          {
            label: 'Desktop',
            position: 'left',
            className: 'navbar__link--desktop',
            items: [
              {
                href: '/docs/desktop/wing/Introduce/',
                label: 'Wing',
              },
              {
                href: '/docs/desktop/cabin/Introduce/',
                label: 'Cabin',
              },
              {
                href: '/docs/desktop/tinyui/Introduce/',
                label: 'Tinyui',
              },
              {
                href: '/docs/desktop/mobtools/Introduce/',
                label: 'MobTools',
              },
            ]
          },
          {
            label: 'Mobile',
            position: 'left',
            className: 'navbar__link--mobile',
            items: [
              {
                href: '/docs/mobile/binderceptor/Introduce/',
                label: 'Binderceptor',
              },
              {
                href: '/docs/mobile/konker/Introduce/',
                label: 'Konker',
              },
              {
                href: '/docs/mobile/packit/Introduce/',
                label: 'Packit',
              },
            ]
          },
          {
            label: 'Services',
            position: 'left',
            className: 'navbar__link--services',
            items: [
              {
                href: '/docs/services/publishing/Introduce/',
                label: 'Publishing APP',
              },
              {
                href: '/docs/services/udid/Introduce/',
                label: 'Get UDID',
              },
              {
                href: '/docs/services/testbot/Introduce/',
                label: 'TestBot',
              },
            ]
          },
          {
            label: 'Blog',
            position: 'left',
            href: '/blog/',
            className: 'navbar__link--blog',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="separator" aria-hidden></div>',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsBefore: [],
          //   className: 'icon-link language navbar__item',
          // },
          {
            href: 'https://www.github.com/iofomo/fomosite',
            className: 'icon-link icon-link-mask icon-link-github',
            target: '_blank',
            position: 'right',
          },
          {
            href: 'https://www.gitee.com/iofomo/fomosite',
            className: 'icon-link icon-link-mask icon-link-gitee',
            target: '_blank',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: "iofomo",
            items: [
              {
                label: 'One leaf, one bodhi, one flower, one world.',
                target: '_blank',
                "to": "https://book.douban.com/review/5045014/"
              },
            ],
          },
          {
            title: '知识社区',
            items: [
              {
                label: 'CSDN',
                target: '_blank',
                to: 'https://blog.csdn.net/chendianbo?type=blog',
              },
              {
                label: '51CTO',
                target: '_blank',
                to: 'https://blog.51cto.com/u_16282197',
              },
              {
                label: '知乎',
                target: '_blank',
                to: 'https://www.zhihu.com/people/pang-bo-zi-75',
              },
            ],
          },
          {
            title: '技术社区',
            items: [
              {
                label: '看雪',
                target: '_blank',
                to: 'https://bbs.kanxue.com/user-home-909890.htm',
              },
              {
                label: '掘金',
                target: '_blank',
                to: 'https://juejin.cn/user/3424295591361992/posts',
              },
              {
                label: '简书',
                target: '_blank',
                to: 'https://www.jianshu.com/u/aaf9e93735b9',
              },
            ],
          },
          {
            title: '开源社区',
            items: [
              {
                label: 'Gitee',
                target: '_blank',
                to: 'https://www.gitee.com/iofomo',
              },
              {
                label: 'Github',
                target: '_blank',
                to: 'https://www.github.com/iofomo',
              },
              {
                label: 'Docusaurus',
                target: '_blank',
                to: 'https://www.docusaurus.io',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '关于我们',
                to: '/docs/about/Introduce',
              },
              {
                label: '隐私协议',
                to: '/docs/about/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iofomo Inc. Built with Docusaurus.<a style="text-decoration:none" href="http://beian.miit.gov.cn"><p style="color:darkgray">湘ICP备2023024246号-1</p></a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // theme: require("prism-react-renderer/themes/nightOwl"),
        // darkTheme: require("prism-react-renderer/themes/nightOwl"),
        // theme: { plain: {}, styles: [] },
        // @see: https://prismjs.com/#supported-languages
        additionalLanguages: [
          "jsx",
          "swift",
          "kotlin",
          "objectivec",
          "go",
          "cpp",
        ],
      },
    },

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    async function tailwindcss() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    'docusaurus-plugin-sass',
    // [
    //   'docusaurus-plugin-module-alias',
    //   {
    //     alias: {
    //       // 'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
    //       // react: path.resolve(__dirname, './node_modules/react'),
    //       // 'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    //       '@components': path.resolve(__dirname, './src/components'),
    //     },
    //   },
    // ],
  ],
};

export default config;
