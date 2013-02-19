var validation_messages = {
	required_KO 	: "Campo obbligatorio.",
	required_KO2 	: "Campi obbligatori.",
	email_KO 		: "Formato non valdo<br/>(es: nome@esempio.it).",
	minlength_KO 	: "Almeno %n% caratteri.",
	equalto_KO 		: "Non coincide con &quot;%label%&quot;.",
	checkrequired_KO 	: "Per la registrazione è necessaria l'accettazione."
}





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
		$(".registrazione_1").hide();
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



function registrazione_1() {
	var form='#reg_teacher_form'
	if (validate(form)) {
		$(".registrazione_1").hide();
		$("#registrazione_2").show();		
	} else {
		$(form+" input").keyup(function(){validate(form)})
		$(form+" input[type='checkbox']").change(function(){validate(form)})
	}

}


function validate(form) {
  	$(form+" input").removeClass("error")
	$(form+" input").removeAttr("errorCodes")
	$(form+" .errorMessage").html('')

// verifico che i campi richiesti siano tutti valorizzati	
	$(form+" input[required='required']").each(function() {
  		if ($(this).val()=="") $(this).attr('errorCodes','required_KO')
	});
// verifico che i campi email valorizzati abbiano il formato corretto
	$(form+" input[type='email']").each(function() {
  		if (
  			$(this).val()!="" &&
  			!checkEmail($(this))
  			) $(this).attr('errorCodes','email_KO')
	});
// verifico che i campi con lunghezza minima valorizzati abbiano la lunghezza corretta
	$(form+" input[minlength]").each(function() {
  		if (
  			$(this).val()!="" &&
  			!checkMinlength($(this))
  			) $(this).attr('errorCodes','minlength_KO:'+$(this).attr('minlength'))
	});
// verifico che i campi ripetuti lo siano effettivamente
	$(form+" input[equalto]").each(function() {
  		if (
  			$(this).val()!="" &&
  			$(this).val()!=$($(this).attr('equalto')).val()
  			) $(this).attr('errorCodes','equalto_KO:'+$(this).attr('equalto'))
	});
// verifico che i checkbox richiesti siano checkati
	$(form+" input[checkrequired='checkrequired']").each(function() {
  		if (!$(this).is(':checked')) $(this).attr('errorCodes','checkrequired_KO')
	});


  	$(form+" input[errorCodes]").each(function() {
  		$(this).addClass("error");
  		var s=convertiCodiciErrori($(this).attr('errorCodes'))
  		if ($(this).siblings(".errorMessage").html()==s) {
  			$(this).siblings(".errorMessage").html(convertiCodiciErrori($(this).attr('errorCodes')+"2"))
  		} else {
	  		$(this).siblings(".errorMessage").html(s)
  		}
  	})
  	return($(form+" input[errorCodes]").length==0)
}


function checkEmail(f) {
	var email_illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
	var email_filter = /^.+@.+\..{2,4}$/;
	var e=$(f).val();
	return(email_filter.test(e) && !e.match(email_illegalChars))
}

function checkMinlength(f) {
	var m=$(f).attr('minlength');
	var e=$(f).val();
	return(e.length>=m)
}

function convertiCodiciErrori(s) {
	var tipo=s.split(":")[0];
	var parametro;
	var m=validation_messages[s.split(":")[0]]
	if (s.split(":").length>1) {
		parametro=s.split(":")[1];
		if (m.indexOf("%n%")!=-1) m=m.replace("%n%",parametro)
		if (m.indexOf("%label%")!=-1) m=m.replace("%label%",$("label[for='"+parametro.substr(1)+"']").html())
	}
	return(m)
}


