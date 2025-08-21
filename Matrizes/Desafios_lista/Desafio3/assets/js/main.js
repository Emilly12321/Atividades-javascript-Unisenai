function MultiplicaElementos() {
    // Desafio 3 

    // A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
    // 5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
    // elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original 
    // e a nova.

    let matriz = [], matrizMulti = [];

    for (let i = 1; i < 5; i++) {

        matriz[i] = [];
        matrizMulti[i] = [];
        for (let j = 1; j < 5; j++) {

            // matriz[i][j] = parseInt(prompt("Favor informe um número: "));
            matriz[i][j] = j;
            matrizMulti[i][j] = (matriz[i][j] * 2);
        }

    }
    console.log(matriz);
    console.log(matrizMulti);



    return false;
}