import { getPermalink, getAsset } from './utils/permalinks';

/**
 * Example links
 */
// 

export const headerData = {
  links: [
    {
      text: "O projektu",
      links: [
        {
          text: "Ekipa",
          href: getPermalink('/wip')
        },
        {
          text: "Prijava na beta testiranje",
          href: getPermalink('/wip')
        },
        {
          text: "Partnerji",
          href: getPermalink('/wip')
        },
        {
          text: "Kontakt",
          href: getPermalink('/wip')
        },
      ],
    },
    {
      text: "Povezave",
      links: [
        {
          text: "Social Impact Award",
          href: "https://slovenia.socialimpactaward.net/domov/"
        },
        {
          text: "Impact Hub Ljubljana",
          href: "https://ljubljana.impacthub.net/"
        }
      ],
    },
    {
      text: "Blog",
      href: getPermalink('/wip')
    },
    {
      text: "EkoBuddy trgovina",
      href: getPermalink('/wip')
    },
  ],
  actions: [{ text: 'GLASUJ', href: 'https://slovenia.socialimpactaward.net/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Tehnična podpora',
      links: [
        { text: 'Dokumentacija', href: getPermalink('/wip') },
        { text: 'Kontakt', href: getPermalink('/wip') },
      ],
    },
    {
      title: 'Podjetje',
      links: [
        { text: 'Blog', href: getPermalink('/wip') },
        { text: 'Careers', href: getPermalink('/wip') },
        { text: 'Trgovina', href: getPermalink('/wip') },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ecobuddy_app/', target: "#blank" },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} EcoBuddy.
  `,
};

// const DEFAULT_LINKS = [
  //   {
  //     text: 'Homes',
  //     links: [
  //       {
  //         text: 'SaaS',
  //         href: getPermalink('/homes/saas'),
  //       },
  //       {
  //         text: 'Startup',
  //         href: getPermalink('/homes/startup'),
  //       },
  //       {
  //         text: 'Mobile App',
  //         href: getPermalink('/homes/mobile-app'),
  //       },
  //       {
  //         text: 'Personal',
  //         href: getPermalink('/homes/personal'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Pages',
  //     links: [
  //       {
  //         text: 'Features (Anchor Link)',
  //         href: getPermalink('/#features'),
  //       },
  //       {
  //         text: 'Services',
  //         href: getPermalink('/services'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: getPermalink('/pricing'),
  //       },
  //       {
  //         text: 'About us',
  //         href: getPermalink('/about'),
  //       },
  //       {
  //         text: 'Contact',
  //         href: getPermalink('/contact'),
  //       },
  //       {
  //         text: 'Terms',
  //         href: getPermalink('/terms'),
  //       },
  //       {
  //         text: 'Privacy policy',
  //         href: getPermalink('/privacy'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Landing',
  //     links: [
  //       {
  //         text: 'Lead Generation',
  //         href: getPermalink('/landing/lead-generation'),
  //       },
  //       {
  //         text: 'Long-form Sales',
  //         href: getPermalink('/landing/sales'),
  //       },
  //       {
  //         text: 'Click-Through',
  //         href: getPermalink('/landing/click-through'),
  //       },
  //       {
  //         text: 'Product Details (or Services)',
  //         href: getPermalink('/landing/product'),
  //       },
  //       {
  //         text: 'Coming Soon or Pre-Launch',
  //         href: getPermalink('/landing/pre-launch'),
  //       },
  //       {
  //         text: 'Subscription',
  //         href: getPermalink('/landing/subscription'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Blog',
  //     links: [
  //       {
  //         text: 'Blog List',
  //         href: getBlogPermalink(),
  //       },
  //       {
  //         text: 'Article',
  //         href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
  //       },
  //       {
  //         text: 'Article (with MDX)',
  //         href: getPermalink('markdown-elements-demo-post', 'post'),
  //       },
  //       {
  //         text: 'Category Page',
  //         href: getPermalink('tutorials', 'category'),
  //       },
  //       {
  //         text: 'Tag Page',
  //         href: getPermalink('astro', 'tag'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Widgets',
  //     href: '#',
  //   },
  // ]