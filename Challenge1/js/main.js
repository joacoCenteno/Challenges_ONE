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
    let textoIngresado = input.value;
    let encriptado = "";

    if(textoIngresado.length == 0){
        imagen.setAttribute("src","src/muñeco.svg");
        mensajeDos.style.display = "block";
        mensajeUno.textContent = "Ningun mensaje fue encontrado";
        btnCopiar.style.display = "none";
    }else{
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
    
        imagen.setAttribute("src","");
        mensajeDos.style.display = "none";
        mensajeUno.textContent = encriptado;
        btnCopiar.style.display = "block";
    }
    

});


//Desencriptacion
btnDesencriptar.addEventListener('click',()=>{
    let textoIngresado = input.value;

    if(textoIngresado.length == 0){
        imagen.setAttribute("src","src/muñeco.svg");
        mensajeDos.style.display = "block";
        mensajeUno.textContent = "Ningun mensaje fue encontrado";
        btnCopiar.style.display = "none";
    }else{
        let desencriptado = textoIngresado.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");

        imagen.setAttribute("src","");
        mensajeDos.style.display = "none";
        mensajeUno.textContent = desencriptado;
        btnCopiar.style.display = "block";
    }


});


//Copiado de texto
btnCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(mensajeUno.textContent);

    btnCopiar.style.display ="none";
    mensajeDos.style.display = "block";
    mensajeDos.textContent = "Texto Copiado!";
    input.value = "";
    input.focus();
});


//Controla el uso de mayusculas
window.addEventListener("keyup",(event)=>{
    let bloq = event.getModifierState("CapsLock");

    if(bloq){
        alerta.style.color = "red";
        input.setAttribute("disabled","disabled");
        btnEncriptar.setAttribute("disabled","disabled");
        btnDesencriptar.setAttribute("disabled","disabled");
    }else{
        alerta.style.color = "black";
        input.removeAttribute("disabled");
        btnEncriptar.removeAttribute("disabled");
        btnDesencriptar.removeAttribute("disabled");
        input.focus();
    }
})