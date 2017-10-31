var isLogin = !!$.cookie('PHPSESSID');
var isLoginPage = location.pathname == '/dist/html/user/login.html';
if(isLogin&&isLoginPage){
	location.href = '/dist';
}
