function tabuada() {

    if (document.getElementById('numint').value == "") {
        alert("Favor preencha o campo");
        document.frmtabuada.numint.focus();
        return false;
    } else {



        let numint = parseInt(document.getElementById('numint').value);

        for (let i = 0; i < 11; i++) {
            let valor = numint * i
            console.log(numint + " * " + i + " = " + valor);
        }
        return false;
    }


}