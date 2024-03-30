const menu = [
  {
    title: 'blog',
    url: '/blog',
  },
  {
    title: 'about',
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
    title: 'contact',
    url: '/contact',
  },
]

export default menu
