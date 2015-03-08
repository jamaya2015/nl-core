module.exports = function( dirname, fext,callback){
var filArray=[];

fs.readdir(dirname , function (err, list) {
         for(var i=0; i<list.length; i++){
           if(path.extname(list[i]) === '.' + fext ){
             filArray.push(list[i]);
           }
         }
         if(err){
           callback(err);
         }else{
           callback(fillArray);
         }
       })
}
