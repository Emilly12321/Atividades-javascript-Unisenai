function ValidaProc(){

    let i;
    let vetor=[];

    for(i=0;i<10;i++){

        vetor[i] = i * i;

    }

    for(i=0;i<10;i++){

        console.log((i+1)+"° nesta posição está armazenada o valor: "+ vetor[i])

    }
    return false;

}