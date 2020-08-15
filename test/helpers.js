const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Rose Zhou',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Rose Zhou',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Rose Zhou',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Rose Zhou',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Rose Zhou',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
