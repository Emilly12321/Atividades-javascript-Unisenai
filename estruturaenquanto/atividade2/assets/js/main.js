function Validaproc(){
    
    let i = 1;
    let numero = 0;

    while(i<=3){
        
        number = parseInt(prompt("Digite um número: "));
        
        if(number > numero){
            numero = number
        }
        i++

    }
    console.log("O número maior informado até o momento é  : ", numero);

    return false;


}