module.exports = {
  title: 'Without Agent',
  base: '/',
  dest: 'public',
  description: 'Do without agent',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Ganesh Patil',
      avatar: '/assets/img/sal.jpg',
      link: 'http://linkedin.com/in/ganeshpatil0101',
      linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'facebook',
          link: 'https://www.facebook.com/ganeshpatil1010',
        },
        {
          type: 'github',
          link: 'https://github.com/ganeshpatil0101/',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: 'http://linkedin.com/in/ganeshpatil0101',
        },
        {
          type: 'mail',
          link: 'mailto:ganeshpatil0101@gmail.com',
        },
        {
          type: 'phone',
          link: '+91-9325137778',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/ganeshpatil0101/',
        },
        {
          type: 'web',
          link: 'http://ganeshpatil0101.github.io/',
        }
      ],
      copyright: [
        {
          text: 'Copyrites 2021.',
          link: '',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/ganeshpatil0101/doityourself'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://github.com/ganeshpatil0101/doityourself'
    },
    feed: {
      canonical_base: 'https://github.com/ganeshpatil0101/doityourself',
    },
    smoothScroll: true
  },
}
