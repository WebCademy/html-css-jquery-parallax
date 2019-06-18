$(window).scroll(function(){
	let scroll = $(window).scrollTop();
	console.log(scroll);

	$('.left-mountain').css({
		left: - scroll/10 + "%",
		bottom: - scroll/10 + "%",
		width: 100 + scroll/20 + "%",
		height: 60 + scroll/20 + "%",
	})

	$('.right-mountain').css({
		right: - scroll/10 + "%",
		bottom: - scroll/10 + "%",
		width: 100 + scroll/20 + "%",
		height: 70 + scroll/20 + "%",
	})

	$('.text').css({
		top: - scroll/10 + "%",
	})

	


});