require('../common/header.js');
require('../common/aside.js');
	$("#repass-form").on('submit',function(){
			if($("#input-pass").val() !== $("#input-pass-repeat").val()){
				alert("两次输入的密码不一致");
				return false;
			}
			
		 $('#repass-form').ajaxSubmit({
				success:function(data){
					alert("修改成功");
				}
			});
			
			return false;
			
		})