alert("massage is loaded");
//window.onload = function(){
//
//	//tab选项卡，鼠标经过和移开事件
//	var tableft = document.getElementById('tab-left');
//	var tab = tableft.getElementsByTagName('li');
//
//	for(var i=0;i<tab.length;i++){
//		//鼠标经过
//		tab[i].onmouseover = function(){
//			this.style.backgroundColor = "grey";
//		}
//		// 鼠标移开
//		tab[i].onmouseout = function(){
//			this.style.backgroundColor = "#0F2038";
//		}
//	}
//
//	var page = document.getElementById('yes');
//	var tru = page.getElementsByTagName('div');
//	for(var j=0;j<tru.length;j++){
//		if(tru[j].className == "tab-triangle"){
//			tru[j].className = "triangle";
//		}
//	}
//
//
//
//	// 回到顶部效果
//	var top = document.getElementById('top-btn');
//	//获取可视区的高度
//	var clientHeight = document.documentElement.clientHeight;
//	var time = null;
//	var stop = true;
//	
//	//回到顶部点击是触发
//	top.onclick = function(){
//		time = setInterval(function(){
//			//获取滑动条的高度
//			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//			var speed = scrollTop / 5 ;
//			//改变滑动条高度
//			document.body.scrollTop = document.documentElement.scrollTop = scrollTop - speed ;
//
//			//如果到达顶部，停止事件
//			if (scrollTop == 0) {
//				clearInterval(time);
//			};
//
//			stop = false ;
//		},30);
//	}
//
//	//滚动条滚动时停止回到顶部
//	window.onscroll = function(){
//		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//		if (scrollTop > 0) {
//			top.style.display = 'block';
//		}else{
//			top.style.display = 'none';
//		};
//
//		if (stop) {
//			clearInterval(time);
//		};
//		stop = true;
//	}
	

	//分页页码

//	var pages = document.getElementById('page').children || document.getElementById('page').childNodes;
//	for(var i=1;i<(pages.length-1);i++){
//		!function(i){
//			pages[i].onclick = function(){
//				for(var j=1;j<(pages.length-1);j++){
//					if(i==1){
//						pages[1].childNodes[0].nodeValue = '1';
//						for(var m=2;m<pages.length-1;m++){
//							pages[m].childNodes[0].nodeValue = m;
//						}
//					}
//					pages[j].className = 'page'+j;
//				}
//				this.className = 'page'+i+' page-border';
//			}
//		}(i);
//	}
//	pages[0].onclick = function(){
//		for(var k=1;k<(pages.length-1);k++){
//			if(pages[k].className=='page'+ k +' page-border'){
//				if(k==1){}
//				else if(k==2 && parseInt(pages[2].childNodes[0].nodeValue)>5){
//					if(pages[2].childNodes[0].nodeValue == 6){
//						for(var m=2;m<pages.length-1;m++){
//							pages[m].childNodes[0].nodeValue = m;
//						}
//						pages[1].childNodes[0].nodeValue = '1';
//						pages[2].className = 'page'+ 2;
//						pages[5].className = 'page'+ 5 +' page-border';
//					}
//					else{
//						for(var m=2;m<pages.length-1;m++){
//							pages[m].childNodes[0].nodeValue -= 4;
//						}
//						pages[2].className = 'page'+ 2;
//						pages[5].className = 'page'+ 5 +' page-border';
//					}
//					break;					
//				}
//				else{
//					pages[k].className = 'page'+ k;
//					k-=1;
//					pages[k].className = 'page'+ k +' page-border';
//					break;
//				}
//			}
//		}
//		for(var i=2;i<pages.length-1;i++){
//			if(parseInt(pages[i].childNodes[0].nodeValue)> 9){
//				pages[i].style.marginRight = 35 +'px';
//			}
//			else{
//				pages[i].style.marginRight = 42 +'px';
//			}
//		}
//	}
//	pages[6].onclick = function(){
//		for(var l=1;l<(pages.length-1);l++){
//			if(pages[l].className=='page'+ l +' page-border'){
//				if(l>4){
//					var now = parseInt(pages[l].childNodes[0].nodeValue);
//					pages[1].childNodes[0].nodeValue = '1' + '...';
//					for(var m=2;m<pages.length-1;m++){
//						pages[m].childNodes[0].nodeValue = now + m - 1;
//					}
//					pages[2].className = 'page'+ 2 +' page-border';
//					pages[5].className = 'page'+ 5;
//
//				}
//				else{
//					pages[l].className = 'page'+ l;
//					l+=1;
//					pages[l].className = 'page'+ l +' page-border';
//					break;
//				}
//			}
//		}
//		for(var i=2;i<pages.length-1;i++){
//			if(parseInt(pages[i].childNodes[0].nodeValue)> 9){
//				pages[i].style.marginRight = 35 +'px';
//			}
//			else{
//				pages[i].style.marginRight = 42 +'px';
//			}
//		}
//	}


