const CONFIG = {
  DEBUG_MODE: true,
  EDITOR_MODE: false,
  EDITOR_URL: 'http://localhost:1488/',
  SCORE_URL: 'http://localhost:8888/score', // адрес, куда слать результат (может, лучше название придумать?)
  // SCORE_URL: 'http://134.209.226.168/score', // адрес, куда слать результат (может, лучше название придумать?)
  VK_AUTH_APP_ID: 6909305,
  VK_AUTH_DIV_ID: 'vk-auth',
  BACKGROUND_COLOR: '#ffffff',
  FLIGHT_ZOOM: 0.75,
  FLIGHT_ZOOM_DURATION: 1000,
  FLIGHT_ZOOM_EASING: 'Expo.easeInOut',
  DEFAULT_ZOOM: 0.35,
  MIN_ZOOM: 0.35,
  MAX_ZOOM: 1,
};

export default CONFIG;