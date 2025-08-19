function ValidaMultiplicacao() {

    let vetor = []

    let opcao = parseInt(prompt("Favor informe um número que irá multiplicar no vetor "));

    for (let i = 0; i <= 10; i++) {

        vetor[i] =  i;

    
    }
    
    let mapeando = vetor.map((i)=> i * opcao ); // cria uma array com os resultados 
    
    mapeando.forEach((multi, i ) => { // percorre pelo mapeando (pela array)

        console.log(opcao + " * " + vetor[i] + " : " + multi);

    });
    
        

    return false;


}