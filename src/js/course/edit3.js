require('../common/header.js');
require('../common/aside.js');

function getSearch(key) {
            var searchStr = location.search.slice(1);
            var searchArr = searchStr.split('&');
            var searchObj = {},tempArr;
            for (var i = 0, len = searchArr.length; i < len; i++) {
                tempArr = searchArr[i].split('=');
                searchObj[tempArr[0]] = tempArr[1];
            }
            return key ? searchObj[key] : searchObj;
       }
		
        var cs_id = getSearch('cs_id');
		$.get('/v6/course/lesson',{cs_id:cs_id},function(data){
			if(data.code == 200){
				 data.result.editIndex = 3;
				 $("#course-edit3").append(template('course-edit3-tml',data.result));
			}
		})
		
//	 编辑 ==============
	$(document).on('click','.btn-lesson-edit3',function(){
		var data = {
			ct_id:$(this).attr('data-id')
		};
		$.get('/v6/course/chapter/edit',data,function(data){
			if(data.code == 200){
				data.result.cs_id = cs_id;
				$('#chapterModal').html(template('course-edit3-tml2', data.result));
				console.log(template('course-edit3-tml2', data.result));
			}
		})
	})
   //  添加=============
	 $(document).on('click', '#btn-lesson-add', function() {
	   $('#chapterModal').html(template('course-edit3-tml2', { cs_id: cs_id }));
	  });
	 
   
	$('#lesson-form').ajaxForm({
		delegation:true,
		success:function(data){
			if(data.result){
				alert("恭喜你添加成功");
				$('#lesson-tpl').get(0).reset();
			}else{
				alert("修改成功");
			}
		}
	})

//============================
