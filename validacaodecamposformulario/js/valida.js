function validaFormulario(){

    if(document.frmcadastro.txtnome.value=="") {

        alert("Preencha o campo Nome");
        document.frmcadastro.txtnome.focus();
        return false;

    } else if(document.frmcadastro.txtfone.value=="") {

        alert("Favor preencha o campo Telefone");
        document.frmcadastro.txtfone.focus();
        return false;

    } else if(document.frmcadastro.txtemail.value=="") {

        alert("Favor preencha o campo E-mail.");
        document.frmcadastro.txtemail.focus();
        return false;

    } else {

        alert("Todos os campos foram preenchidos");
        return true;
    }
}