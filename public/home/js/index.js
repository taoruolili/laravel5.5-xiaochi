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
	//购物车的jQuery效果
	$corver_border =$('#corver_border');
	$shopping.hover(
		function (){
			$nav_xiala_shows6.show();
			// $nav_xiala_shows6.css('borderTop','0px');
			$(this).css('border','1px solid #ccc');
			$(this).css('borderBottom','');
			$corver_border.css('display','block');
			console.log('鼠标你牛');
		},
		function (){
			console.log('鼠标移出');
			$(this).css('border','');
			$nav_xiala_shows6.hide();
			$corver_border.css('display','none');
		}
	);

	//轮播图左边的侧边栏的移入和移出效果
	$left_cebianlan_lis.hover(
		function (){
			$(this).find('#right_cebianlan').show();
		},
		function (){
			$(this).find('#right_cebianlan').hide();
		}
	);




	//轮播图的效果js开始位置
	var $lun = $('#lun'); //最外面的轮播div
	var $lun_lis = $lun.find('li');//轮播图的所有li
	var $left_btn = $('#left_btn');//左箭头
	var $right_btn = $('#right_btn');//右箭头
	var $small_circle = $('#small_circle');//小圆点最外面的div
	var $small_circle_span = $small_circle.find('span');//小圆点最外面的div下的所有圆点span
	// console.log($small_circle_span);
	var lun_index = 0;//当前界面的索引值.默认为0 
	var run;
	function nextpage (){
		run = setInterval(function(){
			//当前界面显示的量li隐藏
			$lun_lis.eq(lun_index).fadeOut(1000).removeClass('active');
			$small_circle_span.eq(lun_index).removeClass('circle_active');
			 lun_index++;
			 if(lun_index > $lun_lis.length -1){
			 	lun_index=0;
			 }
			//下一个对应的li显示
			$lun_lis.eq(lun_index).fadeIn(1000).addClass('active');
			$small_circle_span.eq(lun_index).addClass('circle_active');
			lun_index = lun_index;
		},3000);
	}
	//进入页面调用nextPage函数
	nextpage();
	//设置鼠标移入和移出的效果
	$lun.hover(
		function(){
			clearInterval(run);
		},
		function(){
			nextpage ();
		}
	);
	//点击左边箭头
	$left_btn.click(function (){
		// console.log('左箭头点击了');
		//向上边移动一个
		$lun_lis.eq(lun_index).fadeOut(1000).removeClass('active');
		$small_circle_span.eq(lun_index).removeClass('circle_active');
		 lun_index--;
		 if(lun_index <0 ){
			 lun_index=$lun_lis.length -1;
		 }
		//下一个对应的li显示
		$lun_lis.eq(lun_index).fadeIn(1000).addClass('active');
		$small_circle_span.eq(lun_index).addClass('circle_active');


	});
	$right_btn.click(function (){
		// console.log('右箭头点击了');
		//向下边移动一个
		$lun_lis.eq(lun_index).fadeOut(1000).removeClass('active');
		$small_circle_span.eq(lun_index).removeClass('circle_active');
		 lun_index++;
		 if(lun_index >$lun_lis.length -1){
			 lun_index=0;
		 }
		//下一个对应的li显示
		$lun_lis.eq(lun_index).fadeIn(1000).addClass('active');
		$small_circle_span.eq(lun_index).addClass('circle_active');
	});

	//鼠标滑过小圆点，显示对应的图片
	$small_circle_span.mouseenter(
		function (){
			// console.log('鼠标移入圆点');
			// console.log($(this).index());
			$lun_lis.eq(lun_index).fadeOut(1000).removeClass('active');
			$small_circle_span.eq(lun_index).removeClass('circle_active');
			// 把鼠标移入圆点的div赋值给lun_index
			lun_index = $(this).index();
			//显示鼠标移入的圆点和图片
			$lun_lis.eq(lun_index).fadeIn(1000).addClass('active');
			$small_circle_span.eq(lun_index).addClass('circle_active');
		}
	);
	//轮播图的效果js结束位置
	// 轮播图下的第一个内容开始位置
	//(1)页面带有秒杀的,开始位置的jQuery效果
	var $son5_hour = $('#son5_hour');//小时显示的元素
	var $son5_minute = $('#son5_minute');//分钟显示的元素
	var $son5_second = $('#son5_second');//秒数显示的元素
	//定义个自动补充前导0的时间函数
	function buTime0( i ){
		return i = i <10 ? '0'+ i : i ;
	}
	// 定义活动开始的时间
	var start = new Date(2018,03,22,22,00,00);
	var cha =0;

	function startTimes(){
		var nowTime = new Date();

		cha = start - nowTime;
		// console.log(cha);

		if(cha<=0){
			// $son5_hour.html('00');
			// $son5_minute.html(buTime0(newSecond));
			// $son5_second.html(buTime0(newMinute));
			$son5_hour.html('活动');
			$son5_minute.html('已经');
			$son5_second.html('结束');
			return;
		}

		//得到差值后，把差值转换成对应的时分秒
		var newHour = Math.floor(cha / 1000 / 60 / 60) ;//小时

		cha = cha - newHour*60*60*1000;//去掉小时对应的毫秒数后，得到剩下的毫秒数
		var newSecond = Math.floor(cha/1000/60);

		cha = cha - newSecond*60*1000;
		var newMinute = Math.floor(cha/1000);
		// console.log(newHour+':'+ newSecond +':'+ newMinute );

		// 让时间显示在界面上
		$son5_hour.html(buTime0(newHour));
		$son5_minute.html(buTime0(newSecond));
		$son5_second.html(buTime0(newMinute));
	}

	startTimes();

	//定义定时器，让时间每一秒自动变换
	var run2 = setInterval(function (){

		if (cha<=0) {
			clearInterval(run2);
			// console.log('定时器停止了')
		};

		startTimes();
	},1000)
	//(1)页面带有秒杀的,结束位置的jQuery效果







	// (2)秒杀右边的轮播图开始位置的jQuery效果
	var $content_one_zhong = $('#content_one_zhong');//最外面不动的div
	var $move_ul = $('#move_ul');//移动的ul
	var $move_ul_li = $move_ul.children();;//所有的li
	var $move_ul_li_a = $move_ul_li.children();;//所有的a
	var move_ul_li_count = $move_ul_li.length-2;
	var move_ul_li_width = $move_ul_li.eq(0).width();//移动的ul
	// console.log(move_ul_li_count);
	var $content_one_zhong_leftBtn = $('#content_one_zhong_leftBtn');//左边按钮
	var $content_one_zhong_rightBth = $('#content_one_zhong_rightBth');//右边按钮
	var flag2 = false;//默认是没有点击效果的

	function clickBtn (next){
		if(flag2){
			return;
		}
		flag2=true;
		var targetLength = next ? -move_ul_li_width : move_ul_li_width;//移动的目标长度等于一个li的长度然后停止定时器:800

		//得到当前界面显示的li对应的定位，left是多少
		var positionLeft = $move_ul.position().left;//默认-800px

		var step = targetLength/20;//每次移动步径

		var target_positionLeft = positionLeft+ targetLength;//目标位置的定位left的距离
		// console.log('目标位置的定位left的距离：'+target_positionLeft);
		var run3 = setInterval(function (){
			positionLeft +=step;
			// console.log(positionLeft);
			if(target_positionLeft == positionLeft){
		 		clearInterval(run3);
		 		flag2=false;

		 		if(positionLeft == -move_ul_li_width*(move_ul_li_count+1)){
		 			positionLeft =  -move_ul_li_width;
		 		}
		 		if(positionLeft ==0){
		 			positionLeft = -move_ul_li_width*move_ul_li_count;
		 		}
			}
			//这一步落下，是看不到效果的，给移动的ul设置新的定位的left的值
			$move_ul.css('left',positionLeft);


		},30)

	}
	
	// 左边按钮
	$content_one_zhong_leftBtn.click(function (){
		clickBtn(false);
	});
	//右边按钮
	$content_one_zhong_rightBth.click(function (){
		clickBtn(true);
	});
	//鼠标移入a标签的时候，改变其下的p标签字体变成红色
	$move_ul_li_a.hover(
		function (){
			$(this).children('p').css('color','#c81623');
			
		},
		function (){
			$(this).children('p').css('color','#666666');
		}
	)

	//(2)秒杀右边的轮播图结束位置的jQuery效果
	//(3)秒杀的最右边的2个图片小轮播，开始位置
	$content_one_right_ul = $('.content_one_right_ul');
	$content_one_right_ul_li = $('.content_one_right_ul_li');
	var content_one_right_ul_li_aWidth = $content_one_right_ul_li.children().eq(0).width();
	var content_one_right_ul_li_length = $content_one_right_ul_li.children().length;//3
	var li_tidth = $content_one_right_ul_li.width();//360px
	var step2 = -20;//每次移动的步径
	var run5;//定时器的变量

	//小圆点随着图片一起滚动
	$content_one_right_ul_li_div_span = $('#content_one_right_ul_li_div').children();
	var span_length = $content_one_right_ul_li_div_span.length
	var span_index = 0;//小圆点默认是0

	function run4Times (){
		run5 = setInterval(function (){
			var content_one_right_ul_li_positionLeft = $content_one_right_ul_li.position().left;//界面显示的li的定位的left值
			var mubiao_positionLeft = content_one_right_ul_li_positionLeft + (-content_one_right_ul_li_aWidth); //目标位置的定位的left值
			var run4 = setInterval(function (){
				content_one_right_ul_li_positionLeft += step2;
				if(mubiao_positionLeft == content_one_right_ul_li_positionLeft){
					clearInterval(run4);
					if(content_one_right_ul_li_positionLeft == -(content_one_right_ul_li_length-1)*content_one_right_ul_li_aWidth){
						content_one_right_ul_li_positionLeft=0;
					}	
				}
				$content_one_right_ul_li.css('left',content_one_right_ul_li_positionLeft);

			},50)

			//小圆点随着图片一起滚动
			$content_one_right_ul_li_div_span.eq(span_index).removeClass('content_one_right_small_clrcle');
			span_index++;
			if(span_index>span_length-1){
				span_index=0;
			}
			$content_one_right_ul_li_div_span.eq(span_index).addClass('content_one_right_small_clrcle');

		},3000);
	}
	// 调用方法
	run4Times ();
	
	$content_one_right_ul_li_div_span.hover(
		function (){
			//当前界面显示的小圆点样式和对应的图片隐藏
			$content_one_right_ul_li_div_span.eq(span_index).removeClass('content_one_right_small_clrcle');
			
			span_index = $(this).index();
			//显示鼠标移入的圆点和图片
			$content_one_right_ul_li_div_span.eq(span_index).addClass('content_one_right_small_clrcle');
			if(span_index==0){
				$content_one_right_ul_li.animate({left:'0'} , 300);
				clearInterval(run5);

			}else{
				$content_one_right_ul_li.animate({left:'-180'} , 300);
				clearInterval(run5);
			}

		},
		function (){
			run4Times ();
		}
	);
	//(3)秒杀的最右边的2个图片小轮播，结束位置
	// 轮播图下的第一个内容结束位置

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
//鼠标竖向滚动的距离超过700px，搜索框固定在顶部--延时显示下拉搜索菜单没有实现，sideDown()居然不能实现，奇怪
$(function (){
	$(window).scroll(function (){
		var scrollTop_length = $(this).scrollTop();
		if(scrollTop_length == 0){
			console.log('滚动距离为0 ，停止滚动');
			return;
		}
		if(scrollTop_length >= 700){
			
			$('#search').css({
				position:'fixed',
				top:0,
				zIndex:8000,
				background:'#fff',
				height:50,
				borderBottom:'2px solid #F10214',
				boxShadow: '2px 2px 2px rgba(0,0,0,.2)',
				width:'100%',
				// transition:'height .5s linear',
			});
			$('.w').css('width','100%');
			$('.text').css('background','#EFEFEF');
			$('.w').find('.from').css({
				    position: 'absolute',
				    left: '50%',
				    top: 8,
				    marginLeft:-275
			});
			$('#shopping').css('display','none');
			$('#gundongsearch').css({
				width: 1190,
				height: 50,
				margin:' 0 auto',
				position:' relative',
			})
			$('#form_input_menu').css('top' ,42);
		}else{
			$('#form_input_menu').css('top' ,62);
			$('#search').css({
				width: 1190,
				height: 60,
				margin:'0 auto',
				position:'relative',
				top:'',
				zIndex:'',
				background:'',
				height:'',
				borderBottom:'',
				boxShadow: ''
			});
			$('.w').css('width','1190px');
			$('.text').css('background','');
			$('.w').find('.from').css({
				    position: 'absolute',
				    left: 320,
				    top: 25,
				     marginLeft:''
			});
			$('#shopping').css('display','block');
			$('#gundongsearch').css({
				width: 1190,
				height: 60,
				margin:' 0 auto',
			})
		}
	})

})

