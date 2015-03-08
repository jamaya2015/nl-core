var fs = require('fs');
var path = require('path');

module.exports = function( dirname, fext,callback){
var filArray=[];

fs.readdir(dirname , function (err, list) {
         if (err)
           return callback(err);

         for(var i=0; i<list.length; i++){
           if(path.extname(list[i]) === '.' + fext ){
             filArray.push(list[i]);
           }
         }
         callback(null,filArray);         
       });
}
