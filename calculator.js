//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
    var we=parseFloat(req.body.weight);
    var het=parseFloat(req.body.height);
    var result=we/(het*het);
    res.send("Your BMI is="+result);
});
app.listen(3000,function(){
    // console.log("server is running on port 3000a");
});





// app.get("/",function(req,res){
//     // res.sendFile(__dirname);
//     res.sendFile(__dirname+"/index.html");
// });

// app.post("/",function(req,res){
//     // console.log(req.body.num1);
//     var num1=Number(req.body.n1);//it gets parsed as texts
//     var num2=Number(req.body.n2);
//     var num3=num1+num2;
//     res.send("result of the calculation is="+num3);
// });


