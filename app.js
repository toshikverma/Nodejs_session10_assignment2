var express=require('express');
var pug=require('pug');
var http=express();
http.get('/',function(req,res){

res.send(pug.renderFile('./profile.pug',{name:"Toshik",age:25,language:"javaScript",profile:"Developer"})); //rendering pug file
res.end();

});

http.listen(1335); //opening on port 1335