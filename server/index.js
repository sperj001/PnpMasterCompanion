const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const apiRouter = require("./router/api-Router.mjs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(pino);

app.use((req, resp, next) => {
  console.log(req.get('host'));
  (process.env.SHIP_API_STAGE === 'prod')
    ? resp.header('Access-Control-Allow-Origin: *')
    : resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
  resp.header('Access-Control-Expose-Headers: Access-Control-Allow-Origin');
  resp.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  resp.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  resp.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use("/api", apiRouter);


app.listen(5631, () =>
  console.log('Express server is running on localhost:3001')
);