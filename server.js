// Servidor telecom simple - sin librerias externas
const http = require('http');

const equipos = [
  { id: 1, nombre: "Nodo Sur", estado: "OK", ping: 20 },
  { id: 2, nombre: "Nodo Norte", estado: "CAIDA", ping: 250 },
  { id: 3, nombre: "Repetidora Oeste", estado: "OK", ping: 45 },
];

const server = http.createServer((req, res) => {
  // Permitir que React pida datos (CORS simple)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/equipos' && req.method === 'GET') {
    res.end(JSON.stringify(equipos));
  } else if (req.url === '/api/equipos/caidos' && req.method === 'GET') {
    const caidos = equipos.filter(e => e.estado === 'CAIDA');
    res.end(JSON.stringify(caidos));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no encontrada. Probá /api/equipos' }));
  }
});

server.listen(3000, () => {
  console.log('Servidor telecom corriendo en http://localhost:3000/api/equipos');
});
