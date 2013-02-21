var ratioImgSfondo=1.33375;
var rect_login;

var win_w=$(window).width();
var win_h=$(window).height();

var sfondo_l, sfondo_t, sfondo_w, sfondo_h

$(document).ready(function () {
	adattaSfondo();
});
$(window).resize(function () {
	adattaSfondo()
});


function adattaSfondo() {
	/*	w=1802;	h=1381 dimensioni della foto sulla home*/	
	win_w=Math.max($(window).width(),600);
	win_h=Math.max($(window).height(),300);

	$('.sfondo_pagina').height(win_h)
	

	sfondo_h=$('.sfondo_pagina').height();
	sfondo_w=sfondo_h*ratioImgSfondo;
	sfondo_l=(win_w-sfondo_w)/2;
}