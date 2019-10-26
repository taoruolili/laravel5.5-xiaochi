$(function (){

	//获取元素
	var $nav_left = $('#nav_left');
	var $free = $('#free');//设置免费注册4个字的颜色
		$free.css('color','#e33333');//设置免费注册4个字的颜色
	var $all_city = $nav_left.children('#all_city');
	var $nav_xiala_shows1 = $('.nav_xiala_shows1');
	var $nav_xiala_shows2 = $('.nav_xiala_shows2');
	var $nav_xiala_shows3 = $('.nav_xiala_shows3');
	var $nav_xiala_shows4 = $('.nav_xiala_shows4');
	var $nav_xiala_shows5 = $('.nav_xiala_shows5');
	var $nav_xiala_show = $('.nav_xiala_show');
	var $nav_xiala_show2 = $('.nav_xiala_show2');
	var $nav_xiala_show3 = $('.nav_xiala_show3');
	var $nav_xiala_show4 = $('.nav_xiala_show4');

	//显示城市的下拉菜单
	$nav_left.hover(
		function(){

			$all_city.show();
			$all_city.css({
				borderTop:'0px',
				boxShadow: '0px 0px 0px '
			});
			$(this).css({
				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:'0px'
			})
		},
		function (){
			$all_city.hide();
			$(this).css({
				background:'',
				border:''
			})
		}
	);
	//显示导航条的所有的下拉菜单--?n能够把代码优化一下，重复代码太多了？？？？
	$nav_xiala_shows1.hover(
		function (){
			$nav_xiala_show.show().css({
				borderTop:'0px',
				boxShadow: '0px 0px 0px '
			});
			$(this).css({
				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:'0px'
			})
			console.log('鼠標移入');
		},
		function (){

			$nav_xiala_show.hide();
			$(this).css({
				background:'',
				border:''
			})
			console.log('鼠標移出');
		}
	);
	$nav_xiala_shows2.hover(
		function (){
			$nav_xiala_show2.show().css({
				borderTop:'0px',
				boxShadow: '0px 0px 0px '
			});
			$(this).css({
				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:'0px'
			})
		},
		function (){

			$nav_xiala_show2.hide();
			$(this).css({
				background:'',
				border:''
			})
		}
	);
	$nav_xiala_shows3.hover(
		function (){
			$nav_xiala_show3.show().css({
				borderTop:'0px',
				boxShadow: '0px 0px 0px '
			});
			$(this).css({
				background:'#fff',
				border:'1px solid #ccc',
				borderBottom:'0px'
			})
		},
		function (){

			$nav_xiala_show3.hide();
			$(this).css({
				background:'',
				border:''
			})
		}
	);
	$nav_xiala_shows4.hover(
		function (){
			$nav_xiala_show4.show();
		},
		function (){

			$nav_xiala_show4.hide();
		}
	);
	$nav_xiala_shows5.hover(
		function (){
			$nav_xiala_show4.show();
			console.log('鼠标你牛');
		},
		function (){
			console.log('鼠标移出');

			$nav_xiala_show4.hide();
		}
	);

})

