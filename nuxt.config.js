module.exports = {
  head: {
    title: 'KevinMintBlog',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'KevinMintBlog',
      },
    ],
    link: [
      {
        rel: 'favicon',
        href: '/favicon.ico',
      },
    ],
  },
  loading: {
    color: '#2d8cf0',
  },
  cache: {
    max: 1000,
    maxAge: 900000,
  },
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'autoprefixer': {},
        'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 750,
          propList:['*', '!font-size'],
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          exclude: [],
        },
      },
    },
  },
};