define(["jquery"], function() {
	//	console.log("massagejq is loaded");
	//	$('#page ul li')
	//	console.log($('#page ul li'));
	$(function() {
		var datas = ''; //用于保存ajax获取的所有数据

		var sign = 0; //用来判断是第几次进行了pagesBut方法的upOrNext == "next"判断
		var totalItems = 0; //初始化或者是私信...通知四个选项之间切换的时候，初始化时获取所有的数据数目
		var userImg = 'images/user.jpg';
		//		var type = $('.barActive').attr("data-value");//获取当前是在私信、评论..里的哪一项
		var type = '1';
		var pageBut = $('#up').attr("data-value");
		//		alert(parseInt(pageBut));
		//		alert(type);
		//		var curPage = $('.activePage').eq(0).text();//获取到当前页数.默认为第一页
		var curPage = 1;
		//		alert(curPage);
		var baseURL = "json/privateLetter.json?";
		var url = baseURL + "type=" + type + "&curPage=" + curPage;
		getInfo(url, type); //初始化页面
		setInfo(datas,type,curPage);
		pagesIntBut(datas.total, type);
			//		获取到json数据,并填充拼接代码
	function getInfo(url, type) {
		$.ajax({
			type: "POST",
			//				url:url,
			url: url,
			data: {
				data: type
			},
			async: false,
			success: function(data) {
				datas = data;
//				alert("huoq");
				console.log(datas);
			},
			error: function() {
				alert("json调用出错");
			}
		});
	}
	//将取到的数据正确的装入容器
	function setInfo(data,type,curPage) {
		alert(data);
		alert("type是"+type+"    curPage is"+curPage);
		totalItems = data.total;
		var items = data.items;
		var html = "";
		var container = null;
		switch (type) {
			case "1":
				{
					alert('1');
					var end = 7*curPage;
					if(7*curPage-data.total<7&&7*curPage - data.total>0){
						end = data.total;
					}
					container = $('.private').find('.notice-text');
					for (var i =7* (curPage - 1), L = end; i < L; i++) {
						html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><img src="images/logo10.gif" style="float:right"><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span>' + items[i].source + '</span></div><div class="evenotice-delete"><a href="javascript:;">删除</a></div></div><div style="clear:both"></div></div>';
					}
				}
				break;
			case "2":
				{
					container = $('.comment').find('.notice-text');
					var end = 4*curPage;
						if(4*curPage-data.total<4&&4*curPage - data.total>0){
							end = data.total;
						}
					for (var i = 7*(curPage - 1), L = end; i < L; i++) {
						html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><div class="evecomment-anchor upbg"></div></div><div class="evecomment-comment"><span>' + items[i].source + '</span></div><div class="evecomment-source"><span>评论我的项目：</span><span style="color:black;">' + items[i].project + '</span></div><div class="evecomment-date">' + items[i].time + '</div></div><div style="clear:both"></div></div><div class="response"><img src="' + userImg + '"><form class="respond-form"><input name="respond" type="text" value="回复' + items[i].name + ':" class="response-box"></input><input type="submit" value="回复" class="response-btn"/><span>200</span></form><div style="clear:both"></div></div>';
					}

				}
				break;
			case "3":
				{
					container = $('.fan').find('.notice-text');
					//							alert(datas.newFan);
					$('.fan .notice-title span').text(data.newFan);
					var newFan = data.newFan;
					var newFanPage = Math.ceil(newFan / 7);
					//							alert(newFan+","+newFanPage)
					var end = 7*curPage;
					if(7*curPage-data.total<7&&7*curPage - data.total>0){
						end = data.total;
					}
					if (curPage < newFanPage) {
						//								alert('fan1')
						for (var i = 7 * (curPage - 1), L = end; i < L; i++) {
							html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span style="color:#cc2424;font-weight:bold;">关注了你</span></div></div><div style="clear:both"></div></div>'
						}

					} else if (newFanPage == curPage) {
						//								alert('fan2')
						for (var i = 7 * (curPage - 1), L = newFan; i < L; i++) {
							html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span style="color:#cc2424;font-weight:bold;">关注了你</span></div></div><div style="clear:both"></div></div>'
						}
						
						for (var i = newFan, L = end; i < L; i++) {
							html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span>关注了你</span></div></div><div style="clear:both"></div></div>'

						}
						//								alert(html);
					} else {
						//								alert('fan3')
						for (var i = 7 * (curPage - 1), L = end; i < L; i++) {
							html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span>关注了你</span></div></div><div style="clear:both"></div></div>'

						}
					}
				}
				break;
			case "4":
				{
					container = $('.notice').find('.notice-text');
					var end = 7*curPage;
					if(7*curPage-data.total<7&&7*curPage - data.total>0){
						end = data.total;
					}
					for (var i =7* (curPage - 1), L = end; i < L; i++) {
						html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><img src="images/logo10.gif" style="float:right"><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span>' + items[i].source + '</span></div><div class="evenotice-delete"><a href="javascript:;">删除</a></div></div><div style="clear:both"></div></div>'
					}
				}
				break;
			default:
				{
					alert('null');
					container = $('.private').find('.notice-text');
					var end = 7*curPage;
					if(7*curPage-data.total<7){
						end = data.total;
					}
					for (var i = 7*(curPage - 1), L = end; i < L; i++) {
						html += '<div class="evenotice"><div class="evenotice-img"><img src="' + items[i].img + '"></div><div class="evenotice-text"><div class="evenotice-title"><span class="evenotice-name">' + items[i].name + '</span><img src="images/logo10.gif" style="float:right"><span class="evenotice-date">' + items[i].time + '</span></div><div class="evenotice-notice"><span>' + items[i].source + '</span></div><div class="evenotice-delete"><a href="javascript:;">删除</a></div></div><div style="clear:both"></div></div>';
					}
				}
				break;
		}

		//					container.html("这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区这里是内容填充区");
		container.html(html);
	}

		//	点击数字按钮翻页
		$('#page ul li').on('click', function() {

		});
		//		点击左侧单导航条,切换内容
		$('#bar ul li').off('click').on('click', function() {

			//			alert("dianjile");
			//			type = $('.barActive').attr("data-value");//.barActive这个类不一定已经添加上去了，这里firefox会有bug
			var curPage = parseInt($('.activePage').text());
			type = $(this).attr("data-value");
			//			alert(type);
			switch (type) {
				case "1":
					url = "json/privateLetter.json";
					break;
				case "2":
					url = "json/comment.json";
					break;
				case "3":
					url = "json/fan.json";
					break;
				case "4":
					url = "json/notice.json";
					break;
				default:
					url = "json/privateLetter.json";
					break;
			}
			//			alert("type is"+type +"url is "+url)
			getInfo(url, type); //已经为datas赋了json对象值
			console.log(datas);
			//将数据分装进正确的容器中
			pagesIntBut(datas.total, type);
			setInfo(datas,type,1);
			

			//			$('.evecomment-anchor').on('click',function(){
			//				alert("cdscdsc");
			//			});
			//			var timeer=setTimeout(function(){
			////				alert($('.evecomment-anchor').css('width')+';;;'+$('.evecomment-anchor').css('height'));
			//				$('.evecomment-anchor').on('click',function(){
			//					alert("xsaxs");
			//				});
			//			},2000);
			//			var test = $('.evecomment-anchor');
			//			setTimeout(function(){
			//				alert(test.css('width'));
			//			});

		})

		//		给"评论"里的展开收起按钮注册事件
		//			给动态创建的元素绑定事件，注意，要先绑定在可以找到的父元素上，再在on函数里面表明我们要动态创建的元素
		$('.comment').off('click').on('click', '.evecomment-anchor', function() {
				var top = $(this).offset().top;
				var left = $(this).offset().left - 90;
				//				alert("top:"+top+",left:"+left);
				if ($(this).hasClass('upbg')) {
					//					$('.comment .evecomment-anchor').removeClass('upbg').removeClass('downbg').addClass('upbg');
					$(this).removeClass('upbg').addClass('downbg');
					//					alert("格式化说有1");
					//					$(this).addClass('downbg');
					$(this).parent().parent().parent().next().addClass("respondSign");
					$('#response-menu').css({
						left: left,
						top: top
					}).show(); //如果是使用offset来设定位置的话，会出现第二次举例加倍问题？？？？

				} else {
					//					$('.comment .evecomment-anchor').removeClass('upbg').removeClass('downbg').addClass('downbg');
					//					alert("格式化说有2");
					$(this).removeClass('downbg').addClass('upbg');
					$('.respondSign').hide();
					$(this).parent().parent().parent().next().removeClass("respondSign");
					$('#response-menu').css({
						left: left,
						top: top
					}).hide(); //如果是使用offset来设定位置的话，会出现第二次举例加倍问题？？？？

				}

				//				alert($(this).offset().left);
				//				alert($(this).offset().top);

			})
			//给“评论”里的，“回复”注册点击事件，并在点击提交的时候，异步提交表单事件
		$('#comment-respond').off('click').on('click', function() {
			var name = $('.respondSign form input').eq(0).val();
			$('.respondSign').show();
			//保存当前的评论者的名字
			onSubmit(name);
			//				alert($('.respondSign form').css("width"));
			//				alert("打开回复列表");
			//				alert($(this).css("width"));
			//				alert("我要开启异步提交了");

		});
		//给“评论”里的，回复注册异步提交表单事件
		//			$('.respondSign .response-btn').on('click',function(e){
		//				console.log("yingg");
		//				return false;
		//			})
		//			$('.respondSign form').on('submit',function(){
		//				console.log("on");
		//				return false;
		//			});

		//			
		//			$('#comment-respond').on('click',function(){
		//				var html = '';
		//			})
		//		alert($('.evecomment-anchor').css('width')+';;;'+$('.evecomment-anchor').css('height'));

		//		alert("vfvsdf");

		//		alert($('.long').css('width')+';;;'+$('.long').css('height'));

		//给分页功能的上下按钮注册点击事件
		$('#pages input').on('click', function() {
			var upRoNext = $(this).attr('data-value');
			var curPage = parseInt($('.activePage').text());
			var type = parseInt($('.barActive').attr("data-value"));
			var curMaxPage = parseInt($('.curMaxPage').text());
			totalItems = parseInt(totalItems);
			//			$('.curMaxPage').css('color','#FFFFFF');			
			alert(url + "," + type);
			getInfo(url, type);
			//			alert($('.curMaxPage').text());
			alert("totalItems:" + totalItems + "type:" + type + ",curPage:" + curPage + ",curMaxPage:" + curMaxPage);
			pagesBut(totalItems, type, curPage, curMaxPage, upRoNext);
			//			刷新页面数据
			

		})

	


	//初始化分页功能按钮
	function pagesIntBut(totalItems, type) { //一共多少条数据、是哪一类的数据
		var totalItems = parseInt(totalItems),
			type = parseInt(type);
		var items = 7;
		var totalPages = 1; //当前展示的总页数,值为1-5
		var pageContainer = $('#pages ul');
		var html = '<li class="activePage">1</li>';
		if (type === 2) {
			items = 4;
		}
		if (totalItems > items) {
			totalPages = totalItems / items;
		}
		if (totalPages > 5) {
			totalPages = 5;
		}
		for (var i = 2; i <= totalPages - 1; i++) {
			html += '<li>' + i + '</li>';
		}
		html += '<li class="curMaxPage">5</li>';
		pageContainer.html(html);
	}

	//点击上一页和下一页按钮
	function pagesBut(totalItems, type, curPage, curMaxPage, upOrNext) { //一共多少条数据、是哪一类的数据、当前显示的是第几页、点击的是上一页还是下一页按钮
		var totalItems = parseInt(totalItems),
			type = parseInt(type);
		var totalPages = 1; //一共有多少页
		var items = 7;
		if (type === 2) {
			items = 4;
		}
		if (totalItems > items) {
			totalPages = Math.ceil(totalItems / items); //向上取整

		}
		var upBut = $('#up');
		var page = $('#pages ul li');
		var activePage = curPage;
		var html = "";
		var curMaxPage = parseInt($('.curMaxPage').text());
		//不管它是上一页还是写一页,都已经是初始化好了的,所以,先直接写点事件的效果就好了
		//			alert("pagesbut is click");
		if (upOrNext == "up") {
			var pageContainer = $('#pages ul');
			if (curPage === 1 && curMaxPage < 6) {
				alert("已经是第一页了");
			} else if (curMaxPage != 6 && curPage != 6) {
				alert("up的curPage !== 1 &&curMaxPage<6");
				activePage = parseInt(curPage) - 2 - 4 * sign;
				alert("下一个位置是:" + activePage);
				page.removeClass('activePage');
				page.eq(activePage).addClass('activePage');
			} else if (curPage == 6) {
				sign = sign - 1;
				alert("当前是第6页");
				html = '<li>1</li><li>2</li><li>3</li><li>4</li><li class="curMaxPage activePage">5</li>';
				$('#next').show();
				pageContainer.html(html);
			}
			//				alert("up id die");
		}
		if (upOrNext == "next") {
			activePage = parseInt(curPage);
			if (curPage !== 5 && curMaxPage < 6) {
				//					alert("next1");
				page.removeClass('activePage');
				page.eq(activePage).addClass('activePage');
			} else if (curPage === curMaxPage) {
				sign++;
				//					alert("next2");
				var pageContainer = $('#pages ul');
				html = '<li>1</li><span class="noPage">...</span><li class="activePage">' + (curPage + 1) + '</li>';
				alert("totalPages是" + totalPages + "curPage是" + curPage);
				if ((totalPages - curPage) > 3) { //如果第二次还有超过四页
					alert("第二次是完整的");
					for (var i = curPage + 2; i < curPage + 4; i++) {
						html += '<li>' + i + '</li>';
					}
					html += '<li class="curMaxPage">' + (curPage + 4) + '</li>';
					pageContainer.html(html);

				} else {
					alert("第二次是不完整的");
					if ((totalPages - curPage) == 1) { //只剩一页
						//							alert("只剩一页");
						//							for(var i=curPage+2;i<=totalPages;i++){
						//								html+='<li>'+i+'</li>';
						html = '<li>1</li><span class="noPage">...</span><li class="activePage curMaxPage">' + (curPage + 1) + '</li>';
						//							}
						$('#next').hide();
					} else { //大于一页，并且少于4页
						for (var i = curPage + 2; i < totalPages; i++) {
							html += '<li>' + i + '</li>';

						}
						html += '<li class="curMaxPage">' + totalPages + '</li>'
					}
				}
				pageContainer.html(html);

			} else if (curMaxPage > 5) {
				alert("next3");
				//					activePage = parseInt(curPage)+1-5*sign+(sign-1);
				activePage = parseInt(curPage) - 4 * sign; //这是控制翻到下一个四页的时候，下一页的位置
				alert("下一个：" + activePage);
				page.removeClass('activePage');
				page.eq(activePage).addClass('activePage');
			}
//			pageContainer.html(html);
			//				pageContainer.last().addClass('curMaxPage');
		}
			type = $('.barActive').attr("data-value");
			curPage = parseInt($('.activePage').text());
			alert("接下来要天聪内容了"+curPage);
			setInfo(datas,type,curPage);

	}

	//		异步提交表单
	function onSubmit(name) {
		//			alert(name);
		$('.respondSign form').off('submit').on('submit', function() {
			console.log("cdsdcs");
			$.ajax({
				url: './php/test.php', //提交到页面地址
				data: {
					data: "1"
				},
				type: "POST",
				beforeSend: function() {
					//在异步提交前要做的操作
					alert("这是在异步提交前做的操作");

				},
				success: function() {
					//在异步提交成功后要做的操作
					alert("这是异步提交成功后的操作");
					$('.respondSign form input').eq(0).val(name); //把名字填充进去
					//						alert($('.respondSign form input').eq(0).val());
					$('.comment .evecomment-anchor').removeClass('downbg').addClass('upbg');
					$('.respondSign').hide();
					$('#response-menu').toggle();
				},
				error: function() {
					alert("提交失败");
				}

			});
			//			$('.respondSign form').submit(function(e){//如果多次点击回复后，点击提交按钮，会出现多次提交的BUG，原因是每次点击回复按钮，就会给表单绑定一次提交事件
			//				console.log("cdsdcs");
			//				$.ajax({
			//					url: 'commmentRespond.php',//提交到页面地址
			//					data: $('.respondSign form'),
			//					type: "POST",
			//					beforeSend: function() {
			//						//在异步提交前要做的操作
			//						alert("这是在异步提交前做的操作");
			//					},
			//					success: function() {
			//						//在异步提交成功后要做的操作
			//						alert("这是异步提交成功后的操作");
			//					},
			//					error: function(){
			//						alert("提交失败");
			//					}
			//					
			//				});
			//				
			//				return false;
			//			});

			return false;
		})
	}
	})
})