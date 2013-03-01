var 
    connect = require('connect'), 
    conf = require('./conf')
;

connect.createServer(
    connect.static(__dirname + '/public')
).listen(conf.port);