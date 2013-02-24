$(document).ready(function () {
	$("#popup_book_activated").hide();
	$('#scarica_app #commit').click(function(){
		$("#popup_book_activated").show();
	});
	
	$('#popup_book_activated a').click(function(){
		$("#popup_book_activated").hide();
	});


});