const isProdMode = Object.is(process.env.NODE_ENV, 'production');

module.exports = {
  //   cdnUrl: isProdMode ? 'https://cdn.kevinmint.com' : '',
  baseUrl: isProdMode ? 'https://www.kevinmint.com/api/' : 'http://localhost:1999/',
};
