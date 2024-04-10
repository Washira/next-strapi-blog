const menu = [
  {
    title: 'blog',
    url: '/blog',
  },
  {
    title: 'news',
    url: '/news',
  },
  {
    title: 'about',
    url: '/about',
    subdirectory: [
      {
        title: 'profile',
        url: '/about/profile',
      },
      {
        title: 'hire',
        url: '/about/hire',
      },
    ],
  },
  {
    title: 'contact',
    url: '/contact',
  },
]

export default menu
