$(window).scroll(function() {
	let scroll = $(window).scrollTop();
	console.log(scroll);

	$('.left-mountain').css({
		left: - 15 - scroll/5 + '%', 
		bottom: - scroll/10 + '%',
		width: 100 + scroll/20 + '%',
		height: 80 + scroll/20 + '%',
	})

	$('.right-mountain').css({
		right: - scroll/10 + '%', 
		bottom: - scroll/5 + '%',
		width: 100 + scroll/10 + '%',
		height: 70 + scroll/10 + '%',
	})

	$('.text').css({
		top: - scroll/20 + '%',
	})




})