require('../common/header.js');
require('../common/aside.js');

$.ajax({
			url:"/v6/category/top",
			type:"get",
			success:function(data){
				$("#category-form-control").html(template('category_add',data.result));
			}
		});
		
		
		$('#form-horizontal').ajaxForm(function(data){
			if(data.code == 200){
				alert("恭喜你创建了一个新学科");
			}
		});