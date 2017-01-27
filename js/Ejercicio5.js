$(document).ready (function(){
      function respuesta(){
      	var cm = $('#txtCentimetros').val();
      	var convercion = cm * 0.393701 + " " + "in";

      	$('#txtResultado').val(convercion);
      };
      $('#btnConvertir').on("click",respuesta);
});