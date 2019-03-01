# angry-recruits
game for prizyvanet.ru

### TODO
1) плотность (массу) снарядов, стен и противников подобрать
2) подсчёт очков
3) зум и скейл на разных девайсах. проверить работу на мобилах.
4) звук: фоновые, enity idle, в полёте, при смерти

### build
```bash
npm run dev
http-server -c-1
```

### level editor
1) `node server/editor.js`
2) change `EDITOR_MODE` to `true` in `src/config.ts`.