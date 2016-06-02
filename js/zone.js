define(["jquery"],function() {
	$(function() {
		getProjectInfo("json/publish.json");
	})
	function getProjectInfo(url,add) {
		$.ajax({
			type: "post",
			//						dataType:"json",
			url: url,
			success: function(data) {
				//							console.log(data.projects[0]);
				var html = "";
				var projects = $('.projectInfo');
				var L = data.projects.length;
				if(!add){
					add=0;
				}
				if(L>5){
					for (var i = 0; i < 5; i++) {
						html += '<li><div class="projectImg"><img src="' + data.projects[i].img + '" /></div><div class="projectDetail"><h4>' + data.projects[i].title + '</h4><span>' + data.projects[i].name + '&nbsp;&nbsp;</span> <span>发布时间：' + data.projects[i].time + '</span></div><div class="projectBut"><span><a href="">查看项目</a></span> <span id="deleteSign"><img src="images/rabish.png"/></span></div></li>';
					}
				}else{
					for (var i = 0; i < L; i++) {
						html += '<li><div class="projectImg"><img src="' + data.projects[i].img + '" /></div><div class="projectDetail"><h4>' + data.projects[i].title + '</h4><span>' + data.projects[i].name + '&nbsp;&nbsp;</span> <span>发布时间：' + data.projects[i].time + '</span></div><div class="projectBut"><span><a href="">查看项目</a></span> <span id="deleteSign"><img src="images/rabish.png"/></span></div></li>';
					}
				}
				
				projects.html("");
				projects.html(html);
			},
			error: function(xhr, status, info) {
				console.log(xhr.status + ':' + xhr.statusText);
				console.log(status + ':' + info);
			}
		});
	}
	$('#parts li').on('click',function(){
//		console.log($(this).attr("data-value"));
		var value=$(this).attr("data-value");
		switch(value){
			case "1":
			getProjectInfo("json/publish.json");
			break;
			case "2":
			getProjectInfo("json/like.json");
			break;
			case "3":
			getProjectInfo("json/participate.json");
			break;
			default:
			console.log("url ERROR");
			break;
		}
		$("#parts li").removeClass("partActive");
		$(this).addClass("partActive");
	});
	$('#partType li').on('click',function(){
		$('#partType li').each(function(){
			$(this).css("background-color","#FFFFFF");
		});
		$(this).css("background-color","#E5AF30");
	});
	$('.addMore').on('click',function(){
//		getProjectInfo("json/publish.json",5);
		$.ajax({
			type:"post",
			url:"json/publish.json",
			success:function(data){
				var nowProjectCount = $('.projectInfo li').length;
				var projectCount = data.projects.length;
//				console.log(nowProjectCount);
//				console.log(projectCount);
				var html="";
				html+= $('.projectInfo').html();
				if((projectCount-nowProjectCount)>5){
					for (var i = nowProjectCount; i < nowProjectCount+5; i++) {
							html += '<li><div class="projectImg"><img src="' + data.projects[i].img + '" /></div><div class="projectDetail"><h4>' + data.projects[i].title + '</h4><span>' + data.projects[i].name + '&nbsp;&nbsp;</span> <span>发布时间：' + data.projects[i].time + '</span></div><div class="projectBut"><span><a href="">查看项目</a></span> <span id="deleteSign"><img src="images/rabish.png"/></span></div></li>';
					}
				}else if((projectCount-nowProjectCount)<5&&(projectCount-nowProjectCount)>0){
					for (var i = nowProjectCount; i < nowProjectCount+(projectCount-nowProjectCount); i++) {
							html += '<li><div class="projectImg"><img src="' + data.projects[i].img + '" /></div><div class="projectDetail"><h4>' + data.projects[i].title + '</h4><span>' + data.projects[i].name + '&nbsp;&nbsp;</span> <span>发布时间：' + data.projects[i].time + '</span></div><div class="projectBut"><span><a href="">查看项目</a></span> <span id="deleteSign"><img src="images/rabish.png"/></span></div></li>';
					}
					
				}else{
					alert("没有更多了");
					
				}
				
				$('.projectInfo').html(html);
			}
		})
	});

/*	$('#parts li').on('click', function() {
		$('#parts li').each(function() {
			//						alert("去除partNotActive");
			$(this).removeClass('partNotActive').removeClass('partActive').css('color', '#000000');
		});
		$(this).addClass('partActive').css('color', '#E5AF30');
		$('#parts li').each(function() {
			if (!$(this).hasClass('partActive')) {
				//							alert("添加partNotActive"+$(this).html())
				$(this).addClass('partNotActive').css('color', '#000000');
			}
		});
		getProjectInfo();
	});
	$('.partNotActive').on({ //不知道后端要如何区分项目，所以先暂时共用一张json表
		mouseover: function() {
			//					console.log($(this).css('color'));
			$(this).css('color', '#E5AF30');
		},
		mouseout: function() {
			$(this).css('color', '#000000')
		}
	});
	$('#partType li').on('click', function() {
		$('#partType li').each(function() {
			//						alert("去除partNotActive");
			$(this).removeClass('partTypeActive').removeClass('partTypeNotActive').css('background-color', '#FEFEFE');
		});
		$(this).addClass('partTypeActive').css('color', '#E5AF30');
		$('#parts li').each(function() {
			if (!$(this).hasClass('partTypeActive')) {
				//							alert("添加partNotActive"+$(this).html())
				$(this).addClass('partTypeNotActive').css('color', '#FEFEFE');
			}
		});
		getProjectInfo();
	});
	$('.partTypeNotActive').on({ //不知道后端要如何区分项目，所以先暂时共用一张json表
		mouseover: function() {
			//					console.log($(this).css('background-color'));
			$(this).css('background-color', '#E5AF30');
		},
		mouseout: function() {
			$(this).css('background-color', '#FFFFFF')
		}
	});*/
//	$('.projectInfo li').eq('last').addClass('firstProjec');
})