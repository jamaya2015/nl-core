var fs = require('fs');
var path = require('path');

var dirToProcess=process.argv[2];
var extension=process.argv[3];
var filArray=[];
  
fs.readdir(dirToProcess ,
       function (err, list) {
         for(var i=0; i<list.length; i++){
           if(path.extname(list[i]) === '.' + extension ){
             filArray.push(list[i]);
           }
         }
         
         filArray.forEach(function(elem){
           console.log(elem);
         });         
       }
     )
