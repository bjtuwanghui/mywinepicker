var formidable = require("formidable");
//调进数据库中的staff collection
var Staff = require("../models/Staff.js");

exports.showRegist = function (req, res) {
	res.render("regist", {

		"column": "login",
		"login": req.session.login,
		"email": req.session.email
	});

}

exports.doRegist = function (req, res) {
	// 识别用户的请求
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var email = fields.email;
		var password = fields.password;

		Staff.create({
			"email": email,
			"password": password
		}, function (err) {
			//1 success -1 failure
			res.json({ "result": err ? -1 : 1 });

		});
	})

}