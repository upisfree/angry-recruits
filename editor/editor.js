const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', `*`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  let body = '';
  
  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function() {
    let json = JSON.parse(body);
    let generated = `// Generated at ${ new Date().toUTCString() }\nexport default ${ JSON.stringify(json.entities) };`;

    fs.writeFile(`./src/level/data/${ json.name }.data.ts`, generated, { flag: 'w' }, function(err) {
      if (err) {
        throw err;
      }

      let info = `wrote to src/level/data/${ json.name }.data.ts at ${ new Date().toUTCString() }`; 

      console.log(info);

      res.end(info);
    });
  });
});

server.listen(1488);

console.log('map editor saver started at http://localhost:1488');