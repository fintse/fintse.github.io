$(document).ready(function () {
	$('.more-info__title').click(function () {
		$(this).toggleClass('active').next().slideToggle();
	});
});