// 排行榜的jQuery效果--代码过于繁琐，是可以优化的
$(function (){
	//获取元素
	var $tabs_item_all = $('.tabs_item_all');//5个选项卡
	var $tab_show = $('.tab_show');//5个选项卡对应的5个选项内容
	var tab_show_width = $tab_show.width();//当前界面显示的选项卡的所对应的内容的宽度350
	var $paihangbang_circle = $('.paihangbang_circle');//选项卡下面包裹2个圆点的div
	var $tab_show_left = $('.tab_show_left');// 左边小div的宽度350px,右边小div的宽度350px,
	var tab_show_left_width = $tab_show_left.width();// 左边小div的宽度350px;

	//设置鼠标移入移出5个选项内容的效果
	var index=0;
	var paihangbang_circle_smallCircle_index = 0;//界面当前小圆点的索引
	$tabs_item_all.mouseenter(function (){
		var target_index = $(this).index();//移动到的目标的索引

		//当前显示的内容隐藏
		$tab_show.eq(index).hide();
		$tabs_item_all.eq(index).css('color','#666');
		$paihangbang_circle.eq(index).hide();
		
		index = target_index;

		$tab_show.eq(index).show();//5ge选项卡对应的页面内容
		$tabs_item_all.eq(index).css('color','#E33333');//5个选项卡
		$paihangbang_circle.eq(index).show(); //对应页面的包裹小圆点的div显示
			
		$paihangbang_circle.eq(index).children().mouseover(function(){
			// 小圆点移动的时候，样式的改变
			var tab_show_circle = $(this).index();//目标小圆点的索引值

			$paihangbang_circle.eq(index).children().eq(paihangbang_circle_smallCircle_index).css('background','#fff');										   
			$paihangbang_circle.eq(index).children().children().eq(paihangbang_circle_smallCircle_index).css({
					background: '#fff',
					border:'2px solid #B9BEBA',
			});

			paihangbang_circle_smallCircle_index = tab_show_circle;

			$paihangbang_circle.eq(index).children().eq(paihangbang_circle_smallCircle_index).css('background','#fdd9dd');
			$paihangbang_circle.eq(index).children().children().eq(paihangbang_circle_smallCircle_index).css({
				background: '#EB3436',
				border: '2px solid transparent',
			});
			//找到界面显示的圆点的父元素对应的兄弟元素，也就是需要移动的那个div
			var $parent = $paihangbang_circle.eq(index).show().siblings('.move_tab_show_wrap');
	
			if(paihangbang_circle_smallCircle_index == 0){
				if($parent.position().left == -tab_show_left_width){
					$parent.css({
						left:0,
						transition:'all .5s linear',
					})
				}		
			}else{

				if($parent.position().left == 0){
					$parent.css({
						left:-tab_show_left_width,
						transition:'all .5s linear',
					})
				}	
			}
		})
	});

	// 页面进入的时候，默认第一个页面可以滚动
	$paihangbang_circle.eq(0).children().mouseover(function(){
		// 小圆点移动的时候，样式的改变
		var tab_show_circle = $(this).index();//目标小圆点的索引值

		$paihangbang_circle.eq(0).children().eq(paihangbang_circle_smallCircle_index).css('background','#fff');										   
		$paihangbang_circle.eq(0).children().children().eq(paihangbang_circle_smallCircle_index).css({
				background: '#fff',
				border:'2px solid #B9BEBA',
		});

		paihangbang_circle_smallCircle_index = tab_show_circle;

		$paihangbang_circle.eq(0).children().eq(paihangbang_circle_smallCircle_index).css('background','#fdd9dd');
		$paihangbang_circle.eq(0).children().children().eq(paihangbang_circle_smallCircle_index).css({
			background: '#EB3436',
			border: '2px solid transparent',
		});
		if(paihangbang_circle_smallCircle_index == 0){
			if($('.move_tab_show_wrap').eq(0).position().left == -tab_show_left_width){
				$('.move_tab_show_wrap').eq(0).css({
					left:0,
					transition:'all .5s linear',
				})
			}	
		}else{

			if($('.move_tab_show_wrap').eq(0).position().left == 0){
				$('.move_tab_show_wrap').eq(0).css({
					left:-tab_show_left_width,
					transition:'all .5s linear',
				})
			}	
		}
	});
})
//会买专辑JQuery效果
$(function (){
	var $paihanglun1 = $('.paihanglun1');//350px
	var $paihanglun1_ul = $paihanglun1 .children();//1750px;
	var paihanglun1_ul_li = $paihanglun1_ul.children(':first').width();//每一个li的宽度
	var paihanglun1_ul_li_Length = $paihanglun1_ul.children().length-2;//实际显示的图片的个数3
	var $paihang_all_zhong_leftbtn = $('#paihang_all_zhong_leftbtn');//左边按钮
	var $paihang_all_zhong_rightbtn = $('#paihang_all_zhong_rightbtn');//左边按钮
	var $paihang_all_left_son3 = $('#paihang_all_left_son3');//包裹小圆点的div
	var $paihang_all_left_son3_circle2 = $('.left_son3_smallCircle2');
	var $paihang_all_left_son3_circle2_children = $paihang_all_left_son3_circle2.children();

	console.log($paihang_all_left_son3_circle2_children);
	var flag =false; //默认按钮没有点击
	var index = 0; //当前界面的小圆点默认是一个，索引为0
	function nextpage(next){
		if(flag){
			console.log('终止程序');
			return;
		}
		flag =true;
		var move_length ;

		if(typeof next =='boolean'){
			move_length = next ? -paihanglun1_ul_li : paihanglun1_ul_li;
		}else{
			move_length = - (next - index) *paihanglun1_ul_li;
		}

		var step = move_length/14;
		var nowPositionLeft = $paihanglun1_ul.position().left;//当前界面显示的li的图片定位的left
		var muBiaoPositionLeft = nowPositionLeft + move_length;//目标的定位的left
		// console.log(muBiaoPositionLeft);

		var run2 = setInterval(function (){
			nowPositionLeft +=step;

			if(muBiaoPositionLeft == nowPositionLeft){
				clearInterval(run2);
				flag =false;//恢复标记
				// console.log('tingzhi')
				if(nowPositionLeft == -(paihanglun1_ul_li_Length+1)*paihanglun1_ul_li){
					nowPositionLeft = -paihanglun1_ul_li;
				}
				if(nowPositionLeft==0){
					nowPositionLeft =-paihanglun1_ul_li_Length*paihanglun1_ul_li;
				}

			}
			$paihanglun1_ul.css('left',nowPositionLeft);

		},50)
		//实现小圆点随着图片一起移动的效果
		var target_small_circle = 0;//目标小圆点的索引值
		if(typeof next =='boolean'){
			target_small_circle =index+1;
			if(target_small_circle >=3){////向右翻页
					target_small_circle = 0;
				}

		}else{
			target_small_circle= next;
		}
		$paihang_all_left_son3_circle2.eq(index).css('background','#fff');
	    $paihang_all_left_son3_circle2_children.eq(index).css({
	    	background: '#fff',
			border:'2px solid #B9BEBA',
	    });
	    

	    $paihang_all_left_son3_circle2.eq(target_small_circle).css('background','#fdd9dd');
	    $paihang_all_left_son3_circle2_children.eq(target_small_circle).css({
	    	background: '#EB3436',
			border: '2px solid transparent',
	    });
	    index = target_small_circle;
		
	}

	//进入页面图片自动播放
	var run3 = setInterval(function (){
		nextpage(true);
	},4000)
	// 鼠标点击
	$paihang_all_zhong_leftbtn.click(function (){
		nextpage(false);//向左翻页
	})
	
	$paihang_all_zhong_rightbtn.click(function (){
		nextpage(true);//想右翻页

	})

	//鼠标移入小圆点，显示对应的图片，界面目前显示的图片水平隐藏掉
	$paihang_all_left_son3_circle2.mouseover(function (){
		var move_circle2 = $(this).index();

			// $paihang_all_left_son3_circle2.eq(index).css('background','#fff');
		 //    $paihang_all_left_son3_circle2_children.eq(index).css({
		 //    	background: '#fff',
			// 	border:'2px solid #B9BEBA',
		 //    });
		 //    index =  move_circle2;
		 //    if(index >=3){
		 //    	index=0;
		 //    }
		 //    $paihang_all_left_son3_circle2.eq(index).css('background','#fdd9dd');
		 //    $paihang_all_left_son3_circle2_children.eq(index).css({
		 //    	background: '#EB3436',
			// 	border: '2px solid transparent',
		 //    });

			nextpage(move_circle2);
	});
	// $paihang_all_left_son3_circle2.hover(
	// 	function (){
	// 		var move_circle2 = $(this).index();

	// 		$paihang_all_left_son3_circle2.eq(index).css('background','#fff');
	// 	    $paihang_all_left_son3_circle2_children.eq(index).css({
	// 	    	background: '#fff',
	// 			border:'2px solid #B9BEBA',
	// 	    });
	// 	    index =  move_circle2;
	// 	    // if(index >=3){
	// 	    // 	index=0;
	// 	    // }
	// 	    $paihang_all_left_son3_circle2.eq(index).css('background','#fdd9dd');
	// 	    $paihang_all_left_son3_circle2_children.eq(index).css({
	// 	    	background: '#EB3436',
	// 			border: '2px solid transparent',
	// 	    });

	// 		nextpage(move_circle2);
	// 	},
	// 	function (){

	// 	}
	// );

})

