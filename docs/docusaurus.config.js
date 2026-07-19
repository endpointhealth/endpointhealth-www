// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Endpoint Health Documentation',
  tagline: 'IRIS • Clinical Workflows • SMART-on-FHIR',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.endpointhealth.ca',
  baseUrl: '/docs/',

  organizationName: 'endpointhealth',
  projectName: 'endpointhealth-www',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',                 // ← Your actual docs folder
          routeBasePath: '/',           // /docs/intro works
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/endpointhealth/endpointhealth-www/tree/main/docs/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/endpointhealth/endpointhealth-www/tree/main/docs/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/endpointhealth-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Endpoint Health Docs',
      logo: {
        alt: 'Endpoint Health Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/docs/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/endpointhealth/endpointhealth-www',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',   // correct route
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Endpoint Health',
              href: 'https://www.endpointhealth.ca',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/endpointhealth/endpointhealth-www',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Endpoint Health.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
