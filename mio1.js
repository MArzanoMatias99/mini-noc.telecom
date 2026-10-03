
const http = require('http');

const misEquipos = [
  { id: 1, nombre: "Antena de mi casa", estado: "CAIDA", ping: 6767 },
  { id: 2, nombre: "Antena del kiosco", estado: "CAIDA", ping: 300 },
];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/mios') {
    res.end(JSON.stringify(misEquipos));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Probá /api/mios' }));
  }
});

server.listen(3002, () => {
  console.log('Mi API en http://localhost:3002/api/mios');
});