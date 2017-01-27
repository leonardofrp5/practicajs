$(document).ready (function(){
      function respuesta(){
      	var Cateto1 = $('#txtCatetoa').val();
      	var Cateto2 = $('#txtCatetob').val();

      	var a = Math.pow(Cateto1,2);
      	var b = Math.pow(Cateto2,2);

      	var res = a + b;
 
       $('#txtResultado').val(res);
      };

      $('#btnCalcular').on("click",respuesta);
});