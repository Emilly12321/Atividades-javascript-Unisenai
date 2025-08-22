function ImprimirMatriz() {

    let matriz = [];
    let linhas = 2;
    let colunas = 3;

    // Alimentar a matriz

    for (let i = 0; i <linhas; i++) {

        matriz[i] = []
        for (let c = 0; c < colunas; c++) {

            matriz[i][c] = parseInt(prompt("Favor informe um número para "+i+"° linha e "+c+"° coluna: " ));

        }

    }


    for (let i = 0; i <linhas; i++) {



        for (let l = 0; l < colunas; l++) {

            document.write(matriz[i][l] + "&nbsp&nbsp");


        }
        document.write("<br>")

    }


    return false;
}