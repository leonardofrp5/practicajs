$(document).ready(function(){
	function saludar(){
		var dato = $('#txtNombre').val();
		var res = "Hola,  " + dato + " " + "bienvenido";

		$('#txtRespuesta').val(res);
	};
	
	$("#btnSaludar").on("click",saludar);
});
