window.onload = function(){
	alert("homepage");
	//tab选项卡，鼠标经过和移开事件
	var tableft = document.getElementById('tab-left');
	var tab = tableft.getElementsByTagName('li');

	for(i=0;i<tab.length;i++){
		//鼠标经过
		tab[i].onmouseover = function(){
			this.style.backgroundColor = "grey";
		}
		// 鼠标移开
		tab[i].onmouseout = function(){
			this.style.backgroundColor = "#0F2038";
		}
	}

	var page = document.getElementById('yes');
	var tru = page.getElementsByTagName('div');
	for(j=0;j<tru.length;j++){
		if(tru[j].className == "tab-triangle"){
			tru[j].className = "triangle";
		}
	}




	// 回到顶部效果
	var top = document.getElementById('top-btn');
	//获取可视区的高度
	var clientHeight = document.documentElement.clientHeight;
	var time = null;
	var stop = true;
	
	//回到顶部点击是触发
	top.onclick = function(){
		time = setInterval(function(){
			//获取滑动条的高度
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var speed = scrollTop / 5 ;
			//改变滑动条高度
			document.body.scrollTop = document.documentElement.scrollTop = scrollTop - speed ;

			//如果到达顶部，停止事件
			if (scrollTop == 0) {
				clearInterval(time);
			};

			stop = false ;
		},30);
	}

	//滚动条滚动时停止回到顶部
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop > 0) {
			top.style.display = 'block';
		}else{
			top.style.display = 'none';
		};

		if (stop) {
			clearInterval(time);
		};
		stop = true;
	}
	
		//右上角用户的鼠标滑动事件

	var user = document.getElementById('user');
	var personal = document.getElementById('personal');
	var subs = document.getElementsByClassName('sub');
	user.onmouseover = function(){
		personal.style.display = 'block';
	}
	personal.onmouseover = function(){
		personal.style.display = 'block';
	}
	personal.onmouseout = function(){
		personal.style.display = 'none';
	}
	for(var i=0;i<subs.length;i++){
		!function(i){
			subs[i].onmouseover =function(){
				subs[i].style.backgroundColor = '#e5af30';
				var suba = subs[i].getElementsByTagName('a');
				var subImg = subs[i].getElementsByTagName('img');
				suba[0].style.color = 'white';
				subImg[0].src = 'images/'+ i +'-2.png';
			}
			subs[i].onmouseout = function(){
				subs[i].style.backgroundColor = '#FEFEFE';
				var suba = subs[i].getElementsByTagName('a');
				var subImg = subs[i].getElementsByTagName('img');
				suba[0].style.color = 'black';
				subImg[0].src = 'images/'+ i +'-1.png';
			}
		}(i);
	}

	
	//分享
    var logo = document.getElementById('share-logo');
    var clors = logo.getElementsByTagName("input");
    for (var i = 0; i < clors.length; i++) {
        !function(i){
            clors[i].onmouseover=function(){
                if(i==0){
                    clors[0].style.background="url(./images/qq.png)";
                }
                else if (i==1) {
                    clors[1].style.background="url(./images/weibo.png)";
                }
                else {
                    clors[2].style.background="url(./images/wechat.png)"
                }
            }
            clors[i].onmouseout=function(){
                if(i==0){
                    clors[0].style.background="url(./images/logo6.gif)";
                }
                else if (i==1) {
                    clors[1].style.background="url(./images/logo7.gif)";
                }
                else{
                    clors[2].style.background="url(./images/logo8.gif)"
                }
            }
        }(i);
    }
}