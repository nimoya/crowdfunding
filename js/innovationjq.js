define(["jquery"],function(){
	$(function(){
		$.ajax({
			type:"post",
			url:"json/innovation.json",
			async:true,
			success: function(data){
				
			},
			error:function(){
				alert("json数据获取失败");
			}
		});
	});
});