// 領券中心的jQuery效果
$(function (){
	//获取元素
	$paihang_all_right_movediv = $('#paihang_all_right_movediv');//移动的div
	$paihang_all_right_movediv_left = $('#paihang_all_right_movediv_left');
	var paihang_all_right_movediv_left_width = $paihang_all_right_movediv_left.width();//每一次移动的div的距离
	$left_son3_smallCircle3 = $('.left_son3_smallCircle3');//所有的小圆点
	$paihang_all_left_son3_circle3_children = $left_son3_smallCircle3.children();//所有的小圆点

	// console.log($left_son3_smallCircle3);
	var index = 0 ;//默认界面显示额索引是0 
	var target_index; //目标索引

	$left_son3_smallCircle3.mouseover(function (){
		target_index = $(this).index(); //目标索引

		if(target_index == 0){
			var muqian_positionLeft = $paihang_all_right_movediv.position().left;
			// console.log(muqian_positionLeft)
			if(muqian_positionLeft ==0){
				return;
			}else{
				var run = setInterval(function (){
					muqian_positionLeft +=25;
					if(muqian_positionLeft == 0){
						clearInterval(run);
						// console.log('清除定时器');
					}

				$paihang_all_right_movediv.css('left' ,muqian_positionLeft);
				},50)
			}

		}
		if(target_index ==1){

			var muqian_positionLeft = $paihang_all_right_movediv.position().left;

			if(muqian_positionLeft == -paihang_all_right_movediv_left_width){
				return;
			}else{
				var run = setInterval(function (){
					muqian_positionLeft += -25;
					if(muqian_positionLeft == -paihang_all_right_movediv_left_width){
						clearInterval(run);
						// console.log('清除定时器');
					}
				$paihang_all_right_movediv.css('left' ,muqian_positionLeft);

				},50)
			}

		}






		$left_son3_smallCircle3.eq(index).css('background','#fff');
	    $paihang_all_left_son3_circle3_children.eq(index).css({
	    	background: '#fff',
			border:'2px solid #B9BEBA',
	    });
	    index = target_index;

	    $left_son3_smallCircle3.eq(index).css('background','#fdd9dd');
	    $paihang_all_left_son3_circle3_children.eq(index).css({
	    	background: '#EB3436',
			border: '2px solid transparent',
	    });

	})
})

