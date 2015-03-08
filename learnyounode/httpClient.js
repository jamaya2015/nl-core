
var http = require('http');
var url = process.argv[2];

  http.get(url,function(res){
    console.log('this is the Response', res);
  }).on('data',function(dato){
    console.log('Data at onData level', dato);
  });
