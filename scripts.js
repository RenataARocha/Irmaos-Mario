const form = document.querySelector(".formulario-fale-conosco")
const macara = document.querySelector(".mascara-formulario")


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    macara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    macara.style.visibility = "hidden"
}


function cliqueiNoFaleConosco(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    macara.style.visibility = "visible"



}



