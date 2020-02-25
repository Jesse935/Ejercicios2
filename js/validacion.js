
//Validacion de numeros

function validar_numeros(e) {
	var teclado = (document.all) ?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

//Ejercicio 1

function Inversion(e) {

	var checStr = document.formulario1.cantidad.value;
	var allValido = true;

	var checkOK = "12345678990.";
	for (var i = 0; i < checStr; i++) {
		var ch = checStr.charAt(i);
		for (var j = 0 ; j< checkOK; j++) {
			if (ch == checkOK.charAt(j)){
				break;
			}
		}
			
		if (j == checkOK.length) {
			allValido = false;
			break;
		}

	}

	if (allValido) {

		document.formulario1.ganancia.value = "";
		document.formulario1.total.value = "";

		document.formulario1.alerta.value = "Favor de ingresar valores numericos enteros positivos";
		formulario1.cantidad.focus();
		return(false);

	} else {

		var cantidad = parseInt(document.formulario1.cantidad.value);
		var cantidad_length = parseInt(document.formulario1.cantidad.value.length);

		if (cantidad_length > 15) {
			document.formulario1.alerta.value = "No se puede introducir cantidades con mas de 15 digitos";

			document.formulario1.ganancia.value = "";
			document.formulario1.total.value = "";
			return false;

		}else if (cantidad_length > 2) {

			var ganancia = cantidad * 0.077;
			var total = (ganancia + cantidad) / 12;
			var ganancia = ganancia / 12;

			var ganancia_dec = ganancia.toFixed(2);
			var total_dec = total.toFixed(2);

			document.formulario1.ganancia.value = "$ " + ganancia_dec;
			document.formulario1.total.value = "$ " + total_dec;

			document.formulario1.alerta.value = "Inversion exitosa"; 
			
			} else if (cantidad_length <= 2) {

			document.formulario1.alerta.value = "El banco solo permite una inversion minima de $100";

			document.formulario1.ganancia.value = "";
			document.formulario1.total.value = "";
		}
	}
}

//Ejercicio 2

function Comision(e) {
	
	var checStr = document.formulario2.sueldo.value;
	var allValido = true;

	var checkOK = "12345678990.";
	for (var i = 0; i < checStr; i++) {
		var ch = checStr.charAt(i);
		for (var j = 0 ; j< checkOK; j++) {
			if (ch == checkOK.charAt(j)){
				break;
			}
		}
			
		if (j == checkOK.length) {
			allValido = false;
			break;
		}

	}

	if (allValido) {

		document.formulario2.comision.value = "";
		document.formulario2.comision_total.value = "";
		document.formulario2.total.value = "";

		document.formulario2.alerta.value = "Favor de ingresar valores numericos enteros positivos";
		formulario2.sueldo.focus();
		return(false);

	} else {

		var sueldo = parseInt(document.formulario2.sueldo.value);
		var sueldo_length = parseInt(document.formulario2.sueldo.value.length);

		if (sueldo_length > 15) {

			document.formulario2.alerta.value = "No se puede introducir cantidades con mas de 15 digitos";

			document.formulario2.comision.value = "";
			document.formulario2.comision_total.value = "";
			document.formulario2.total.value = "";
			return (false);

		} else if (sueldo >= 3500) {

			var comision = sueldo * 0.125;
			var comision_total = comision * 5;
			var total = sueldo + comision_total;

			var comision_dec = comision.toFixed(2);
			var comision_total_dec = comision_total.toFixed(2);
			var total_dec = total.toFixed(2);

			document.formulario2.comision.value = comision_dec;
			document.formulario2.comision_total.value = comision_total_dec;
			document.formulario2.total.value = total_dec;

			document.formulario2.alerta.value = "Consulta exitosa"

		} else if (sueldo < 3500) {
			document.formulario2.alerta.value = "El sueldo minimo por dia es de $123 y mensual $3500";

			document.formulario2.comision.value = "";
			document.formulario2.comision_total.value = "";
			document.formulario2.total.value = "";
		}

	}
}

// Ejercicio 3


// Ejercicio 4
function validarn4(e) {
	var teclado = (document.all) ?e.keyCode:e.which;
	if (teclado == 2) return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}

function Promedio() {
	var caf1 = parseFloat(document.formulario4.calif1.value);
	var caf2 = parseFloat(document.formulario4.calif2.value);
	var caf3 = parseFloat(document.formulario4.calif3.value);
	var caf4 = parseFloat(document.formulario4.calif4.value);
	var caf5 = parseFloat(document.formulario4.calif5.value);

	if (caf1 <= 10 && caf2 <= 10 && caf3 <= 10 && caf4 <= 10 && caf5 <= 10 && caf1 >= 0 && caf2 >= 0 && caf3 >= 0 && caf4 >= 0 && caf5 >= 0) {
		
		var pro = caf1 + caf2 + caf3;
		var pro = pro / 3;
		var fin1 = pro * 0.55;

		var fin2 = caf4 * 0.3;

		var fin3 = caf5 * 0.15;

		var final = fin1 + fin2 + fin3;

		var e1 = pro.toFixed(2);
		var e2 = fin1.toFixed(2);
		var e3 = fin2.toFixed(2);
		var e4 = fin3.toFixed(2);
		var e5 = final.toFixed(2);
		
		document.formulario4.res11.value = e1;
		document.formulario4.res12.value = e2;
		document.formulario4.res21.value = e3;
		document.formulario4.res31.value = e4;
		document.formulario4.total.value = e5;

		document.formulario4.alerta.value = "";


	} else{
		document.formulario4.alerta.value = "Porfavor, llene los campos con calificaciones validas";
		document.formulario4.res11.value = "";
		document.formulario4.res12.value = "";
		document.formulario4.res21.value = "";
		document.formulario4.res31.value = "";
		document.formulario4.total.value = "";
	}

}

// Ejercicio 5


function Alumnado(e) {

	

	var checStr = document.formulario5.h.value;
	var allValido = true;

	var checkOK = "12345678990.";
	for (var i = 0; i < checStr; i++) {
		var ch = checStr.charAt(i);
		for (var j = 0 ; j< checkOK; j++) {
			if (ch == checkOK.charAt(j)){
				break;
			}
		}
			
		if (j == checkOK.length) {
			allValido = false;
			break;
		}

	}

	if (allValido) {

		document.formulario5.t.value = "";
		document.formulario5.h0.value = "";
		document.formulario5.m0.value = "";
		document.formulario5.t0.value = "";

		document.formulario5.alerta.value = "Favor de ingresar valores numericos enteros positivos";
		formulario5.h.focus();
		return(false);

	} else {

		var t = parseInt(document.formulario5.t.value);
		var h = parseInt(document.formulario5.h.value);
		var m = parseInt(document.formulario5.m.value);

		var t = h + m;

		if (t <= 50) {

			var h0 = h / t;
			var m0 = m / t;
			h0 = h0 * 100;
			m0 = m0 * 100;
			var t0 = h0 + m0;

			var r1 = h0.toFixed(2);
			var r2 = m0.toFixed(2);
			var r3 = t0.toFixed(2);

			var hh = h.toFixed(0);
			var mm = m.toFixed(0);

			document.formulario5.t.value = t;
			document.formulario5.h0.value = r1 + "% son hombres";
			document.formulario5.m0.value = r2 + "% son mujeres";
			document.formulario5.t0.value = r3 + "%";
			document.formulario5.h.value = hh;
			document.formulario5.m.value = mm;

		} else {
			document.formulario5.alerta.value = "Solo se permiten grupos de 50 alumnos";

			document.formulario5.t.value = "";
			document.formulario5.h0.value = "";
			document.formulario5.m0.value = "";
			document.formulario5.t0.value = "";
		}
	}
}

//Ejercicio 6

function Edad() {
	var año1 = parseInt(document.formulario6.año1.value);
	var año2 = parseInt(document.formulario6.año2.value);
	var añoz1 = document.formulario6.año1.value;
	var añoz2 = document.formulario6.año2.value;
	var mes1 = document.formulario6.mes1.value;
	var mes2 = document.formulario6.mes2.value;
	var dia1 = parseInt(document.formulario6.dia1.value);
	var dia2 = parseInt(document.formulario6.dia2.value);
	var diaz1 = document.formulario6.año1.value;
	var diaz2 = document.formulario6.año2.value;
	var mescan1 = 0;
	var mescan2 = 0;

	var dia3 = 0;
	var mes3 = 0;
	var año3 = 0;


	switch(mes1){
		case "enero":
			mescan1 = 1;
		break;
		case "febrero":
			mescan1 = 2;
		break;
		case "marzo":
			mescan1 = 3;
		break;
		case "abril":
			mescan1 = 4;
		break;
		case "mayo":
			mescan1 = 5;
		break;
		case "junio":
			mescan1 = 6;
		break;
		case "julio":
			mescan1 = 7;
		break;
		case "agosto":
			mescan1 = 8;
		break;
		case "septiembre":
			mescan1 = 9;
		break;
		case "octubre":
			mescan1 = 10;
		break;
		case "noviembre":
			mescan1 = 11;
		break;
		case "diciembre":
			mescan1 = 12;
		break;
		default:
		document.formulario6.alerta.value = "Ingrese correctamente la informacion";
		document.formulario6.año3.value = "";
		break;
	}

	switch(mes2){
		case "enero":
			mescan2 = 1;
		break;
		case "febrero":
			mescan2 = 2;
		break;
		case "marzo":
			mescan2 = 3;
		break;
		case "abril":
			mescan2 = 4;
		break;
		case "mayo":
			mescan2 = 5;
		break;
		case "junio":
			mescan2 = 6;
		break;
		case "julio":
			mescan2 = 7;
		break;
		case "agosto":
			mescan2 = 8;
		break;
		case "septiembre":
			mescan2 = 9;
		break;
		case "octubre":
			mescan2 = 10;
		break;
		case "noviembre":
			mescan2 = 11;
		break;
		case "diciembre":
			mescan2 = 12;
		break;
		default:
		document.formulario6.alerta.value = "Ingrese un mes valido (asegurese de escribirlo en minusculas)";
		document.formulario6.año3.value = "";
		break;
	}

	var año4 = año2 - año1;


	if (año2 == año1 && mescan2 == mescan1 && dia2 == dia1) {

		document.formulario6.año3.value = "Naciste hoy";
		document.formulario6.alerta.value = "";

	} else if (mescan2 == 2 && dia2 > 28) {

		document.formulario6.año3.value = "";
		document.formulario6.alerta.value = "Febrero solo tiene 28 dias";

	}else if (mescan1 == 2 && dia1 > 28) {

		document.formulario6.año3.value = "";
		document.formulario6.alerta.value = "Febrero solo tiene 28 dias";

	} else if (año2 == año1 && mescan2 == mescan1 && dia2 > dia1) {

		dia3 = dia2 - dia1;
		if (dia3 == 1) {
			document.formulario6.año3.value = "Naciste hace " + dia3 + " dia";
			document.formulario6.alerta.value = "";
		} else {
			document.formulario6.año3.value = "Naciste hace " + dia3 + " dias";
			document.formulario6.alerta.value = "";
		}

	} else if (año2 == año1 && mescan2 == mescan1 && dia2 < dia1) {

		document.formulario6.año3.value = "No es posible";
		document.formulario6.alerta.value = "";

	} else if (año2 == año1 && mescan2 > mescan1) {

		mes3 = mescan2 - mescan1
		document.formulario6.año3.value = "Todavia no cumples un años";
		document.formulario6.alerta.value = "";

	} else if (año2 == año1 && mescan2 < mescan1) {

		document.formulario6.año3.value = "No es posible";
		document.formulario6.alerta.value = "";

	} else if (año4 > 120) {

		document.formulario6.año3.value = "No puedes tener mas de 120 años...o si??";
		document.formulario6.alerta.value = "";

	} else if (año2 > año1 && mescan2 == mescan1 && dia2 == dia1) {

		año3 = año2 - año1;
		document.formulario6.año3.value = "Feliz cumpleaños numero " + año3;
		document.formulario6.alerta.value = "";

	} else if (año2 > año1 && mescan2 == mescan1 && dia2 > dia1) {

		año3 = año2 - año1 - 1;
		document.formulario6.año3.value = "Tienes " + año3 + " años";
		document.formulario6.alerta.value = "";

	} else if (año2 > año1 && mescan2 == mescan1 && dia2 < dia1) {

		año3 = año2 - año1;
		document.formulario6.año3.value = "Tienes " + año3 + " años";
		document.formulario6.alerta.value = "";

	} else if (año2 > año1 && mescan2 > mescan1) {

		año3 = año2 - año1;
		document.formulario6.año3.value = "Tienes " + año3 + " años";
		document.formulario6.alerta.value = "";

	} else if (año2 > año1 && mescan2 < mescan1) {

		año3 = año2 - año1 - 1;
		document.formulario6.año3.value = "Tienes " + año3 + " años";
		document.formulario6.alerta.value = "";

	} else if (año2 < año1) {

		document.formulario6.año3.value = "No es posible";
		document.formulario6.alerta.value = "";
	}


}