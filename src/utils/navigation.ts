// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Local Authority", url: "/local-authority" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Services",
    links: [
      { name: "Our services", url: "/services" },
      { name: "Local Authority", url: "/local-authority" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Contact us", url: "/contact" },
    ],
  },
];

export default {
  navBarLinks,
  footerLinks,
};
