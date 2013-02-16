var ratioImgSfondo=1.33375;
var rect_login;

var win_w=$(window).width();
var win_h=$(window).height();

var sfondo_l, sfondo_t, sfondo_w, sfondo_h
var btn_login_l, btn_login_t, btn_login_w, btn_login_h;
var btn_stud_l, btn_stud_t, btn_stud_w, btn_stud_h;
var popup_studenti_l, popup_studenti_t, popup_studenti_w, popup_studenti_w;

$(document).ready(function () {
	inizializza();
	adatta();
	$(function() {
    	$( "#tabs" ).tabs();
    });
});

$(window).resize(function () {adatta()})

function inizializza_registrazione_insegnanti(){
	$("#popup_insegnanti").hide();
	$("#registrazione_1").show();
	
	$('#inizia').click(function(){
		$("#registrazione_1").hide();
		$("#registrazione_2").show();
	});
	
	$('#registrazione_2 #submit_2.go_ahead').click(function(){
		$("#registrazione_2").hide();
		$("#registrazione_3").show();
		
		var array_materie= new Array();
		$('#registrazione_3 input[type="checkbox"]').click(function(){
                if ($(this).attr('checked')){
					array_materie.push($('input[type="checkbox"]:checked').attr("name"));
					for(var i = 0; i<array_materie.length; i++){
						var string_subject = array_materie.join(", ");
						//alert(array_materie[i]);
						$('#subject_selected span').html(string_subject);
					}
				}	
		});
	});
	
	$('#registrazione_3 #submit_3.go_ahead').click(function(){
		$("#registrazione_3").hide();
		$("#registrazione_4").show();
	});
	
	$('#registrazione_4 #submit_4.go_ahead').click(function(){
		$("#registrazione_4").hide();
		$("#registrazione_5").show();
	});
	
	$('#registrazione_5 #submit_5.go_ahead').click(function(){
		$("#registrazione_5").hide();
		$("#registrazione_6").show();
	});
}

function chiudi_prima_pagina(){
	$("#btn_stud").hide();
	$("#btn_teach").hide();
	$("#btn_login").hide();
	$("#btn_insert_code").hide();
}

function prima_pagina(){
	$('#btn_stud').click(function(){
		$("#popup_studenti").toggle();
		$("#popup_insegnanti").hide();
		$("#popup_login").hide();
		$("#popup_insert_code").hide();
		$("#sfondo_nero").hide();
    });
	
	$('#btn_teach').click(function(){
		$("#popup_insegnanti").toggle();
		$("#popup_studenti").hide();
		$("#popup_login").hide();
		$("#popup_insert_code").hide();
		$("#sfondo_nero").hide();
    });
	
	$('#btn_insert_code').click(function(){
		$("#popup_insert_code").show();
		$(".insert_code_error").hide();
		$("#sfondo_nero").show();
		$("#popup_insegnanti").hide();
		$("#popup_studenti").hide();
		$("#popup_login").hide();
    });
	
	$('#btn_login').click(function(){
		$("#popup_login").toggle();
		$(".login_error").hide();
		$("#popup_studenti").hide();
		$("#popup_insert_code").hide();
		$("#popup_insegnanti").hide();
		$("#sfondo_nero").hide();
    });
	
	$('.insert_code_close').click(function(){
		$("#sfondo_nero").show();
		$("#popup_insert_code").hide();
		$("#sfondo_nero").hide();

	});

	$('.sfondo_pagina').click(function(){
		$("#popup_studenti").hide();
		$("#popup_login").hide();
		$("#popup_insegnanti").hide();
	});
	
	$('.btn_reg').click(function(){
		chiudi_prima_pagina();
		inizializza_registrazione();	
	});
}

function inizializza() {
	$("#btn_login").show();
	$("#btn_insert_code").show();
	$("#btn_teach").show();
	$("#btn_stud").show();

	$("#popup_studenti").hide();
	$("#popup_insegnanti").hide();
	$("#popup_login").hide();
	$("#popup_insert_code").hide();
	$("#sfondo_nero").hide();
	$("#registrazione_1").hide();
	$("#registrazione_2").hide();
	$("#registrazione_3").hide();
	$("#registrazione_4").hide();
	$("#registrazione_5").hide();
	$("#registrazione_6").hide();
	prima_pagina();
}


function adatta() {
	/*	w=1802;	h=1381 dimensioni della foto sulla home*/	
	win_w=Math.max($(window).width(),900);
	win_h=Math.max($(window).height(),700);



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
	$('#popup_login').css('top',btn_login_t+$('#btn_login').height()+5);
	$('#popup_login').css('right',btn_login_r+btn_login_w/2-$('#popup_login').width()/2);
	
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


