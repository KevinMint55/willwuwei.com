const isProdMode = Object.is(process.env.NODE_ENV, 'production');

export default {
  cdnUrl: isProdMode ? 'https://qiniu.kevinmint.com/' : 'https://qiniu.kevinmint.com/',
  baseURL: isProdMode ? 'https://api.kevinmint.com/' : 'http://10.1.6.74:7000/',
};
