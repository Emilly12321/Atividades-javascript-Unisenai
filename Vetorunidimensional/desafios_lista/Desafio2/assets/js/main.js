function ValidaLocal() {

    let vetor = [];
    let numero;

    for (let i = 0; i < 10; i++) {


        do {
            numero = parseInt(prompt("Favor informe o " + (i + 1) + "° número: "));

            if (vetor.includes(numero)) {
                console.log("Número já incluso na lista, favor informe outro.")
            }

        } while (vetor.includes(numero));

        vetor[i] = numero;

    }

    let opcao = parseInt(prompt("Favor informe um número que deseja buscar: "));

    console.log("Índice: " + vetor.indexOf(opcao) + " || número escolhido: " + opcao)


    return false;


}