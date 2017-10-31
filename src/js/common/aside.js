$(".list-unstyled a").on("click",function(){
	$(this).next('ul').slideToggle();
});



var path = location.pathname;
$(".list-unstyled a").removeClass('active');
$(".list-unstyled a[href = '"+path+"']").addClass('active').parents('ul').show();
