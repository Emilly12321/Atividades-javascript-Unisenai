function SomarMatriz() {

    let matriz = [];
    let resposta = 0;
    let linhas = 2;
    let colunas = 2;

    // Alimentar a matriz

    for (let i = 1; i <= linhas; i++) {

        matriz[i] = []
        for (let c = 0; c <= colunas; c++) {

            matriz[i][c] = i;

        }

    }

    

    let opcao = parseInt(prompt("Favor informe a linha que você deseja verificar que você deseja multiplicar: "));


    for (let i = 1; i <=linhas; i++) {

        resposta[i] = []

        if (i == opcao) {

            for(let l = 1; l <=colunas ; l++){

            resposta += matriz[i][l];

            
        }
    }
    
}
    console.log("Soma da "+opcao+"° linha: "+ resposta);

    return false;
}