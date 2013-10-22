var
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  thrift = require('thrift'),
  bbm = require('./gen-nodejs/userevent_types');

server.listen(8081);

// create a directory for serving static content - may be useful later
app.use(express.static(__dirname));

/**
 * Display something by default.
 */
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/thrift.html');
});

/**
 * Redirect to the client (smartphone) URL for a given server ID.
 * This is basically just a URL shortening service which allows us to keep the
 * QR codes as simple as possible.
 */
app.get('/c/:id', function(req, res) {
//  var server = store.get(req.params.id);
//  if (!!server) {
//    res.redirect(server.remoteUrl + '?_qsid=' + req.params.id);
//  }
//  else {
//    res.send(404);
//  }
});
