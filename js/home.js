var ratioImgSfondo=1.33375;
var rect_login;




$(document).ready(function () {
	inizializza();
	adatta();
	$(function() {
    	$( "#tabs" ).tabs();
    });
});

$(window).resize(function () {adatta()})

function inizializza_registrazione(){
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
		$("#popup_btn_stud").toggle();
		$("#popup_btn_teach").hide();
		$("#popup_login").hide();
		$("#popup_btn_insert_code").hide();
		$("#sfondo_nero").hide();
    });
	
	$('#btn_teach').click(function(){
		$("#popup_btn_teach").toggle();
		$("#popup_btn_stud").hide();
		$("#popup_login").hide();
		$("#popup_btn_insert_code").hide();
		$("#sfondo_nero").hide();
    });
	
	$('#btn_insert_code').click(function(){
		$("#popup_btn_insert_code").toggle();
		$("#sfondo_nero").toggle();
		$("#popup_btn_teach").hide();
		$("#popup_btn_stud").hide();
		$("#popup_login").hide();
    });
	
	$('#btn_login').click(function(){
		$("#popup_login").toggle();
		$(".login_error").hide();
		$("#popup_btn_stud").hide();
		$("#popup_btn_insert_code").hide();
		$("#popup_btn_teach").hide();
		$("#sfondo_nero").hide();
    });
	
	$('#btn_close').click(function(){
		$("#popup_btn_insert_code").hide();
		$("#sfondo_nero").hide();
	});
	
	$('.btn_reg').click(function(){
		chiudi_prima_pagina();
		inizializza_registrazione();	
	});
}

function inizializza() {
	$("#popup_btn_stud").hide();
	$("#popup_btn_teach").hide();
	$("#popup_login").hide();
	$("#popup_btn_insert_code").hide();
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
	var win_w=$(window).width();
	var win_h=$(window).height()

	$('.sfondo_pagina').height(win_h)
	

	var sfondo_h=$('.sfondo_pagina').height();
	var sfondo_w=sfondo_h*ratioImgSfondo;
	var sfondo_x=(win_w-sfondo_w)/2;
	var height_popup_btn_stud = $('#popup_btn_stud').height();
	var height_popup_btn_teach = $('#popup_btn_teach').height();

	$('#btn_stud').css('left',sfondo_x+sfondo_w*.2414)
	$('#btn_stud').css('top',sfondo_h*.75)
	$('#btn_stud').css('width',sfondo_w*.2519)

	$('#btn_teach').css('left',sfondo_x+sfondo_w*.5066)
	$('#btn_teach').css('width',sfondo_w*.2519)
	$('#btn_teach').css('top',sfondo_h*.75)
	

	var btn_login_w=.0537*sfondo_w;
	var btn_login_t=.0507*sfondo_h;
	var btn_login_r=.1663*sfondo_w+sfondo_x;
	$('#btn_login').css('right',btn_login_r)
	$('#btn_login').css('width',btn_login_w)
	$('#btn_login').css('top',btn_login_t)
	$('#popup_login').css('top',btn_login_t+$('#btn_login').height()+5);
	$('#popup_login').css('right',btn_login_r+btn_login_w/2-$('#popup_login').width()/2);
	
	$('#btn_insert_code').css('right',sfondo_x+sfondo_w*.04)
	$('#btn_insert_code').css('width',sfondo_w*.1175)
	$('#btn_insert_code').css('top',sfondo_h*.0507)

	$('#popup_btn_stud').css('top',sfondo_h*.158-height_popup_btn_stud)
    $('#popup_btn_teach').css('top',sfondo_h*.158-height_popup_btn_teach)

}

