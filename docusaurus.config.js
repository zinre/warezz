module.exports = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://piracy.now.sh",
  baseUrl: "/",
  onBrokenLinks: "log",
  favicon: "img/favicon.ico",
  organizationName: "xuac", // Usually your GitHub org/user name.
  projectName: "piracy", // Usually your repo name.
  themeConfig: {
    image: "img/ogimage.png",
    navbar: {
      title: "Piracy",
      logo: {
        alt: "Arrr!",
        src: "img/logo.svg",
        srcDark: "img/darklogo.svg",
      },
      items: [
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/xuac/piracy",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    algolia: {
      apiKey: "5470eae5ca52eb07867cedc3fdd33424",
      indexName: "maximousblk_piracy",
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    googleAnalytics: {
      trackingID: "UA-131672698-5",
      anonymizeIP: true,
    },
    gtag: {
      trackingID: "UA-131672698-5",
      anonymizeIP: true,
    },
    announcementBar: {
      id: "star", // Any value that will identify this message.
      content:
        '<b><a target="_blank" href="https://github.com/xuac/piracy#:~:text=star">PLEASE LEAVE A STAR ON GITHUB</a></b>',
      backgroundColor: "var(--ifm-background-surface-color)", // Defaults to `#fff`.
      textColor: "var(--ifm-color-primary)", // Defaults to `#000`.
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          homePageId: "home",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/xuac/piracy/edit/master/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: "It's free real estate! (CC0)",
          },
          editUrl: "https://github.com/xuac/piracy/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
