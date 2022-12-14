// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WYL-site',
  tagline: 'Welcome to WYL-site!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://tva2.sinaimg.cn/large/008emdDEgy1h4ust853w4j30iw0iwglp.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WYL-site',
        logo: {
          alt: 'My Site Logo',
          src: 'https://tva2.sinaimg.cn/large/008emdDEgy1h4ust853w4j30iw0iwglp.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '??????',
          },
          {to: '/blog', label: '??????', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '??????',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '??????',
            items: [
              {
                label: '???????????????',
                href: 'https://www.baidu.com/',
              },
              {
                label: '?????????CSDN',
                href: 'https://www.csdn.net/',
              },
              {
                label: '???????????????B??????',
                href: 'https://www.bilibili.com/',
              },
            ],
          },
          {
            title: '??????',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: '???????????????????????????',
                href: 'http://www.touxiangwu.com/touxiang/84101.html',
              },
              {
                html:`<img src="https://tva2.sinaimg.cn/large/008emdDEgy1h4ust853w4j30iw0iwglp.jpg">`
              }
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
