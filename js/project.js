alert("project is loaded");
//详情、进展、评价切换
	var tan = document.getElementById('tab-bar-top');
	var tans = tan.getElementsByTagName('li');
	var tra = tan.getElementsByTagName('div');
	var tri = document.getElementById('project-content');
	var tris = tri.children[0].children || tri.childNodes[0].childNodes;

	for(var i=0;i<tans.length;i++){
		!function(i){
			// 鼠标经过
			tans[i].onmouseover = function(){
				this.style.backgroundColor = "grey";
			}
			// 鼠标移开
			tans[i].onmouseout = function(){
				this.style.backgroundColor = "#0f1e36";
			}
			// 鼠标点击
			tans[i].onclick = function(){
				for(var j=0;j<tris.length-1;j++){
					tris[j].style.display = 'none';
					tra[j].style.display = 'none';
				}
				tris[i].style.display = 'block';
				tra[i].style.display = 'block';
				if(i==1){
					tris[3].style.display = 'none';
				}else{
					tris[3].style.display = 'block';
				}
			}
		}(i);
	}


//轮播图

	//元素获取
	var place = document.getElementById('display-btn');
	var left = place.getElementsByTagName('img')[0];
	var right = place.getElementsByTagName('img')[1];
	var frame = document.getElementById('display-container');
	var timer;
	//点击事件
	function move(offset){
		var time = 400;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var newleft = parseInt(frame.style.left) + offset;
        var go = function(){
        	if ((offset < 0 && parseInt(frame.style.left) > newleft) || (offset > 0 && parseInt(frame.style.left) < newleft)) {
        		frame.style.left = parseInt(frame.style.left) + speed + 'px';
        		setTimeout(go,inteval);
        	}
        	else{
        		frame.style.left = newleft +'px';
        		if(parseInt(frame.style.left) > - 710){
					frame.style.left = -2130 + 'px';
				}
				if(parseInt(frame.style.left) < - 2130){
					frame.style.left = -710 + 'px';
				}
        	}
        }
        go();
	}
	left.onclick = function(){
		move(710);
	}
	right.onclick = function(){
		move(-710);
	}
	function play(){
		clearInterval(timer);
		timer = setInterval(function(){
			right.onclick();
		},3000)
	}
	function stoplay(){
		clearInterval(timer);
	}

	frame.onmouseover = stoplay;
	frame.onmouseout = play;
	left.onmouseover = stoplay;
	left.onmouseout = play;
	right.onmouseover = stoplay;
	right.onmouseout = play;

	play();