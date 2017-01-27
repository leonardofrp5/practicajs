$(document).ready (function(){
      function resultado(){

      	var N1 = $('#txtNota1').val();
      	var N2 = $('#txtNota2').val();
      	var N3 = $('#txtNota3').val();

      	var suma = N1 * N2;
      	//var Div = suma/4;

      	$('#txtResultado').val(suma);
      };
      $('#btnCalcular').on("click",resultado);
});


$(document).ready(function(){
    function respuesta(){

       	var valor1 = $('#txtNumero1').val();
   		var valor2 = $('#txtNumero2').val();
       	var area = valor1*valor2;
         
        $('#txtRespuesta').val(area);
     };

      $('#btnCalcular').on("click",respuesta);

});