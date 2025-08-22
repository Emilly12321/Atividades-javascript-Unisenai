function MultiplicaElementos() {
    // Desafio 4 

    // O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
    // de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
    // de todos os elementos.


    let matriz = [], somaLinha = [], somaTudo = 0, acumular;

    for (let i = 0; i < 4; i++) {
        acumular = 0;
        matriz[i] = [];

        for (let j = 0; j < 5; j++) {
            matriz[i][j] = j;
            somaTudo += matriz[i][j];
            acumular += matriz[i][j];


        }
        somaLinha[i] = acumular

    }

    console.log(matriz);
    console.log("\nSoma das linha: " + somaLinha + "\nSoma de tudo: " + somaTudo);




    return false;
}