function ValidaNota(){
   
    let nota1= [] , nota2 = [] , media=[];

    for(let i = 0 ; i< 5 ; i++){
        
        nota1[i] = parseFloat(prompt((i+1)+"° Aluno\n Favor informe o valor a primeira nota: "));
        nota2[i] = parseFloat(prompt((i+1)+"° Aluno\n Favor informe o valor a primeira nota: "));
       
    }
    
    for(let i = 0 ; i< 5; i++){
        
        media[i] = (nota1[i] + nota2[i])/2;
        
        console.log((i+1)+"° Aluno \nTeve a média de : "+ media[i]);


    }

    return false;

}