// 觅me的jQuery效果
$(function (){
	// 获取元素
	var $mime_all_left_son2_move_div = $('#mime_all_left_son2_move_div');//移动的div宽度1750px
	var $mime_all_left_btn = $('.mime_all_left_btn');//左边箭头
	var $mime_all_right_btn = $('.mime_all_right_btn');//右边箭头
	var $left_son3_smallCircle4 = $('.left_son3_smallCircle4');//所有的圆点
	var $left_son3_smallCircle4_children =  $left_son3_smallCircle4.children(); //所有的圆点下的儿子a
	var $warp_a = $('.warp_a');//所有的图片的div
	var warp_a_length = $warp_a.length -2;//实际需要显示的图片个数
	var warp_a_width =  $warp_a.eq(0).width();//一个warp_a的宽度
	var index = 0;//界面默认显示的图片的索引值。

	// console.log($left_son3_smallCircle4_children);

	$mime_all_left_btn.click(function (){

		nextPage(false);//向上翻页
	});
	$mime_all_right_btn.click(function (){
		nextPage(true);//向下翻页
	});
	var flag = false;//默认没有点击事件，解决快速点击按钮，出现的bug问题
	function nextPage (next){
		if(flag){
			return;
		}

		flag = true;
		var muqian_positionLeft = $mime_all_left_son2_move_div.position().left; //-350
		var need_move_length;
		if(typeof next =='boolean'){

			need_move_length = next ? -warp_a_width : warp_a_width; //，每次需要移动的长度
		}else{
			need_move_length = -(next - index)*warp_a_width;
		}

		var mubiao_positonLeft = muqian_positionLeft + need_move_length;

		var step = need_move_length/ 25;

		var run = setInterval(function (){
			muqian_positionLeft += step;
			if(mubiao_positonLeft == muqian_positionLeft){
				clearInterval(run);
				flag = false;
				// console.log('清除定时器')
				if(muqian_positionLeft == -(warp_a_length+1)* warp_a_width){
					muqian_positionLeft = -warp_a_width;
				}
				if(muqian_positionLeft == 0 ){
					muqian_positionLeft = -warp_a_length* warp_a_width;
				}
			}

		$mime_all_left_son2_move_div.css('left' , muqian_positionLeft);

		},30);

		// 实现圆点随着图片移动
		var target_small_circle = 0;//目标小圆点的索引值
		if(typeof next =='boolean'){
			target_small_circle =index+1;
			if(target_small_circle >=3){////向右翻页
					target_small_circle = 0;
				}

		}else{
			target_small_circle= next;
		}
		$left_son3_smallCircle4.eq(index).css('background','#fff');
	    $left_son3_smallCircle4_children.eq(index).css({
	    	background: '#fff',
			border:'2px solid #B9BEBA',
	    });

	     
	    $left_son3_smallCircle4.eq(target_small_circle).css('background','#fdd9dd');
	    $left_son3_smallCircle4_children.eq(target_small_circle).css({
	    	background: '#EB3436',
			border: '2px solid transparent',
	    });

	    index = target_small_circle;

	}

	// 进入页面，图片开始自动水平移动
	setInterval(function (){
		nextPage(true);
	},4000)
	//鼠标划入小圆点，水平移动显示对应的图片
	$left_son3_smallCircle4.mouseover(function (){
		var ciecle_index = $(this).index();//移入的小圆对应的索引
		nextPage(ciecle_index);
	});
})
// 特色推荐的jQuery效果
$(function (){
	//获取元素
	var $tese_move  = $('#tese_move');//需要移动的div
	var $tese_move_item  = $('.tese_move_item');//所有的tese_move_item
	var tese_move_item_length  = $tese_move_item.length-2;//实际需要显示的tese_move_item的个数4
	var tese_move_item_width = $tese_move_item.eq(0).width(); //一个tese_move_item的长度
	var $paihang_all_zhong_leftbtn  = $('.paihang_all_zhong_leftbtn');//左边按钮
	var $paihang_all_zhong_rightbtn  = $('.paihang_all_zhong_rightbtn');//右边按钮
	var $left_son3_smallCircle7  = $('.left_son3_smallCircle7');//右边按钮
	var $left_son3_smallCircle7_children  = $left_son3_smallCircle7.children();//右边按钮

	console.log($left_son3_smallCircle7_children);

	var flag = false;
	var index=0;//界面默认显示的圆点的索引

	function nextPage (next){
		if(flag){
			return;
		}
		flag=true;
		var muqian_positionLeft = $tese_move.position().left; //-1190
		var position_move_width;
		if(typeof next =='boolean'){

		 position_move_width = next ? -tese_move_item_width : tese_move_item_width;
		}else{
		 position_move_width = - (next - index) * tese_move_item_width;

		}
		
		var mubiao_positionLeft = muqian_positionLeft + position_move_width;
		var step = position_move_width / 35;
		// console.log(muqian_positionLeft);

		var run = setInterval(function (){
			muqian_positionLeft += step;

			if(mubiao_positionLeft == muqian_positionLeft){
				clearInterval(run);
				flag = false;
				// console.log('清除定时器');
				if(muqian_positionLeft == -(tese_move_item_length+1) * tese_move_item_width){
					muqian_positionLeft = -tese_move_item_width;
				}
				if(muqian_positionLeft == 0){
					muqian_positionLeft = -tese_move_item_length * tese_move_item_width;
				}
			}

			$tese_move.css('left',muqian_positionLeft);

		},15)

		//实现小圆点随着图片一起移动的效果
		var target_small_circle = 0;//目标小圆点的索引值
		if(typeof next =='boolean'){
			if(next){
				target_small_circle =index+1;
				if(target_small_circle >=4){////向右翻页
						target_small_circle = 0;
					}
			}else{
				target_small_circle = index-1;//自动轮播的时候，自动移动到上一个小圆点上
				if(target_small_circle < 0){//向左翻页

					target_small_circle = 3;
				}
			}
		}else{
			target_small_circle= next;
		}
		$left_son3_smallCircle7.eq(index).css('background','#fff');
	    $left_son3_smallCircle7_children.eq(index).css({
	    	background: '#fff',
			border:'2px solid #B9BEBA',
	    });
	    	

	    $left_son3_smallCircle7.eq(target_small_circle).css('background','#fdd9dd');
	    $left_son3_smallCircle7_children.eq(target_small_circle).css({
	    	background: '#EB3436',
			border: '2px solid transparent',
	    });
	    index = target_small_circle;

	};

	// 进入页面，图片开始自动水平移动
	var run2 = setInterval(function (){
		nextPage(true);
	},4000);

	$paihang_all_zhong_leftbtn.click(function (){
		nextPage(false);//向左边翻页
	})
	$paihang_all_zhong_rightbtn.click(function (){
		nextPage(true);//向右边翻页
	})
	//鼠标移入小圆点，图片跟着移动
	$left_son3_smallCircle7.hover(
		function (){
			var smallCircle7_index =  $(this).index();
			nextPage(smallCircle7_index);//向右边翻页,传入的是数字
			clearInterval(run2);
		},
		function (){
			 run2 = setInterval(function (){
				nextPage(true);
			},4000);
		}
	);

})

