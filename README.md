# angry-recruits
game for prizyvanet.ru

### TODO
1) плотность (массу) снарядов, стен и противников подобрать
2) подсчёт очков
3) зум и скейл на разных девайсах. проверить работу на мобилах.
4) звук: фоновые, enity idle, в полёте, при смерти
5) зум и скроллинг на мобилах! (http://www.html5gamedevs.com/topic/10701-camera-zoom-to-mouse-pointer/?tab=comments#comment-63013) (http://www.html5gamedevs.com/topic/8762-zoom-outin-camera-as-seen-in-angry-birds/)

### build
```bash
npm run dev
http-server -c-1
```

### level editor
1) `node server/editor.js`
2) change `EDITOR_MODE` to `true` in `src/config.ts`.