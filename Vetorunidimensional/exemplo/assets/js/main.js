function ValidaProc(){

    //Declarando a variável controladora i
    let i;

    //Declarando o vetor

    let num = [];


    //Alimentando o vetor com dados

    for(i=0;i<3;i++){

        num[i] = parseInt(prompt("Digite um número: "));
        console.log(num[i]+" este valor está sendo armazenado na posição "+ i +" do vetor.")
        
    }

    //Retirando os valores de cada posição do vetor...

    for(i=0; i<3;i++){

        console.log("O valor do vetor num na posição " + i + " é : "+num[i]);
    }
return false;
    


}