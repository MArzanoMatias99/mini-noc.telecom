# Mini-NOC Telecom — Node.js + React

Proyecto de aprendizaje fullstack para puesto Software Developer (Node / React).
Monitoreo simple de antenas: API en Node + Dashboard en React.

## Qué hace
- Backend Node.js expone `GET /api/estado` con JSON `{id, nombre, estado}`
- Frontend React muestra tarjeta verde/rojo con `useState` + `useEffect` + `fetch`
- Si se apaga Node, React queda en "Cargando desde Node..." (prueba cliente-servidor)

## Cómo correrlo
```bash
# 1. Prender backend (dejar abierto)
node mini1.js
# Abrir http://localhost:3001/api/estado -> ver JSON

# 2. Abrir frontend
# Doble click a mini3.html
# Para ver versión sin backend: mini2.html
```

## Archivos
- `mini1.js` — API REST mínima (http, req.url, JSON.stringify, CORS, listen 3001)
- `mini2.html` — Componente React estático (props, JSX, condicional color)
- `mini3.html` — React conectado a Node (fetch, res.json, setEquipo, loading)
- `server.js` — Versión extendida con /api/equipos y /api/equipos/caidos
- `dashboard.html` — Dashboard NOC con lista + filter

## Stack
Node.js (sin framework), React 18 via CDN + Babel, REST + JSON, JavaScript (map/filter/fetch)

## Autor
Matias Marzano — Estudiante Analista Programador, en formación Node/React/MongoDB.
