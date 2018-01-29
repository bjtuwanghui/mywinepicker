//使用IIFE!
(function () {
	var $loginorregisterbtn = $("#loginorregisterbtn");
	var $inputEmail = $("#inputEmail");
	var $inputPassword = $("#inputPassword");

	$loginorregisterbtn.click(function () {
		var email = $inputEmail.val();
		var password = $inputPassword.val();

		$.post("/login", {
			"email": email,
			"password": password
		}, function (data) {
            if(data.result==1){
				alert("成功登陆！欢迎");
				window.location="/";
			}else{
				  
				alert("此用户不存在或密码错误！请注册或重新登陆！")
			}
		})
	})
})();