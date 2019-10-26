$(function (){
	//获取元素
	var $nav_left = $('#nav_left');
	var $nav_right = $('#nav_right');
	var $free = $('#free');//设置免费注册4个字的颜色
		$free.css('color','#e33333');//设置免费注册4个字的颜色
	var $all_city = $nav_left.children('#all_city');
	var $nav_xiala_shows1 = $('.nav_xiala_shows1');
	var $nav_xiala_shows2 = $('.nav_xiala_shows2');
	var $nav_xiala_shows3 = $('.nav_xiala_shows3');
	var $nav_xiala_shows4 = $('.nav_xiala_shows4');
	var $nav_xiala_shows5 = $('.nav_xiala_shows5');
	var $nav_xiala_shows6 = $('.nav_xiala_shows6');
	var $shopping = $('#shopping');
	var $nav_xiala_show = $('.nav_xiala_show');
	var $nav_xiala_show2 = $('.nav_xiala_show2');
	var $nav_xiala_show3 = $('.nav_xiala_show3');
	var $nav_xiala_show4 = $('.nav_xiala_show4');
	var $nav_xiala_show_all = $('.nav_xiala_show_all');
	var $left_cebianlan = $('#left_cebianlan');//轮播图的左边侧边栏
	var $left_cebianlan_lis =$left_cebianlan.children().children();
	// console.log($left_cebianlan_lis);


	//轮播图左边的侧边栏的移入和移出效果
	$left_cebianlan_lis.hover(
		function (){
			$(this).find('#right_cebianlan').show();
		},
		function (){
			$(this).find('#right_cebianlan').hide();
		}
	);
	// 第二个导航条下的第一个a标签鼠标滑过的时候显示对应的下拉菜单
	$('#wrap_left_cebianlan').hover(function (){
		$('#left_cebianlan').show();
		$('#left_cebianlan').children().show();
	},function (){
		$('#left_cebianlan').hide();
		$('#left_cebianlan').children().hide();	
	})

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
		
		},
		function (){

			$nav_xiala_show4.hide();
		}
	);
	//购物车的jQuery效果
	$corver_border =$('#corver_border');
	$shopping.hover(
		function (){
			$nav_xiala_shows6.show();
			// $nav_xiala_shows6.css('borderTop','0px');
			$(this).css('border','1px solid #ccc');
			$(this).css('borderBottom','');
			$corver_border.css('display','block');
		},
		function (){
			
			$(this).css('border','');
			$nav_xiala_shows6.hide();
			$corver_border.css('display','none');
		}
	);
})
//搜索框中的下拉菜单jQuery效果
$(function (){

	$('.text')
	.on('focus keyup', function (){
		var text = $(this).val().trim();
		if(text){
			$('#form_input_menu').show();
		}
	})
	.blur(function (){
		$('#form_input_menu').hide();
	})
})
// 点击更多按钮和多选按钮后，显示的内容
$(function (){
	//更多按钮
	$('.options_more').click(function (){
		if($(this).html().substring(0,2) =='更多'){
			// console.log($(this).html().substring(0,2));
			$('#shoes_pinpai').css({
				height:'190px',
				overflow:'visible',
			});
			$('#all_pinpai').show();
			$('#close_show_options_more_and_options_choose').hide();
			$('.show_options_more_and_options_choose').children('ul').css('top',40)
	
			$(this).html('收起').append('<i class="sanjiao"></i>');
			$('.options_more').children().css('backgroundPosition','4px -28px');
		}else{
			// console.log($(this).html().substring(0,2));
			$('#shoes_pinpai').css({
			height:'120px',
			overflow:'hidden',
			});
			$('#all_pinpai').hide();
			$('#close_show_options_more_and_options_choose').hide();
			$(this).html('更多').append('<i class="sanjiao"></i>');
			$('.show_options_more_and_options_choose').children('ul').css('top',10)
		
			$('.sanjiao').css('backgroundPosition','4px 7px');;

		}
	})
	$('.options_more').hover(
		function(){
			if($('.options_more').html().substring(0,2)=='更多'){
				$('.options_more').children().css('backgroundPosition','4px -10px');
			}else{
				$('.options_more').children().css('backgroundPosition','4px -45px');
			}
		},
		function(){
			if($('.options_more').html().substring(0,2)=='更多'){
				$('.options_more').children().css('backgroundPosition','4px 7px');
			}else{
				$('.options_more').children().css('backgroundPosition','4px -28px');
			}
		}
	)
	// 多选
	$('.options_choose').click(function (){
			$('#shoes_pinpai').css({
				height:'190px',
				overflow:'visible',
			});
			$('#all_pinpai').show();
			$('#close_show_options_more_and_options_choose').show();
			$('.options').hide();
			$('.show_options_more_and_options_choose').children('ul').css('top',40)
	})
	//取消按钮
	$('#close_show_options_more_and_options_choose').click(function (){
		$('#shoes_pinpai').css({
			height:'120px',
			overflow:'hidden',
			});
			$('#all_pinpai').hide();
			$('#close_show_options_more_and_options_choose').hide();
			$('.options').show();
			$('.show_options_more_and_options_choose').children('ul').css('top',10)
	})

})
// 鞋的品牌中的27个品牌tab
var muqian_index = 0;
$(function (){
	$('#all_pinpai').children().children().mouseover(function (){
		var all_pinpai_ul_li_index =  $(this).index();

	 	$('.show_options_more_and_options_choose').children('ul').eq(muqian_index).css('display','none');
	 	$('.show_options_more_and_options_choose').children('ul').eq(all_pinpai_ul_li_index).css('display','block');
	 	muqian_index = all_pinpai_ul_li_index;
	})
})
//高级选项对应的7个tab选项卡
var muqian_trig_item_index = 0;
$(function (){
	$('.trig_item').hover(
		function (){
			var trig_item_index = $(this).index();
			$('.shoes_gaojichoose_caidan').eq(muqian_trig_item_index).hide();
			$('.shoes_gaojichoose_caidan').eq(trig_item_index).show().hover(
				function (){
					$(this).show();
					$('.arrow').eq(trig_item_index).css('background-position','4px -27px');
					$('.trig_item').eq(trig_item_index).css({
						borderColor: '#999',
						borderBottomColor: '#fff',
		   				borderBottomWidth: 3,

					})
				},function (){
					$(this).hide();
					$('.arrow').eq(trig_item_index).css('background-position','4px 7px');
					$('.trig_item').eq(trig_item_index).css({
						borderColor:'#ddd',
						borderBottomWidth: 1,
					})

				})
			$('.arrow').eq(trig_item_index).css('background-position','4px -27px');
			$('.trig_item').eq(trig_item_index).css({
				borderColor: '#999',
				borderBottomColor: '#fff',
   				borderBottomWidth: 3,
			})
			muqian_trig_item_index = trig_item_index;

		},
		function (){
			var trig_item_index = $(this).index();
			$('.shoes_gaojichoose_caidan').eq(trig_item_index).hide();
			$('.arrow').eq(trig_item_index).css('background-position','4px 7px');
			$('.trig_item').eq(trig_item_index).css({
				borderColor:'#ddd',
				borderBottomWidth: 1,
			})

		}
	)
})
//所有鞋的列表 鞋的图片和 综合、销量、评论数、新品价格等整体的div 
$(function (){
	// 鼠标滑过li的时候，显示阴影和border
	$('.right_middle_li').hover(
		function (){
			var right_middle_li_index =  $(this).index();
			$(this).css({
				border:'1px solid #E9E9E9',
	    		boxShadow: '0px 1px 2px #999',
			})
			var $p_focus = $('.right_middle_li').eq(right_middle_li_index).find('.p_focus');
			$p_focus.animate({
				top:205,
				opacity:1,
			},30);
			//大图下面的3个小图，鼠标换过的时候，显示对应的大图
			var $tab_lis = $('.right_middle_li').eq(right_middle_li_index).find('.tab_li');//每个li下对应的小图片
			//每个li下对应的大图片
			var $gl_li_wrap_a_bigtu = $('.right_middle_li').eq(right_middle_li_index).find('.gl_li_wrap_a_bigtu');
			//大图片目前的默认索引值
			var tab_li_muqian_idnex = 0;

			$tab_lis.mouseover(function(){
				var tab_li_index = $(this).index();
				$gl_li_wrap_a_bigtu.eq(tab_li_muqian_idnex).hide();
			 	$gl_li_wrap_a_bigtu.eq(tab_li_index).show();
				
				//自身的边框变成红色，并且不消失
				$tab_lis.eq(tab_li_muqian_idnex).css({
					background: '#fff',
   					border: '1px solid  #ddd',
				})
				$tab_lis.eq(tab_li_index).css({
					background: '#e4393c',
   					border: '1px solid  #e4393c',
				})
				tab_li_muqian_idnex = tab_li_index;
			})

		},
		function (){
			$(this).css({
				border:'1px solid #fff',
				boxShadow: '',
			})
			$('.p_focus').animate({
				top:236,
				opacity:0,
			},10)
		}
	)
})