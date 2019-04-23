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
  css: [
    {
      src: '~assets/font/iconfont.css',
    },
    {
      src: '~assets/style/reset.scss',
      lang: 'scss',
    },
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    {
      src: '~/plugins/clickoutside',
    },
    {
      src: '~/plugins/visible',
    },
    {
      src: '~/plugins/$axios',
    },
    {
      src: '~/plugins/utils',
    },
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'autoprefixer': {},
        'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 750,
          propList:[],
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
