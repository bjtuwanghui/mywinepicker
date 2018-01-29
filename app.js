var express = require("express");
var app = express();

var fs = require("fs");
var url = require("url");
var path = require("path");

var session = require("express-session");
var mongoose = require("mongoose");
var formidable = require("formidable");

//调用mongoose需要的schema！
var Wine = require("./models/Wine.js");
var Staff = require('./models/Staff.js');

//引入登陆和注册的控制器
var loginctrl = require("./controllers/loginctrl.js");
var registctrl = require("./controllers/registctrl.js");

//设置模板引擎
app.set("view engine", "ejs");

//链接数据库
mongoose.connect("localhost/winepicker");

//使用session 语句是百度来的
app.set('trust proxy', 1);
app.use(session({
    resave: false,
    secret: 'qasystem',
    saveUninitialized: true,
    cookie: { maxAge: 86400 } //session能够存储的时间
}));

app.get('/', function (req, res, next) {
    if (!req.session.login) {
        res.redirect("/login");
    } else {
        next();
    }
});

//静态化wwww文件夹  如果放行了 此时才能进入前端页面！！！！
app.use(express.static("www"));

//控制登陆和注册的逻辑
app.get("/regist"              , registctrl.showRegist);
app.post("/regist"             , registctrl.doRegist);
app.get("/login"               , loginctrl.showLogin);
app.post("/login"              , loginctrl.doLogin);

//wine的特征查询
app.get("/winelike/:id", function (req, res) {
    // var color = req.params.color;
    // console.log(color);
    var id = req.params.id;
    Wine.find({ id: id }).exec(function (err, docs) {
        res.json({ "result": docs });
    });

});

// app.get("/pics/:id",function(req,res){
// //name of wine
//      var id=req.params.id;
//        // var result={};
//          // result.list=fs.readdirSync(`./www/wineimages`);
//          // res.json(result);
//          fs.readFile(`./www/wineimages/${id}.jpg`,function(err,data){
//          	res.end(data);
//          });
// });

//wines 查询接口
app.post("/wines", function (req, res) {
    //post和get结合使用

    var page = url.parse(req.url, true).query.page;
    var pagesize = url.parse(req.url, true).query.pagesize;


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, winecondition) {
        //找符合条件的wines
        Wine.count(winecondition, function (err, count) {

            Wine
                .find(winecondition)
                .skip((page - 1) * pagesize)
                .limit(pagesize)
                .exec(function (err, docs) {
                    res.json({
                        "total": count,
                        "results": docs,

                    });
                });
        });
    });
});

//echarts需要的数据
app.get("/tb1", function (req, res) {
    res.json({ "data": [8, 9, 10.1, 20, 11, 12, 13, 12], "categories": ["2017年6月", "2017年7月", "2017年8月", "2017年9月", "2017年10月", "2017年11月", "2017年12月", "2018年1月"] });
})


app.listen(3000);
console.log("程序已在3000端口运行");