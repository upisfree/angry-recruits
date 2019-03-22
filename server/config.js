const CONFIG = {
  HTTP_SERVER: {
    PORT: 8888
  },
  DATABASE: {
    ADDRESS: 'localhost',
    PORT: 27017,
    NAME: 'users'
  },
  VK: {
    APP_ID: 6909305,
    SECRET_KEY: 'uGpD84KAY90CJRme59HA' // ну чё, пацаны, кладём в гит?)))
  },
  MAX_SCORE: Infinity /////////////////////// НЕ ЗАБЫТЬ ПОСЧИТАТЬ МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ ОЧКОВ
};

module.exports = CONFIG;