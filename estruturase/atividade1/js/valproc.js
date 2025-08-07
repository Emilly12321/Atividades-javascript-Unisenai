

function procFormulario(){


    // Validação de campos (Se documento html no frmnotas (formulario), o campo estiver com valor vazio)
    if(document.frmnotas.txtnum1.value == ""){

            alert("Preencha o campo Nota 1");
            document.frmnotas.txtnum1.focus();
            return false;

    }
    else if(document.frmnotas.txtnum2.value == ""){

            alert("Preencha o campo Nota 2");
            document.frmnotas.txtnum2.focus();
            return false;

    }
    else if(document.frmnotas.txtnum3.value == ""){

            alert("Preencha o campo Nota 3");
            document.frmnotas.txtnum3.focus();
            return false;

    }
    else{

        // Processamento do programa...
        // declarando a váriavel e convertendo (persefloat) para real, onde puxa no documento html pelo ID o seu valor  
        let nota1 = parseFloat(document.getElementById('num1').value);
        let nota2 = parseFloat(document.getElementById('num2').value);
        let nota3 = parseFloat(document.getElementById('num3').value);
        let media =(nota1+nota2+nota3)/3;

        if(media>=7){
            alert("Sua média foi "+ media.toFixed(2)+"\nVocê foi aprovado, parabéns!!! ")
        }
        else if(media >= 5 && media <= 6.9){

            alert("Sua média foi "+media.toFixed(2)+"\nVocê está em recuperação, cuidado!!")
        }
        else{

            alert("Sua média foi "+ media.toFixed(2) +"\nVocê está reprovado...")

        }


    }

}


