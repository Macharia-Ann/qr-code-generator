const inputBox = document.getElementById("input-box");
const qrCodeBtn = document.getElementById("generate-qr");
const qrImage = document.getElementById("qr-image");
const resultDiv = document.querySelector(".result");

function generateQr(){
    if(inputBox.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +inputBox.value;
    resultDiv.classList.add("show-img");
}
else{
    setTimeout(()=>{
        inputBox.classList.add("error");
    },1000)
}
}

document.querySelector("body").addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        generateQr();
    }
})
qrCodeBtn.addEventListener("click", generateQr);