function SomarElementos() {

    // Desafio2

    // A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
    // números reais e mostre a soma de seus elementos.

    let matriz = [];
    let soma = 0.0;

    for (let i = 0; i < 4; i++) {

        matriz[i] = [];
        for (let j = 0; j < 3; j++) {

            matriz[i][j] = parseFloat(prompt("Posição: " + (i + 1) + " | " + (j + 1) + " \n Favor informe um número real: "));
            soma += matriz[i][j];

        }
    }

    console.log(matriz);
    console.log("A soma dos elementos é : " + soma);

    return false;
}