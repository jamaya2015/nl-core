var dirname=process.argv[2];
var fext=process.argv[3];
var fun=require('./06module');


fun(dirname,fext,function(err,data){
  if(err){
    console.log('There was a error',err);
  }else{
    data.forEach(function(elem){
      console.log(elem);
    });
  }

});
