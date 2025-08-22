function MostrarDiagonal() {
    
    let matriz = [];
    let diagonalUm = [], diagonalDois = [],somaIdice;
    for (let i = 0; i < 4; i++) {

        matriz[i] = [];

        for (let j = 0; j < 4; j++) {

            matriz[i][j] = (i + j);
            somaIdice = i + j;

            if( i == j){
                diagonalUm[i] = matriz[i][j];

            }else if( somaIdice == 3){
                diagonalDois[i] = matriz[i][j];
            }
        }
    }

    console.log(matriz);
    console.log(diagonalUm);
    console.log(diagonalDois);

   

    return false;
}