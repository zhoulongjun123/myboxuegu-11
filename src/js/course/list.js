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
		$.get('/v6/course',{cs_id:cs_id},function(data){
			if(data.code == 200){
				 $(".course-list").append(template('course_list',data.result));
			}
			
		})
//		$.ajax({
//			type:"get",
//			url:"/v6/course",
//			success:function(data){
//				$(".course-list").append(template('course_list',data.result));
//			}
//		});