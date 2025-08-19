function ValidaInverso() {

    let vetor = []

    console.log("Crescente");
    for (let i = 0; i <= 3; i++) {

        vetor[i] =  i;

    }
    console.log(vetor);
    

    console.log("Decrescente");

    console.log([...vetor].reverse()) // não modifica a array original

    return false;


}