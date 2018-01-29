var formidable = require("formidable");
//调进数据库中的staff collection
var Staff = require("../models/Staff.js");

exports.showLogin = function (req, res) {
	//如果用户已经登陆过，此时不能让他看见这个页面
	if (req.session.login) {
		res.send("<h1>您不能重复登陆！</h1>");
		return;
	}
	//呈递views中的模板引擎
	res.render("login", {
	
		"column": "login",
		"login": req.session.login,
		"email": req.session.email
	});
}

//执行登陆
exports.doLogin = function (req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var email = fields.email;
		var password = fields.password;

		//和数据库进行对比 查询数据库中是否有这个人的资料
		Staff.find({ "email": email, "password": password }, function (err, results) {
			if (results.length > 0) {
				//登陆成功 ，下发session!!! 就是说在数据库找到了这个人的信息！！！！！！
				req.session.login = true;
				req.session.email = email;

				res.json({ "result": 1 });
			} else {

				res.json({ "result": -1 });
			}
		});
	});
}