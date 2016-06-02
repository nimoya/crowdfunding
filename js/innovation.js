window.onload = function(){
// 最热最新 
    var hotest = document.getElementById('hotest');
    var newest = document.getElementById('newest');
    var all = document.getElementById('all');
    hotest.onclick=function(){
        hotest.style.backgroundColor = '#0f2038';
        hotest.style.color = '#ffffff';
        newest.style.backgroundColor = '#faba24';
        newest.style.color = 'black';
        all.style.backgroundColor = '#faba24';
        all.style.color = 'black';
    }
    newest.onclick=function(){
        newest.style.backgroundColor = '#0f2038';
        newest.style.color = '#ffffff';
        hotest.style.backgroundColor = '#faba24';
        hotest.style.color = 'black';
        all.style.backgroundColor = '#faba24';
        all.style.color = 'black';
    }
    all.onclick=function(){
        all.style.backgroundColor = '#0f2038';
        all.style.color = '#ffffff';
        hotest.style.backgroundColor = '#faba24';
        hotest.style.color = 'black';
        newest.style.backgroundColor = '#faba24';
        newest.style.color = 'black';
    }
//分享
    var logo = document.getElementById('share-logo');
    var clors = logo.getElementsByTagName("input");
    for (var i = 0; i < clors.length; i++) {
        !function(i){
            clors[i].onmouseover=function(){
                if(i==0){
                    clors[0].style.background="url(../images/qq.png)";
                }
                else if (i==1) {
                    clors[1].style.background="url(../images/weibo.png)";
                }
                else {
                    clors[2].style.background="url(../images/wechat.png)"
                }
            }
            clors[i].onmouseout=function(){
                if(i==0){
                    clors[0].style.background="url(../images/logo6.gif)";
                }
                else if (i==1) {
                    clors[1].style.background="url(../images/logo7.gif)";
                }
                else{
                    clors[2].style.background="url(../images/logo8.gif)"
                }
            }
        }(i);
    }
}