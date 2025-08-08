function Tabuada(){
    if(document.getElementById('numint').value==""){
        alert("Favor preencha o campo.");
        document.getElementById('numint').focus();
        return false;

    }else{
        let numero = parseInt(document.getElementById('numint').value);
        let tab = 1;
        
        do{
            // result = numero * tab ;  - formato utilizando uma variavel para receber o calculo entre os dois dados
            console.log(numero+"  *  "+ tab + " = "+ numero * tab);
            tab+=1

        }while(tab<=10)
         return false;

    }
}