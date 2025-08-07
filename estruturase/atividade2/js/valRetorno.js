
function valRetorno() {

    if (document.frmnotas.txtnum1.value == "") {

            alert("Preencha o campo Nota 1");
            document.frmnotas.txtnum1.focus();
            return false;

    }
    else if (document.frmnotas.txtnum2.value == "") {

            alert("Preencha o campo Nota 2");
            document.frmnotas.txtnum2.focus();
            return false;

    }
    else{
        let numero1 = parseInt(document.getElementById('num1').value);
        let numero2 = parseInt(document.getElementById('num2').value);

        if( numero1 == numero2){

            alert("O 1° numero: "+ numero1 +" , é igual ao 2° número: "+ numero2);
        }
        else if( numero1 > numero2){
            
            alert("O 1° número : "+numero1+" , é maior que o 2° número:  "+ numero2);

        }
        else if( numero1 < numero2){
            
            alert("O 1° número: "+numero1+", é menor que o 2° número: "+ numero2);

        }
        

    }


}