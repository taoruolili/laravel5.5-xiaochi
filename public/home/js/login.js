$(function (){

	$('.click_btns').click(function (){
		// 要想得到索引值是从0开始的，必须要把所有的东西用一个div包裹起来才可以，
		var click_btns_index = $(this).index();

		if(click_btns_index == 0){
	
			$('#wrap_login_alter_ltem2_and_login_alter_ltem3').show();
			$('#login_alter_ltem5').hide();
			$('.click_btns').eq(0).css({
    			fontWeight: 'bold',
   				color: '#e4393c',
    		})
    		$('.click_btns').eq(1).css({
    			fontWeight: 0,
   				color: '#999',
    		})
    		//扫码登陆中的中间2个图片的显示效果
			$('#net_bug').animate({left:0},300).show();
			$('#denglu_show_imgs').delay(300).show(0);

		}else{

			$('.click_btns').eq(1).css({
    			fontWeight: 'bold',
   				color: '#e4393c',
    		})
    		$('.click_btns').eq(0).css({
    			fontWeight: 0,
   				color: '#999',
    		})

			$('#wrap_login_alter_ltem2_and_login_alter_ltem3').hide();
			$('#login_alter_ltem5').show();
		}
	})

	//用户名里面输入内容的时候，显示右边的X号
	$('.input_text').keyup(function (){
		var input_value = $(this).val().trim();
		if(input_value){
			$('.clear_btn').show();

			// 点击清除输入框文字和X号
			$('.clear_btn').click(function (){
				console.log('被点击了')
				$('.input_text').val('');
				$('.clear_btn').hide();
			})
		}else{
			$('.clear_btn').hide();
		}
	})

	$('#login_alter_ltem2').hover(
		function (){
		
			//扫码登陆中的中间2个图片的显示效果
			$('#net_bug').stop().animate({left:0},300);		
			
			if($('#net_bug').position().left == 90){
				$('#denglu_show_imgs').fadeIn(300);
			}	
		},
		function (){
			
			$('#denglu_show_imgs').hide();
			$('#net_bug').stop().animate({left:'90px'},300);	
		}
	)

	//进入后面后，扫码登陆中的手机图片的显示效果
	$('#denglu_show_imgs').show();
	var run3 = setInterval(function (){

		$('#denglu_show_imgs').hide();
		$('#net_bug').animate({left:90},300);
		clearInterval(run3);
	},3000)

})