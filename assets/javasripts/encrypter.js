/*  e 	⇔ 	enter
    i 	⇔ 	imes
    a 	⇔ 	ai
    o 	⇔ 	ober
    u 	⇔ 	ufat 
*/

const codigo = [
    {
        key: 'e',
        value: 'enter'
    },
    {
        key: 'i',
        value:'imes'
    },
    {
        key: 'a',
        value:'ai'
    },
    {
        key: 'o',
        value:'ober'
    },
    {
        key:'u',
        value:'ufat'
    }
];


//Eventos

let btn_encript = document.getElementById("btn-encriptar");
btn_encript.onclick = encrypt;

let btn_decript = document.getElementById("btn-desencriptar");
btn_decript.onclick = decrypt;

let btn_clean = document.getElementById("btn-limpiar");
btn_clean.onclick = limpiar;

let btn_copy = document.getElementById("btn-copiar");
btn_copy.onclick = copyText;

let btn_info = document.getElementById("btn-info");
btn_info.onclick = showInfo;

const msg_default = document.querySelector(".msg-default");
msg_default.style.display = "flex";

const msg_result = document.querySelector(".msg-result");
msg_result.style.display = "none";

const img_default = document.querySelector(".img-default");
img_default.style.display = "block";

const img_result = document.querySelector(".img-result");
img_result.style.display = "none";

const img_alert = document.querySelector(".img-alert");
img_alert.style.display = "none";

const info = document.querySelector(".info");
info.style.display = "none";



//Funciones

function showInfo(){
    if (info.style.display === 'none') {
        info.style.display = 'block';
        img_alert.style.display = "block";
        img_default.style.display = "none";
        img_result.style.display = "none";

      } else {
        info.style.display = 'none';
        img_alert.style.display = "none";
        img_default.style.display = "block";
        img_result.style.display = "none";
      }
}

function validateMessage(msg){
    let validate = new RegExp("[A-ZÀ-ú0-9]");
    if (validate.test(msg.value)){
        alert("Por favor, solo ingresar letras minusculas sin acentos.")
        img_default.style.display = "none";
        img_result.style.display = "none";
        img_alert.style.display = "none";
        window.location.reload();
    }

}

function showMessage(msg) {
    const output = document.getElementById("result-text");
    output.value = msg;
    msg_default.style.display = "none"
    msg_result.style.display = "flex"
    
    img_alert.style.display = "none";
    img_default.style.display = "none";
    img_result.style.display = "block";

}

function readMessage() {
    const input = document.getElementById("encrypt-text");
    return input.value;
}

function encrypt() {
    let msg = readMessage();
    codigo.forEach(element => {
        msg = msg.replaceAll(element.key, element.value)
    });

    showMessage(msg);   
}

function decrypt() {
    let msg = readMessage();
    codigo.forEach(element => {
        msg = msg.replaceAll(element.value, element.key);
    });

    showMessage(msg);

}

function copyText(){
    const copyMsg = document.getElementById("result-text");
    navigator.clipboard.writeText(copyMsg.value);
    alert('Mensaje copiado')
}

function limpiar() {
    const input = document.getElementById("encrypt-text");
    input.value = "";
    const output = document.getElementById("result-text");
    output.value = "";
    msg_default.style.display = "flex"
    msg_result.style.display = "none"
    info.style.display = 'none';

    img_alert.style.display = "none";
    img_default.style.display = "block";
    img_result.style.display = "none";
    
}








