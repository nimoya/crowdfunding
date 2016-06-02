<?php
header("content-type:text/html;charset=utf-8");
$query = $_POST['respond'];
print_r($query);
//$uri = $_SERVER['REQUEST_URI'];
//$uri = substr($uri,0,80);//cut down the URL
//if(preg_match('/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/is',$uri)){
//	$uri = parse_url($uri);
//	if(@$uri['query']==""){
//		$uri_query="Null";
//	}else{
//		$uri_query = $uri['query'];
//		if(preg_match("/\&+/i",$uri_query)){
//			$uri_query = explode("&",$uri_query);
//			for($i="0";$i<count($uri_query);$i++){
//				$temp = explode("=",$uri_query[$i]);
//				@$subtemp[$temp['0']] = $temp['1'];
//			}
//			$uri['query'] = $subtemp;//不能直接赋值给未定义的二维关联数组
//		}else{
//			$temp = explode("=",$uri_query);
//			foreach ($temp as $value) {
//				$subtemp[] = $value;
//			}
//			$uri['query'] = array($subtemp['0']=>$subtemp['1']);
//		}
//	}
//	$query = json_encode($uri['query']);
//	echo $query;
//}else
//	echo "URL错误";