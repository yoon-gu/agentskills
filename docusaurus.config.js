// @ts-check

const config = {
  title: "Agent Skills",
  tagline: "에이전트 역량 확장을 위한 오픈 포맷",
  favicon: "img/favicon.svg",

  url: "https://yoon-gu.github.io",
  baseUrl: "/agentskills/",

  organizationName: "yoon-gu",
  projectName: "agentskills",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/yoon-gu/agentskills/tree/main/",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Agent Skills",
        items: [
          {
            href: "https://github.com/yoon-gu/agentskills",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Agent Skills`,
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      prism: {
        additionalLanguages: ["bash", "json", "yaml", "powershell", "ruby", "python", "typescript"],
      },
    }),
};

module.exports = config;
