function procFormulario(){
    if(document.getElementById('num1').value==""){
        alert("\nFavor preencha o campo Número 1");
        document.frmnumint.focus();
        return false
    }else  if(document.getElementById('num2').value==""){
        alert("\nFavor preencha o campo Número 2.");
        document.frmnumint.focus();
        return false
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        let operacao = parseInt(document.getElementById('operacao').value);

        switch(operacao){

            case():

            break;
            
            case(numint>=4 && numint<=10):
                console.log("Criança");
                return false;
            break;
            
            case(numint>=11 && numint<=18):
                console.log("Adolescente");
                return false;
            break;
            
            default:
                console.log("Adulto");
                return false;
            break;
            

            /*
            case 0:
            case 1:
            case 2:
            case 3:
                // alert("Bebê");
                console.log("Bebê");
                return false;
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                // alert("Criança");
                console.log("Criança");
                return false;
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                // alert("Adolescente");
                console.log("Adolescente");
                return false;
                break;
            default:
                // alert("Adulto");
                console.log("Adulto");
                return false;
                break;
            */
        }



    }
}