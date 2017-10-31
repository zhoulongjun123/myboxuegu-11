$("#login-form").on("submit",function(e){
	$.ajax({
		url:'/v6/login',
		type:'post',
		data:$(this).serialize(),
		success:function(data){
			console.log(data);
			if(data.code == 200){
				alert("登录成功");
				location.href = "/dist";
			}else{
				alert("失败");
			}
		},
		error:function(){
			alert("登录失败");
		}
	});
	return false;
})

var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/img/default.png';
$('.avatar img').attr('src', tc_avatar);
console.log(userinfo);
console.log(tc_avatar);