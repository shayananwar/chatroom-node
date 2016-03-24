$(document).ready(function(){
	if($(window).width() > 786){
		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).show();
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).hide();
		});
	}
});