$(function (){
	var $choose_tab_content_ul = $('.choose_tab_content_ul');//选项卡对应的4个ul

	//页面的4个选项卡效果
	var $choose_tab_a =  $('#choose_tab').children();
	var tab_index = 0;//选项卡的默认的索引值

	function start_lunbo(){

		$choose_tab_a.mouseover(function(){
			//调整选项卡额颜色
			var mibiao_index = $(this).index();
			$choose_tab_a.eq(tab_index).css({
				color: '#666',
		   		fontWeight: 0,
		   		borderBottom: '0px solid #fff',
			})
			//显示对应的选项卡的内容
			$choose_tab_content_ul.eq(tab_index).hide();

			tab_index = mibiao_index;

			$choose_tab_a.eq(tab_index).css({
				color: '#e4393c',
		   		fontWeight: 700,
		   		borderBottom: '2px solid #e4393c',
			})
			//显示对应的选项卡的内容
			$choose_tab_content_ul.eq(tab_index).show();
		
			// 显示对应的选项卡的内容下的左右箭头
			$choose_tab_content_ul.eq(tab_index).hover(
				function(){
					//如果页面只有一个li，则不需要显示左右箭头
					if($choose_tab_content_ul.eq(tab_index).children('li').length ==1){
						$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_right_brn').hide();
						$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_left_brn').hide();
						return;
					}
					$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_right_brn').show();
					$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_left_brn').show();
				},
				function(){
					$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_right_brn').hide();
					$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_left_brn').hide();
				}
			);
			// 左右翻页，显示对应的选项卡的内容下的相应的li
			// 向右翻页
			var gundong_index =0;
			$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_right_brn').click(function(){

				$(this).siblings('li').eq(gundong_index).hide();
	
				$(this).siblings('.shopping_lunbo_circle').children().eq(gundong_index).css('backgroundColor','#aaa');

				gundong_index++;

				if(gundong_index > $(this).siblings('li').length-1){
					gundong_index = 0;
				}
				$(this).siblings('li').eq(gundong_index).show();

				$(this).siblings('.shopping_lunbo_circle').children().eq(gundong_index).css('backgroundColor','#e4393c');
			})
			// 向左边翻页
			$choose_tab_content_ul.eq(tab_index).children('.choose_tab_content_left_brn').click(function(){

				$(this).siblings('li').eq(gundong_index).hide();
	
				$(this).siblings('.shopping_lunbo_circle').children().eq(gundong_index).css('backgroundColor','#aaa');

				gundong_index--;

				if(gundong_index <0){
					gundong_index = $(this).siblings('li').length-1;
				}

				$(this).siblings('li').eq(gundong_index).show();

				$(this).siblings('.shopping_lunbo_circle').children().eq(gundong_index).css('backgroundColor','#e4393c');
			})
			// 每个选项卡对应的小圆点的效果
			var moren_index =0;
			$choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children().mouseover(function(){
		
				console.log($choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children())
				var shopping_lunbo_circles_index = $(this).index();

				$(this).parent('.shopping_lunbo_circle').siblings('li').eq(moren_index).hide();

				$choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children().eq(moren_index).css('backgroundColor','#aaa');

				moren_index = shopping_lunbo_circles_index;
				$(this).parent('.shopping_lunbo_circle').siblings('li').eq(moren_index).show();
	
				$choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children().eq(moren_index).css('backgroundColor','#e4393c');
				
			})

		})	


	}
	start_lunbo();
	// 进入界面后，默认显示的轮播就可以滑动
	$choose_tab_content_ul.eq(0).hover(
		function(){
		$choose_tab_content_ul.eq(0).children('.choose_tab_content_right_brn').show();
		$choose_tab_content_ul.eq(0).children('.choose_tab_content_left_brn').show();
		},
		function(){
		$choose_tab_content_ul.eq(0).children('.choose_tab_content_right_brn').hide();
		$choose_tab_content_ul.eq(0).children('.choose_tab_content_left_brn').hide();
		}
	);
	var gundong1_index= 0
	$choose_tab_content_ul.eq(0).children('.choose_tab_content_right_brn').click(function(){
			
			$(this).siblings('li').eq(gundong1_index).hide();

			$(this).siblings('.shopping_lunbo_circle').children().eq(gundong1_index).css('backgroundColor','#aaa');

			gundong1_index++;

			if(gundong1_index == $(this).siblings('li').length){
				gundong1_index = 0;
			}

			$(this).siblings('li').eq(gundong1_index).show();

			$(this).siblings('.shopping_lunbo_circle').children().eq(gundong1_index).css('backgroundColor','#e4393c');
	})
	// 向左边翻页
	$choose_tab_content_ul.eq(0).children('.choose_tab_content_left_brn').click(function(){

		
			$(this).siblings('li').eq(gundong1_index).hide();

			$(this).siblings('.shopping_lunbo_circle').children().eq(gundong1_index).css('backgroundColor','#aaa');

			gundong1_index--;

			if(gundong1_index <0){
				gundong1_index = $(this).siblings('li').length-1;
			}
		
			$(this).siblings('li').eq(gundong1_index).show();

			$(this).siblings('.shopping_lunbo_circle').children().eq(gundong1_index).css('backgroundColor','#e4393c');
	})
	// 每个选项卡对应的小圆点的效果
	var moren_index =0;
	$choose_tab_content_ul.eq(0).children('.shopping_lunbo_circle').children().mouseover(function(){
			var shopping_lunbo_circles_index = $(this).index();

			$(this).parent('.shopping_lunbo_circle').siblings('li').eq(moren_index).hide();
			$choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children().eq(moren_index).css('backgroundColor','#aaa');
			
			moren_index = shopping_lunbo_circles_index;

			$(this).parent('.shopping_lunbo_circle').siblings('li').eq(moren_index).show();
			$choose_tab_content_ul.eq(tab_index).children('.shopping_lunbo_circle').children().eq(moren_index).css('backgroundColor','#e4393c');
			
	})

})