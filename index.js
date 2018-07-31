let express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  routes = require('./routes');

routes(app);

app.use(function(req, res) {
  res.status(404).send(req.originalUrl + ' not found')
});

app.listen(port);

module.exports = app;