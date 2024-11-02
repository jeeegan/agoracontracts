export const SITE = {
  title: "Agora Contracts",
  tagline: "Facilities management",
  description:
    "Agora Contracts offers facilities management across the west of Scotland",
  description_short:
    "Agora Contracts offers facilities management across the west of Scotland",
  url: "https://agoracontracts.com",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-GB",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};
