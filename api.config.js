const isProdMode = Object.is(process.env.NODE_ENV, 'production');

export default {
  cdnUrl: isProdMode ? 'https://qiniu.willwuwei.com/' : 'https://qiniu.willwuwei.com/',
  baseURL: isProdMode ? 'https://api.willwuwei.com/' : 'https://api.willwuwei.com/',
};
