const CONFIG = {
  DEBUG_MODE: true,
  EDITOR_MODE: false,
  EDITOR_URL: 'http://localhost:1488/',
  SCORE_URL: 'http://localhost:8888/score', // адрес, куда слать результат (может, лучше название придумать?)
  // SCORE_URL: 'http://134.209.226.168/score', // адрес, куда слать результат (может, лучше название придумать?)
  VK_AUTH_APP_ID: 6909305,
  VK_AUTH_DIV_ID: 'vk-auth',
  BACKGROUND_COLOR: '#ffffff',
  SLINGSHOT_PAN_DELAY: 1500,
  FLIGHT_ZOOM: 0.75,
  FLIGHT_ZOOM_DURATION: 2000,
  FLIGHT_ZOOM_EASING: 'Sine.easeInOut',
  DEFAULT_ZOOM: 0.55,
  MIN_ZOOM: 0.25,
  MAX_ZOOM: 1,
};

export default CONFIG;