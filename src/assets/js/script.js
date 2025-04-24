window.onload = function(){
    const intro =document.getElementById("inicio")

    setTimeout(()=>{
        intro.classList.add("efeito-out")
        setTimeout(()=>{
            intro.style.display="none";
            content.classList.remove("hiden")
            content.classList.add("efeito-in")
        },1000)
    },3000)
}

function trocar(cor){
    document.body.style.background =cor;
}
