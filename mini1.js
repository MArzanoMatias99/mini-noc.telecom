// PASO 1 - Mini NOC: solo 1 dato, nada más
const http = require('http');

// Nuestra "base de datos" es 1 solo equipo
const equipo = { id: 1, nombre: "Antena Prueba", estado: "OK" };

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Solo respondemos a esta puerta
  if (req.url === '/api/estado') {
    res.end(JSON.stringify(equipo));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Probá /api/estado' }));
  }
});

server.listen(3001, () => {
  console.log('Mini NOC en http://localhost:3001/api/estado');
});
