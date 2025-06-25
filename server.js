// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(cors()); // ✅ Enable CORS
server.use(middlewares);
server.use(router);

// Run on 0.0.0.0 so Render can access it
server.listen(4000, '0.0.0.0', () => {
  console.log('JSON Server is running on port 4000');
});
