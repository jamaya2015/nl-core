module.exports = function( dirname, fext,callback){
var filArray=[];
var fun=require('./06module');


fs.readdir(dirname ,
       function (err, list) {
         for(var i=0; i<list.length; i++){
           if(path.extname(list[i]) === '.' + fext ){
             filArray.push(list[i]);
           }
         }
         
         filArray.forEach(function(elem){
           console.log(elem);
         });         
       }
     )


}
