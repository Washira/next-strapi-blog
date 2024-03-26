const menu = [
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'About',
    url: '/about',
    subdirectory: [
      {
        title: 'About Me',
        url: '/about/me',
      },
      {
        title: 'About Us',
        url: '/about/us',
      },
    ],
  },
  {
    title: 'Contact',
    url: '/contact',
  },
]

export default menu
