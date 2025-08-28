const button = document.getElementById("verificar");
const modal = document.getElementById("dialog");
const closeModal = document.getElementById("fechar");

button.onclick = (() =>{

    modal.showModal();


});

closeModal.onclick = (() => {

    modal.close();


});


function carregar(caminho){

    window.open(caminho,"_blank");

}
