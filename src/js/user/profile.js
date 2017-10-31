require('../common/header.js');
require('../common/aside.js');

$.ajax({
			url:"/v6/teacher/profile",
			type:"get",
			success:function(data){
				if(data.code == 200){
					$("#teacher-profile").html(template('form_profile',data.result));
				}
			}
		});
		
$("#teacher-profile-form").ajaxForm({
	delegation: true,
	success:function(data){
		if(data.code == 200){
		alert("修改成功");
		}
	}
});

