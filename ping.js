var ping = require('ping');
 
var hosts = ['http://localhost:3000/'];

for(var i = 0; i < 50;i++){
 hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
  });
};