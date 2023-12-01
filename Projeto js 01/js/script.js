

let boxImage = document.getElementById("boxImage")
let qrImage = document.getElementById("qrImage")
let qrText =document.getElementById("qrText")


function Generate(){
    if(qrText.value.length > 0){
    qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    boxImage.classList.add("show-img");}
    else
    qrText.classList.add("Erro");
setTimeout(()=>{qrText.classList.remove('Erro')}, 100)
}