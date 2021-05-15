const { response } = require("express");
const express= require("express");
const app=express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});




app.post("/",function(Request,Response){
    var num1=parseInt(Request.body.Num1);
    var num2=parseInt(Request.body.Num2);
    var result=num1+num2;
    Response.send("<h1>Your Result Is</h1>" +result);
});

app.listen(3000,function(){
    console.log("Server Started On Port 3000");
});