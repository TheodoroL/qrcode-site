

const  textoParaQRCode = document.querySelector("input"); 
const bnt = document.querySelector("#gerar"); 
const Qrcode = document.querySelector("#qrcode")

bnt.addEventListener("click", ()=>{
    const imgqrcode = [... document.querySelectorAll("img")]; 

    if(imgqrcode.length > 0){
        Qrcode.removeChild(imgqrcode[0]); 
        var qrcode = new QRCode(Qrcode, {
                    text: textoParaQRCode.value,
                    width: 200,
                    height: 200
                });

    }
    else{
        qrcode= new QRCode(Qrcode, {
            text: textoParaQRCode.value,
            width: 200,
            height: 200
        });
    }
    textoParaQRCode.value= ""
})
        // Criação do QR Code