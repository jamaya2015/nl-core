var fs = require('fs');

var buf = fs.readFile(process.argv[2],'utf8',function(error, data){
  if(error){
   console.log('There was an error',error);
   throw error;
  }else{
    //return data.split('\n').length;
    console.log((data.split('\n').length)-1);
  }
});

