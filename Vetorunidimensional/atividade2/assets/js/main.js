function ValidaProc(){

    let i, contador = 0;
    let notas=[]


    for(i=0;i<3;i++){

        notas[i]=parseFloat(prompt("Favor informar a nota do "+(i+1) +"° aluno: "));
     
    }

    for(i=0;i<3;i++){

        console.log((i+1)+"° Aluno, nota: "+ notas[i]);

        if(notas[i]>= 7.5){
            contador++;
        }
    }
    console.log("Foram no total de "+contador+" alunos com notas acima de 7.5.");
    return false;

}