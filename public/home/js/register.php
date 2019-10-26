<?php
//设置字符集编码
header("Content-type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin:*');

//判断是否传值
if (empty($_GET['jiemian_value'])) {
	exit("必填项，内容不能为空");
}else{
	exit("信息已通过验证");
}
