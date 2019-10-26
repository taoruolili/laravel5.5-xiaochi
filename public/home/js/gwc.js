$(function (){
	// 页面最下方的去结算的效果
	var $settlement =$('#settlement');
	$settlement.css({
  					width: 1190,
				    height: 50,
				    backgroundColor: '#f7f7f7',
				    margin:'',
				    border:'1px solid #f1f1f1',
				    position: 'fixed',
				    bottom: 0,
				    left: '50%',
				    marginLeft: '-595px',
  				})
	$(window).scroll(function(){
		
			var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
 			var documentheight = parseFloat($(document).height());

  			if(documentheight - totalheight <=830){
  				$settlement.css({
  					width: 1190,
				    height: 50,
				    backgroundColor: '#f7f7f7',
				    margin:'0 auto',
				    border:'1px solid #f1f1f1',
				    position: '',
				    bottom: '',
				    left: '',
  				})
  			}else{
  				$settlement.css({
  					width: 1190,
				    height: 50,
				    backgroundColor: '#f7f7f7',
				    margin:'',
				    border:'1px solid #f1f1f1',
				    position: 'fixed',
				    bottom: 0,
				    left: '50%',
				    marginLeft: '-595px',
  				})
  			}
	})

	// 全部商品02 京东大药房的效果
	var muqian_shangping_tab_ltem_index = 0;
	var $shangping_tab_ltem_a = $('.shangping_tab_ltem').children();
	var $xiahuaxian = $('.xiahuaxian');
	$('.shangping_tab_ltem').mouseover(function(){
		var shangping_tab_ltem_index = $(this).index();

		if(shangping_tab_ltem_index == 0){
			if($xiahuaxian.position().left == 191){
				$xiahuaxian.css({
					left: 60,
					transition:'all .5s linear'
				});
			}
		}else{
			if($xiahuaxian.position().left == 60){
				$xiahuaxian.css({
					left: 191,
					transition:'all .5s linear'
				});
			}
		}
		$shangping_tab_ltem_a.eq(muqian_shangping_tab_ltem_index).css('color','#333');
		$shangping_tab_ltem_a.eq(shangping_tab_ltem_index).css('color','#e4393c');
		muqian_shangping_tab_ltem_index = shangping_tab_ltem_index;

		
	})
})
//购物车的页面的数量、小计和总价的效果
$(function (){

	var i = 0;//数量
	var j = 0;//数量
	var k = 0;//数量
	var l = 0;//数量
	var m = 0;//数量
	var n = 0;//数量
	var sumi= 0;//小计
	var sumj= 0;//小计
	var sumk= 0;//小计
	var suml= 0;//小计
	var summ= 0;//小计
	var sumn= 0;//小计
	var danjia =26;//单价
	var zongjia = 0;

	// 正确的效果
		$('.cart_item_list').find('.add_goods_jiahao').click(function(){
			var shop_goods_content_wrap_all_index = $(this).parent().parent().parent().index();
			var cart_item_list_index = $(this).parent().parent().parent().parent().parent().parent().parent().index();
			// console.log(shop_goods_content_wrap_all_index)
			// console.log(cart_item_list_index-2)
			//最外面的div的索引值等于0的时候
			if((cart_item_list_index-2)==0 && shop_goods_content_wrap_all_index == 0){
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
				i++;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(i);
			 	sumi = danjia*i;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumi+'.00');
			}
			if((cart_item_list_index-2)==0 && shop_goods_content_wrap_all_index == 1){
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();	
				j++;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(j);
			 	sumj = danjia*j;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumj+'.00');
			}
			
			//最外面的div的索引值等于1的时候
			if((cart_item_list_index-2)==1 && shop_goods_content_wrap_all_index == 0){
				k++;
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(k);
			 	sumk = danjia*k;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumk+'.00');
			}
			if((cart_item_list_index-2)==1 && shop_goods_content_wrap_all_index == 1){
				l++;
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(l);
			 	suml = danjia*l;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(suml+'.00');
			}
			//最外面的div的索引值等于2的时候
			if((cart_item_list_index-2)==2 && shop_goods_content_wrap_all_index == 0){
				m++;
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(m);
			 	summ = danjia*m;
			    $parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(summ+'.00');
			}
			if((cart_item_list_index-2)==2 && shop_goods_content_wrap_all_index == 1){
				n++;
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(n);
			 	sumn = danjia*n;
			 	$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumn+'.00');
			}
			zongjia = sumi+sumj + sumk+suml + summ+sumn;
			 
			$('.price_sum_firstLine_jiner').children('b').html(zongjia+'.00');
		});
		$('.cart_item_list').find('.add_goods_jianhao').click(function(){
		    var shop_goods_content_wrap_all_index = $(this).parent().parent().parent().index();
		    var cart_item_list_index = $(this).parent().parent().parent().parent().parent().parent().parent().index();
			if((cart_item_list_index-2)==0 && shop_goods_content_wrap_all_index == 0){
				i--;
				if(i<=0){
		 			i=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(i);
		 		sumi = danjia*i;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumi+'.00');
			}
			if((cart_item_list_index-2)==0 && shop_goods_content_wrap_all_index == 1){
				j--;
				if(j<=0){
		 			j=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(j);
		 		sumj = danjia*j;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumj+'.00');
			}
			if((cart_item_list_index-2)==1 && shop_goods_content_wrap_all_index == 0){
				k--;
				if(k<=0){
		 			k=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(k);
		 		sumk = danjia*k;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumk+'.00');
			}
			if((cart_item_list_index-2)==1 && shop_goods_content_wrap_all_index == 1){
				l--;
				if(l<=0){
		 			l=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(l);
		 		suml = danjia*l;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(suml+'.00');
			}
			if((cart_item_list_index-2)==2 && shop_goods_content_wrap_all_index == 0){
				m--;
				if(m<=0){
		 			m=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(m);
		 		summ = danjia*m;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(summ+'.00');
			}
			if((cart_item_list_index-2)==2 && shop_goods_content_wrap_all_index == 1){
				n--;
				if(n<=0){
		 			n=0;
		 		}
				//输入框
				var $parents_div = $(this).parent().parent().parent().parent().parent().parent().parent();
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).siblings('.add_goods_sum').val(n);
		 		sumn = danjia*n;
		 		
		 		// 小计
		 		$parents_div.find('.add_goods_jiahao').eq(shop_goods_content_wrap_all_index).parent().parent().siblings('.shop_goods_content_sum').find('b').html(sumn+'.00');
			}
		 	zongjia = sumi+sumj + sumk+suml + summ+sumn;

		 	// 总价：
			$('.price_sum_firstLine_jiner').children('b').html(zongjia+'.00');
		});

})
	