function ValidaImpares(){

    let i, vetor = [];

    for(i = 1 ; i<=10 ; i++){
        vetor[i] = parseFloat(prompt("Favor informe o número da "+i));
    }

    for(i=1; i<=10; i++){
        if(i %2!=0){
            console.log("O número:  " + vetor[i]+" no índice "+i);
        }
    }
    return false;
}