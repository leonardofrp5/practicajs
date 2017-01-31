$(document).ready (function(){
      function resultado(){

      	var N1 = $('#txtNota1').val();
      	var N2 = $('#txtNota2').val();
      	var N3 = $('#txtNota3').val();

      	var suma = parseFloat(N1) + parseFloat(N2) + parseFloat	(N3);
      	var Div = suma/4;
      	var total = 3 - Div

      	if (total >= 3){
      		//$("body").html("Llevas pasada la materia" );
      		alert("Llevas pasada la materia" );
            
      	
      	}else{
            //$("body").html("En este momento tienes la materia perdida," + " Te falta " + total + " En el examen final");
            alert("En este momento tienes la materia perdida," + " Te falta " + total + " En el examen final");
      	}
      	
      };
      $('#btnCalcular').on("click",resultado);
});


