//Selección de los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//En n1 y n2 guardare los numeros aleatorios de cada operacion
let n1, n2;

//Funcion suma
function btnSumar(){
    //Limpiaremos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //Agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual = "+";
    //Asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " + ";
    //Generamos los numeros aleatorios de la suma
    nuevaSuma();
}
function nuevaSuma(){
    //Generamos dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 100 + 1);
    n2 = parseInt(Math.random() * 100 + 1);
    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //Colocamos el curso en el input
    respuesta_usuario.focus();
}
//Funcion multiplicacion
function btnMultiplicacion(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //Agregamos la clase activa al boton multiplicacion y la quitamos al resto
    activarBoton("multiplicacion");
    operacion_actual = "*";
    //Asignamos la operacion multiplicacion a la etiqueta
    operacion.innerHTML = " * ";
    //Generamos los numeros aleatorios de la multiplicacion
    nuevaMultiplicacion();
}
function nuevaMultiplicacion(){
    //Generamos dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 100 + 1);
    n2 = parseInt(Math.random() * 100 + 1);
    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //Colocamos el curso en el input
    respuesta_usuario.focus();
}
//Funcion resta
function btnResta(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //Agregamos la clase activa al boton resta y la quitamos al resto
    activarBoton("resta");
    operacion_actual = "-";
    //Asignamos la operacion resta a la etiqueta
    operacion.innerHTML = " - ";
    //Generamos los numeros aleatorios de la resta
    nuevaResta();
}
function nuevaResta(){
    //Generamos dos numeros aleatorios entre 0 y 5
    n1 = parseInt(Math.random() * 100 + 5);
    //Generamos un numero aleatorio entre 0 y 5
    n2 = parseInt(Math.random() * 100 + 5);
    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //Colocamos el curso en el input
    respuesta_usuario.focus();
}
//Funcion division
function btnDivision(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //Agregamos la clase activa al boton division y la quitamos al resto
    activarBoton("division");
    operacion_actual = "/";
    //Asignamos la operacion division a la etiqueta
    operacion.innerHTML = " / ";
    //Generamos los numeros aleatorios de la division
    nuevaDivision();
}
function nuevaDivision(){
    //Aqui voy a guardar los divisores del numero a dividir
    let divisores = [];
    //Generamos un numero aleatorio entre 1 y 10
    n1 = parseInt(Math.random()* 9 + 1);
    //Encontramos los divisores del numero generado y lo guardamos en el arreglo
    for(var i=1; i<=n1;i++){
        if(n1%i===0){
            divisores.push(i);
        }
    }
    //Seleccionamos un posicion aleatorio de los numeros que son divisores
    let pos = parseInt(Math.random() * (divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}
//Funcion que controla si la respuesta es correcta
function corregir(){
    //Si el ususario no ha ingresado nada no continuo
    if(respuesta_usuario.value==""){
        return;
    }
    let solucion;
    //Armo la operacion que se genero en una variable y veo cual es su resultado
    //En este caso el operador + es para concatener las cadenas
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);
    //Creo un elemento i para agrgar el icono de correcto o incorrecto
    var i = document.createElement("i");
    //Controlo si coincide lo que el usuario respondio con la solucion
    if(respuesta_usuario.value == solucion){
        i.className = "fa-regular fa-face-grin";
    }else{
        i.className = "fa-regular fa-face-frown";
    }
    //Agrego el elemento al contenedor de las correciones
    msj_correccion.appendChild(i);
    //Controlo que tipo de operacion estoy para generar una nueva operacion
    if(operacion_actual =="+"){
        nuevaSuma();
    }else if(operacion_actual =="-"){
        nuevaResta();
    }else if(operacion_actual == "*"){
        nuevaMultiplicacion();
    }else if(operacion_actual == "/"){
        nuevaDivision();
    }
    //Limpio el input
    respuesta_usuario.value = "";
}
//Agrego al input el evento onkeydown para detectar cuando se presiona Enter y
//Llamar directamente a la funcion corregida
respuesta_usuario.onkeydown = function(e){
    var ev = document.all ? window.Event : e;
    if(ev.keyCode == 13){
        corregir();
    }
}

function activarBoton(idBoton){
    document.getElementById("suma").className = "";
    document.getElementById("resta").className = "";
    document.getElementById("multiplicacion").className = "";
    document.getElementById("division").className = "";
    document.getElementById(idBoton).className = "activado";
}