//	//右上角用户的鼠标滑动事件
//
//	var user = document.getElementById('user');
//	var personal = document.getElementById('personal');
//	var subs = document.getElementsByClassName('sub');
//	user.onmouseover = function(){
//		personal.style.display = 'block';
//	}
//	personal.onmouseover = function(){
//		personal.style.display = 'block';
//	}
//	personal.onmouseout = function(){
//		personal.style.display = 'none';
//	}
//	for(var i=0;i<subs.length;i++){
//		!function(i){
//			subs[i].onmouseover =function(){
//				subs[i].style.backgroundColor = '#e5af30';
//				var suba = subs[i].getElementsByTagName('a');
//				var subImg = subs[i].getElementsByTagName('img');
//				suba[0].style.color = 'white';
//				subImg[0].src = 'images/'+ i +'-2.png';
//			}
//			subs[i].onmouseout = function(){
//				subs[i].style.backgroundColor = '#FEFEFE';
//				var suba = subs[i].getElementsByTagName('a');
//				var subImg = subs[i].getElementsByTagName('img');
//				suba[0].style.color = 'black';
//				subImg[0].src = 'images/'+ i +'-1.png';
//			}
//		}(i);
//	}


	//左边栏点击事件

	var bar = document.getElementById('bar');
	var bars = bar.getElementsByTagName('li');
	var detail = document.getElementById('details');
//	var details = detail.getElementsByTagName('li');这样的选择器会把分页器里面的li也给选上，这是令人忧伤
	var details = detail.children||detail.childNodes;//有bug，子元素有5个，但是因为是从左侧的4个bar来控制的，所以不会出现用到第五个

	for(var i=0;i<bars.length;i++){
		!function(i){
			bars[i].onclick = function(){
				for(var j=0;j<bars.length;j++){
					details[j].style.display = 'none';
//					bars[j].style.backgroundColor = '#EFEDED';
					bars[j].className="bar barNotActive";
//					bars[j].style.width = 199 +'px';
				}
				details[i].style.display = 'block';
//				bars[i].style.backgroundColor = '#FEFEFE';
				bars[i].className="bar barActive";
				
//				pages[1].childNodes[0].nodeValue = '1';				
//				for(var j=2;j<(pages.length-1);j++){
//					pages[j].childNodes[0].nodeValue = j;						
//					pages[j].className = 'page'+j;
//				}
//				pages[1].className = 'page'+1+' page-border';
				bars[i].style.width = 200 +'px';
			}
		}(i);
	}


	//消息右上角点击事件

//	var anchors = document.getElementsByClassName('evecomment-anchor');
//	var pop = document.getElementById('response-menu');
//	var comments = document.getElementsByClassName('evenotice');
//	var height = 44;
//	var responseBtn = pop.getElementsByTagName('a')[0];
//	var response = document.getElementsByClassName('response');
//	
//	for(var i=0;i<anchors.length;i++){
//		!function(i){
//			anchors[i].onclick = function(){
//				pop.style.top = 151*i + height +'px';
//				pop.style.display = 'block';
//				//点击“回复”，出现回复条
//				responseBtn.onclick = function(){
//					response[i].style.display = 'block';
//					document.onclick=function(event){
//      				var aim=event.srcElement; //兼容ie和非ie的事件源
//      
//        				if(aim==response[i] || aim==responseBtn){}
//        				else{
//          				response[i].style.display="none";
//       				}       
//    				}		
//				}
//					
//			}
//			
//		}(i);
//		
//	}
//	pop.onmouseover = function(){
//      pop.style.display="block";
//  }
//	pop.onmouseout = function(){
//      pop.style.display="none";
//  }


    
    

