$(document).ready(function(){
    function respuesta(){

       	var valor1 = $('#txtNumero1').val();
   		var valor2 = $('#txtNumero2').val();
       	var area = valor1*valor2;
         
        $('#txtRespuesta').val(area);
     };

      $('#btnCalcular').on("click",respuesta);

});