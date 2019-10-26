$(function (){
	// 支付方式的效果
	$('.gengduo').click(function (){
		$('.choose_pay_type2').css('display','block');
		$('.gengduo').css('display','none');
	})
	$('.shouqi').click(function(){
		$('.choose_pay_type2').css('display','none');
		$('.gengduo').css('display','block');
	})
	// 点击提交订单按钮
	$('#submit_order_btn').click(function(){
		alert('恭喜你，订单提交成功！')
	})
})