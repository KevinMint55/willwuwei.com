const isProdMode = Object.is(process.env.NODE_ENV, 'production');

export default {
  //   cdnUrl: isProdMode ? 'https://cdn.kevinmint.com' : '',
  baseURL: isProdMode ? 'https://www.kevinmint.com/api/' : 'http://localhost:7000/',
};
