
var http = require('http');
var url = process.argv[2];

  http.get(url,function(res){
    //console.log('this is the Response', res);
      res.setEncoding('utf8');
      res.on('data',function(dato){
          console.log(dato);
      });
      res.on('error',function(err){console.error('ERROR',err)});
  })
