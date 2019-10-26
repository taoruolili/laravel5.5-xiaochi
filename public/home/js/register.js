$(function (){

	var $input_texts = $('.input_texts');
	var $prompt_information_p = $('.prompt_information').children('p');
	// 输入框获取焦点和失去焦点
	$input_texts.focus(function (){

		$(this).next('.prompt_information').children('p').show();
		$(this).siblings('.input_placeholder').hide();

	}).blur(function (){
		$(this).next('.prompt_information').children('p').hide();
		var jiemian_value = $(this).val().trim();

		if(jiemian_value){
			$(this).siblings('.input_placeholder').hide();
		}else{

			$(this).siblings('.input_placeholder').show();
		}
		var index = $(this).index();

		// 用ajax来获取服务端的值，然后显示出来
		var xml = new XMLHttpRequest();
		xml.onreadystatechange = function (){
			if(xml.status ==200 && xml.readyState ==4){
				// 得到服务端返回的数据
				if(xml.responseText =='信息已通过验证'){

					$input_texts.eq(index).siblings('.server_message').css('color','green');
				}else{
					$input_texts.eq(index).siblings('.server_message').css('color','red');
				}
				$input_texts.eq(index).siblings('.server_message').html(xml.responseText);
			}
			
		}
		xml.open('GET','http://localhost/liu/js/register.php?jiemian_value='+jiemian_value,true);

		xml.send();
		
	})


})