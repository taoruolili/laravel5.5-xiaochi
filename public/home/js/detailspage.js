// 搜索结果的展示的右边内容滑过的时候，显示下拉弹出框
$(function (){
	$('#search_result_right_wrap_content').hover(function (){
			$('#search_result_right_wrap_content_alter').show();
		},function (){
			$('#search_result_right_wrap_content_alter').hide();
		}
	);
})
//放大镜效果的实现
$(function (){
	// 鼠标移入中图片显示小滑块
	$('#wrap_middle_img').hover(
		function (){
			$('#move_small_div').show();
			$('#wrap_big_img').show();
		},
		function (){
			$('#move_small_div').hide();
			$('#wrap_big_img').hide();
		}
	)
	// 鼠标在中图片移动的时候，小滑块跟着移动
	$('#wrap_middle_img').mousemove(function (e){
		// 获取事件源e
		var e = e || window.event;
		// 得到小滑块实时显示的位置，x y轴坐标
		// var new_move_small_div_left = e.clientX - $('#wrap_middle_img').offset().left -  $('#move_small_div').width() / 2;
		// var new_move_small_div_top = e.clientY - $('#wrap_middle_img').offset().top -  $('#move_small_div').height() / 2;
		var new_move_small_div_left = e.pageX - $('#wrap_middle_img').offset().left -  $('#move_small_div').width() / 2;
		var new_move_small_div_top = e.pageY - $('#wrap_middle_img').offset().top -  $('#move_small_div').height() / 2;
		// console.log(new_move_small_div_top)
		// 小欢快临界点的判断
		if(new_move_small_div_left >= ($('#wrap_middle_img').width() - $('#move_small_div').width())){
			new_move_small_div_left = ($('#wrap_middle_img').width() - $('#move_small_div').width());
		}
		if(new_move_small_div_left<=0){
			new_move_small_div_left=0;
		}
		if(new_move_small_div_top >= ($('#wrap_middle_img').height() - $('#move_small_div').height())){
			new_move_small_div_top = ($('#wrap_middle_img').height() - $('#move_small_div').height());
		}
		if(new_move_small_div_top<=0){
			new_move_small_div_top=0;
		}
		// 设置小滑块移动的距离
		$('#move_small_div').css({
			left:new_move_small_div_left,
			top:new_move_small_div_top,
		})
		//设置大图片的效果 按照比例来算，小滑块移动的距离/小div的宽度 = 大图片移动的距离/大图片的宽度
		// 即：大图片移动的距离= 小滑块移动的距离*大图片的宽度/小div的宽度
		var wrap_big_img_newLeft = new_move_small_div_left * $('.big_imgs').width() /$('#wrap_middle_img').width();
		var wrap_big_img_newTop = new_move_small_div_top * $('.big_imgs').height() /$('#wrap_middle_img').height();
		$('.big_imgs').css({
			left: -wrap_big_img_newLeft,
			top: -wrap_big_img_newTop,
		})
	})
	//小图片的左右箭头的效果
	// 左箭头
	var $small_img_divs_ul_li =  $('#small_img_divs').children().children();
	console.log($small_img_divs_ul_li.position().left)

	$('.small_img_divs_btn_left').click(function (){
		
		if($small_img_divs_ul_li.position().left == 5){
				return;
			}
		$small_img_divs_ul_li.animate({left: 5},500);
		
	})
	$('.small_img_divs_btn_right').click(function (){
		if($small_img_divs_ul_li.position().left == -55){
				return;
			}
		$small_img_divs_ul_li.animate({left: -55},500);
	})
	//小图片划入的时候，显示红色的边框
	var small_img_a_nowPage_index = 0;
	$('.small_img_a').mouseover(function (){
		var small_img_a_index = $(this).index();

		$('.small_img_a').eq(small_img_a_nowPage_index).css('border','2px solid #fff');
		$('.small_img_a').eq(small_img_a_index).css('border','2px solid #E4393C');
		small_img_a_nowPage_index = small_img_a_index;
		// 设置图片的src
		var all_tupian_src = $(this).children().attr('src');
		$('#wrap_middle_img').children().children('img').attr('src',all_tupian_src);
		$('.big_imgs').attr('src',all_tupian_src);
	})

})
// 放大镜右侧的轮播图的效果的实现
$(function (){
	// 需要移动的是ul,每次移动一个里的长度510
	var $up_fan = $('.up_fan');
	var $down_fan = $('.down_fan');
	// 上翻
	$up_fan.click(function (){
		nextPage(true);
	})
	// 下翻页
	$down_fan.click(function (){
		nextPage(false);
	})
	var flag = false;//默认按钮没有点击
	function nextPage(next){
		if(flag){
				console.log('终止程序');
				return;
			}
			flag = true;

		var $wrap_right_lunbo_ul = $('#wrap_right_lunbo').children('ul');//界面的ul，需要移动的ul
		var wrap_right_lunbo_ul_liHeight = $wrap_right_lunbo_ul.children('li').height();//每一个里的高度
		var wrap_right_lunbo_ul_liLength = $wrap_right_lunbo_ul.children('li').length;//每一个里的高度
		var now_ul_positionTop = $wrap_right_lunbo_ul.position().top;//界面目前显示的ul的position的top值
		var moveHeight =next ? wrap_right_lunbo_ul_liHeight : -wrap_right_lunbo_ul_liHeight; //实际每一次移动的距离
		var mubiao_ul_positionTop =now_ul_positionTop + moveHeight ;
		// console.log(wrap_right_lunbo_ul_liLength);

		var setp = moveHeight/17; //每次移动的步径

		var run = setInterval(function (){
			now_ul_positionTop += setp;
			if(mubiao_ul_positionTop == now_ul_positionTop){
				clearInterval(run);
				flag = false;
				if(now_ul_positionTop == -wrap_right_lunbo_ul_liHeight*6){
					now_ul_positionTop= -wrap_right_lunbo_ul_liHeight;
				}
				if(now_ul_positionTop==0){
					now_ul_positionTop = -wrap_right_lunbo_ul_liHeight*5;
				}
			}

			$wrap_right_lunbo_ul.css('top',now_ul_positionTop);

		},30);
	}
})
//左侧店内分类的效果实现,代码有问题
$(function (){
	$('.show_shoes_type_i').click(function (){
		// var show_shoes_type_i_index =  $(this).index();
		 if($(this).attr('class') == 'show_shoes_type_i'){
        	$(this).attr('class', 'show_shoes_type_i2');
        	// 显示对应的写的类型
      		// $(this).parent().css('height','213px');
      		var show_hidden_shoes_type_height = $(this).siblings('.show_hidden_shoes_type').height()+10;
      		if(show_hidden_shoes_type_height<=10){
      			show_hidden_shoes_type_height=34;
      		}
      		$(this).siblings('.show_hidden_shoes_type').show();
      		$(this).parent().css('height',show_hidden_shoes_type_height);
   		 }else{
      		$(this).attr('class', 'show_shoes_type_i');
      		// 隐藏对应的写的类型
      		$(this).parent().css('height','34');
      		$('.show_shoes_type_i').siblings('.show_hidden_shoes_type').hide();
      	}	
	})
})
// 店铺热销 热门关注 的选项卡功能的效果实现
$(function (){
	var muqian_index= 0;
	$('.shoes_zhenti_w_left_type_tab').click(function (){
		var click_index = $(this).index();
		// 当前界面的隐藏
		$('.shoes_zhenti_w_left_type_tab').eq(muqian_index).css({
			backgroundColor: '#f7f7f7',
		})
		$('.shoes_zhenti_w_left_type_tab').eq(muqian_index).children('.sanliuyidu_title_tab').css('color','#666');
		$('.shoes_zhenti_w_left_type_tab').eq(muqian_index).children('.sanliuyidu_title_tab_show_img').removeClass('sanliuyidu_title_tab_show_img_actvie');
		// 鼠标点击的显示
		$('.shoes_zhenti_w_left_type_tab').eq(click_index).css({
			backgroundColor: '#E4393C',
		})
		$('.shoes_zhenti_w_left_type_tab').eq(click_index).children('.sanliuyidu_title_tab').css('color','#fff');
		$('.shoes_zhenti_w_left_type_tab').eq(click_index).children('.sanliuyidu_title_tab_show_img').addClass('sanliuyidu_title_tab_show_img_actvie');
		muqian_index = click_index;
	})
})