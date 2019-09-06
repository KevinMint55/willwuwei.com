module.exports = {
  head: {
    title: 'KevinMint - Done is better than perfect',
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
        content: 'KevinMint',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'KevinMint, Vue开发者, 前端技术开发, javascript技术',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Done is better than perfect',
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
    {
      src: '~/plugins/lang',
    },
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        autoprefixer: {},
        'postcss-px-to-viewport': {
          unitToConvert: 'px',
          viewportWidth: 750,
          propList: [],
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          exclude: [],
        },
      },
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter'),
          },
        });
      }
    },
  },
};
