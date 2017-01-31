$(document).ready (function(){
      function respuesta(){
      
      var numero = $('#txtNumero').val();
      //var div = numero % 2;

      if (numero % 2 === 0) {
      	alert("El número es Par" );

      }else{
            alert("El número es Impar");
      	}
      };
      $('#btnCosultar').on("click",respuesta);
      
});