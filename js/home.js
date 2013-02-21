var ratioImgSfondo=1.33375;
var rect_login;

var sfondo_l, sfondo_t, sfondo_w, sfondo_h
var btn_login_l, btn_login_t, btn_login_w, btn_login_h;
var btn_stud_l, btn_stud_t, btn_stud_w, btn_stud_h;
var popup_studenti_l, popup_studenti_t, popup_studenti_w, popup_studenti_w;
var popup_insegnanti_l, popup_insegnanti_t, popup_insegnanti_w, popup_insegnanti_w;

var win_w=$(window).width();
var win_h=$(window).height();


$(document).ready(function () {
	adatta();
	$('#btn_stud').click(function(){
		$("#popup_studenti").toggle();
		$("#popup_insegnanti").hide();
	});

	$('#btn_teach').click(function(){
		$("#popup_insegnanti").toggle();
		$("#popup_studenti").hide();
	});

	$('.sfondo_pagina').click(function(){
		$("#popup_insegnanti").hide();
		$("#popup_studenti").hide();
	});
});

$(window).resize(function () {
	adatta()
});



		


function adatta() {
	/*	w=1802;	h=1381 dimensioni della foto sulla home*/	
	win_w=Math.max($(window).width(),600);
	win_h=Math.max($(window).height(),300);

	$('.sfondo_pagina').height(win_h)
	

	sfondo_h=$('.sfondo_pagina').height();
	sfondo_w=sfondo_h*ratioImgSfondo;
	sfondo_l=(win_w-sfondo_w)/2;


	btn_stud_l=sfondo_l+sfondo_w*.2414;
	btn_stud_t=sfondo_h*.75;
	btn_stud_w=sfondo_w*.2519;
	$('#btn_stud').css('left',sfondo_l+sfondo_w*.2414)
	$('#btn_stud').css('top',sfondo_h*.75)
	$('#btn_stud').css('width',sfondo_w*.2519)

	btn_teach_l=sfondo_l+sfondo_w*.5066;
	$('#btn_teach').css('left',btn_teach_l)
	$('#btn_teach').css('width',sfondo_w*.2519)
	$('#btn_teach').css('top',sfondo_h*.75)
	

	btn_login_w=.0537*sfondo_w;
	btn_login_t=.0507*sfondo_h;
	btn_login_r=.1663*sfondo_w+sfondo_l;
	$('#btn_login').css('right',btn_login_r)
	$('#btn_login').css('width',btn_login_w)
	$('#btn_login').css('top',btn_login_t)
	
	$('#btn_insert_code').css('right',sfondo_l+sfondo_w*.04)
	$('#btn_insert_code').css('width',sfondo_w*.1175)
	$('#btn_insert_code').css('top',sfondo_h*.0507)

	popup_studenti_h=sfondo_h*.6365;
	popup_studenti_w=btn_stud_w*1.0308;
	popup_studenti_t=btn_stud_t-popup_studenti_h+btn_stud_w*.46;
	popup_studenti_l=btn_stud_l;

	$('#popup_studenti').css('top',popup_studenti_t)
	$('#popup_studenti').css('height',popup_studenti_h);
    $('#popup_studenti').css('width',popup_studenti_w);
    $('#popup_studenti').css('left',popup_studenti_l);
    $('.popup_stud_ins_presentazione').css('top',popup_studenti_h*.40);

	popup_insegnanti_l=btn_teach_l;
	$('#popup_insegnanti').css('top',popup_studenti_t)
	$('#popup_insegnanti').css('height',popup_studenti_h);
    $('#popup_insegnanti').css('width',popup_studenti_w);
    $('#popup_insegnanti').css('left',popup_insegnanti_l);

}


