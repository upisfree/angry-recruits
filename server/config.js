const CONFIG = {
  HTTP_SERVER: {
    PORT: 8888
  },
  DATABASE: {
    ADDRESS: 'localhost',
    PORT: 27017,
    NAME: 'users'
  },
  GOOGLE: {
    APP_ID: '119429520778-i21ilgjpna01jb35hlg7modcrv71gsq7.apps.googleusercontent.com'
  },
  MAX_SCORE: 3000000 // настоящее значение — 915 800, подменить при подсчёте игроков
};

module.exports = CONFIG;