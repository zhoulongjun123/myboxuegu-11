require('../common/header.js');
require('../common/aside.js');

$("#course-form-add").ajaxForm(function(data){
			if(data.code == 200){
				alert("恭喜你创建了一个课程");
				location.href = '/dist/html/course/edit1.html?cs_id=' + data.result.cs_id;
			}
		 });