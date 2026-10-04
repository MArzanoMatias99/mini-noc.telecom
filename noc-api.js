
const http = require('http');

const misEquipos = [
  { id: 1, nombre: "Antena de mi casa", estado: "CAIDA", ping: 6767 },
  { id: 2, nombre: "Antena del kiosco", estado: "CAIDA", ping: 300 },
]; //Mi lista de datos(Puede ser traida de una base de datos)

const server = http.createServer((req, res) => { //req = pedido(request), res(respuesta)
  res.setHeader('Access-Control-Allow-Origin', '*'); // permiso para que React pida desde otro lado. Sin esto fetch se bloquea por CORS.
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/antenas') { //Si llaman a la API, Devolve el .JSON sin el stringify no manda texrto,manda objetos y rompe
    res.end(JSON.stringify(misEquipos));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Probá /api/antenas' }));
  }
});

server.listen(3002, () => {//Abre la puerta para que se le pueda llamar
  console.log('Mi API en http://localhost:3002/api/antenas'); // el console log es para que por consola me muestre que si se abrio
});
