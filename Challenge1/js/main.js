//Declaracion de variables
var input = document.querySelector('.input');
var btnEncriptar = document.querySelector('.button_one');
var btnDesencriptar = document.querySelector('.button_two');
var btnCopiar = document.querySelector('.copiar');
var alerta = document.querySelector('.alert_text');
var imagen = document.querySelector('.munheco');
var mensajeUno = document.querySelector('.message_one');
var mensajeDos = document.querySelector('.message_two');



//Encriptación
btnEncriptar.addEventListener('click',()=>{
    let textoIngresado = input.value; //Se toma el valor del input
    let encriptado = ""; //Se crea variable de encriptado

    if(textoIngresado.length == 0){ //Se verifica que se haya ingresado un valor en el input
        //En caso de NO haber ingresado valores
        imagen.setAttribute("src","src/muñeco.svg");
        mensajeDos.style.display = "block";
        mensajeUno.textContent = "Ningun mensaje fue encontrado";
        mensajeDos.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        btnCopiar.style.display = "none";
    }else{
        //En caso de haber ingresado valores
        for (const letra of textoIngresado) {
            switch (letra) {
                case "a":
                    encriptado+="ai";
                    break;
                case "e":
                    encriptado+="enter";
                    break;
                case "i":
                    encriptado+="imes";
                    break;
                case "o":
                    encriptado+="ober";
                    break;
                case "u":
                    encriptado+="ufat";
                    break;     
                default:
                    encriptado+=letra;
                    break;
            }
        }
        //Se muestra el mensaje encriptado
        imagen.setAttribute("src","");
        mensajeDos.style.display = "none";
        mensajeUno.textContent = encriptado;
        btnCopiar.style.display = "block";
    }
    

});


//Desencriptacion
btnDesencriptar.addEventListener('click',()=>{
    let textoIngresado = input.value; //Se toma el valor del input

    if(textoIngresado.length == 0){ //Se verifica que se haya ingresado valores en el input
        //En caso de no haber ingresado valores
        imagen.setAttribute("src","src/muñeco.svg");
        mensajeDos.style.display = "block";
        mensajeUno.textContent = "Ningun mensaje fue encontrado";
        mensajeDos.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        btnCopiar.style.display = "none";
    }else{
        //En caso de haber ingresado valores
        let desencriptado = textoIngresado.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u"); //Se reemplazan los valores correspondientes

        //Se muestra el mensaje desencriptado
        imagen.setAttribute("src","");
        mensajeDos.style.display = "none";
        mensajeUno.textContent = desencriptado;
        btnCopiar.style.display = "block";
    }


});


//Copiado de texto
btnCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(mensajeUno.textContent); //Se copia el texto que se encuentra en el mensajeUno

    btnCopiar.style.display ="none";
    mensajeDos.style.display = "block";
    mensajeDos.textContent = "Texto Copiado!";
    input.value = "";
    input.focus();
});


//Controla el uso de mayusculas
window.addEventListener("keyup",(event)=>{
    let bloq = event.getModifierState("CapsLock"); //Se toma el valor si se ha presionado la tecla Bloq Mayus (true o false)

    if(bloq){ //En caso de que la tecla haya sido presionada se deshabilitan los botones e input
        alerta.style.color = "red";
        input.setAttribute("disabled","disabled");
        btnEncriptar.setAttribute("disabled","disabled");
        btnDesencriptar.setAttribute("disabled","disabled");
    }else{ //En caso de que la tecla no este presionada se habilitarán los botones e input
        alerta.style.color = "black";
        input.removeAttribute("disabled");
        btnEncriptar.removeAttribute("disabled");
        btnDesencriptar.removeAttribute("disabled");
        input.focus();
    }
})