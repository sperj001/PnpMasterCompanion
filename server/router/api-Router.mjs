const express = require('express');

const apiRouter = express.Router();


apiRouter.get('/greeting/:name', (req, res) => {
    const name = req.params.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
  
apiRouter.get('/greeting', (req, res) => {
    const name = 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});



module.exports = apiRouter;