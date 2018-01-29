//使用IIFE!
(function () {
	var $loginorregisterbtn = $("#loginorregisterbtn");
	var $inputEmail = $("#inputEmail");
	var $inputPassword = $("#inputPassword");

	//提交交yo由后台处理
	$loginorregisterbtn.bind("click", function () {
		var email = $inputEmail.val();
		var password =$inputPassword.val();
		
		//发出ajax请求：
		$.post("/regist", {
			"email": email,
			"password": password
		}, function (data) {
			if (data.result == 1) {
				alert("注册成功！请直接登陆！");
				window.location = "/login";
			} else if (data.result == -1) {
				alert("服务器繁忙！请稍后重试！！！")
			}
		})
	});

})();