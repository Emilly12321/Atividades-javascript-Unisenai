function ValidaLocal() {

    let vetor = [];

    for (let i = 0; i < 10; i++) {

        vetor[i] = parseInt(prompt("Favor informe o " + (i + 1) + "° número: "));

    }

    let opcao = parseInt(prompt("Favor informe um número que deseja buscar: "));

    let index = vetor.indexOf(opcao);
    console.log("Indice: "+index+" o número é : "+ opcao);

    
}