// 输入框框下的关键字,其中的第一个实现每一秒自动变换文字的功能
$(function (){
	var $hotwords  = $('.hotwords');
	var $hotwords_firse_a = $hotwords.children(':first');
	// console.log($hotwords_firse_a);
	setInterval(function (){
		var a_name = $hotwords_firse_a.html();
		// console.log(a_name);
		if (a_name =='吃新鲜水果') {
			$hotwords_firse_a.html('素儿美妆季');
		}else{
			$hotwords_firse_a.html('吃新鲜水果');
		};
	},2000);
})

//首页的侧边栏的jQuery效果
$(function(){

	//侧边栏的时刻保持百分之百
	var $right_sidebar_border = $('#right_sidebar_border');
	// console.log($tab_item_user);

	$(window).scroll(function (){
		$right_sidebar_border.css('height','100%');
	});

	//鼠标滑动7个小方块，显示对应的小方块的文字
	var $right_sidebar_border_tab_item = $('.right_sidebar_border_tab_item');

	$right_sidebar_border_tab_item.hover(
		function(){
			var this_index = $(this).index();
			$(this).children('.tab_item_alert').animate({right:34},200);
			$(this).children('.tab_item_user').css('backgroundColor' ,'#c81623');
		},
		function(){
			var this_index = $(this).index();
			$(this).children('.tab_item_alert').animate({right:-28},200);
			$(this).children('.tab_item_user').css('backgroundColor' ,'#7a6e6e');

		}
	);
	//鼠标点击7个小方块，显示对应的小方块的大页面
	// $right_sidebar_border_tab_item.click(function (){

	// })
})
//轮播图最后边的 右上角的促销、公告的效果
$(function (){
	var $show_news_two_yi = $('#show_news_two_yi');
	var $show_news_two_move_a = $('.show_news_two_move_a');
	var $show_news_two_move_a_active = $('#show_news_two_move_a_active');//红色下划线
	var $show_news_two_er_son1 = $('#show_news_two_er_son1');//促销、显示的详细内容
	var $show_news_two_er_son2 = $('#show_news_two_er_son2');//公告、显示的详细内容

	$show_news_two_move_a.mousemove(function (){
		if($(this).index() == 0 ){

				$show_news_two_er_son1.show();
				$show_news_two_er_son2.hide();
				$show_news_two_move_a_active.css('left',0);

			}else{
				$show_news_two_er_son1.hide();
				$show_news_two_er_son2.show();
				$show_news_two_move_a_active.css('left',54);
			}
	})

})
//页面侧边栏的7个按钮的点击事件
$(function (){
	var $tab_item_alert = $('.tab_item_alert');
	var $tab_item_alert_gwc = $('.tab_item_alert_gwc');
	var $right_sidebar = $('#right_sidebar');//页面右边侧边栏
	var $gouwuche_page = $('#gouwuche_page');//购物车页面
	var $close_panel = $('.close_panel');//购物车页面内的右上角的X号

	// console.log($tab_item_alert_gwc);
	var flag = false;//默认没有点击
	// 左边侧边栏的购物车的点击效果
	$tab_item_alert_gwc.click(function (){
		if(flag){
			$gouwuche_page.animate({right : -270},500);
			$right_sidebar.animate({right : 0},500);
			flag=false;
		}else{
			$gouwuche_page.animate({right : 0},500);
			$right_sidebar.animate({right : 270},500);
			flag=true;
		}
	})
	$close_panel.click(function (){
		$gouwuche_page.animate({right : -270},500);
		$right_sidebar.animate({right : 0},500);
		flag=false;
	})

	// 左边侧边栏的登录按钮的点击效果
	$('.tab_item_alert_jghy').click(function (){
		console.log('点击了');
		$('#login_alter').show();
		$('#index_login_page').show();
	})
	$('.close_debglu_page_chahao').click(function (){
		$('#login_alter').hide();
		$('#index_login_page').hide();
	})
})