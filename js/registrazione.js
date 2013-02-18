function inizializza_registrazione_insegnanti(){
	$("#popup_insegnanti").hide();
	nascondi_btn_home();
	$(".sequenza_registrazione_insegnanti").show();
	$('.btn_chiudi_registrazione').click(function () {
		$(".sequenza_registrazione_insegnanti").hide();
		mostra_btn_home();
	})


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



function registrazione_2() {
	$(".registrazione_1").hide();
	$("#registrazione_2").show();
}





