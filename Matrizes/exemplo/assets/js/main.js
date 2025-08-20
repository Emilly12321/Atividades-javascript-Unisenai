function ValidaMatriz(){

    let matriz = [];
    let linhas = 3;
    let colunas = 3;

    // Alimentar a matriz

    for( let i = 0 ; i < linhas ; i++){

        matriz[i]=[]
        for(let c = 0; c< colunas ; c++){

            matriz[i][c]= parseInt(prompt("Digite o valor da linha "+ i + " e coluna "+c ));

        }

    }
    // Imprimindo 

    for(let i = 0 ; i < linhas ; i++){

        for(let c = 0 ; c < colunas; c++){

            document.write(matriz[i][c]+ "&nbsp&nbsp")
        }
        document.write("<br>")


    }

    return false;
}