const server = require('./server.js');
const apiRouter = require('./api/api-router')

const PORT = process.env.PORT || 5000;

server.use("/", apiRouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});