function MultiplicaMatriz(){

    let matriz = [];
    let resposta = [];
    let linhas = 3;
    let colunas = 3;

    // Alimentar a matriz

    for( let i = 1 ; i <= linhas ; i++){

        matriz[i]=[]
        for(let c = 0; c< colunas ; c++){

            matriz[i][c]= i;

        }

    }

    // Matriz[ 1 1 1 ; 2 2 2 ; 3 3 3 ]

    let opcao = parseInt(prompt("Favor informe o valor que você deseja multiplicar: "));

    for(let i = 1 ; i <= linhas ; i++){

        resposta[i] = []
        for(let c = 0 ; c < colunas; c++){

            resposta[i][c] = matriz[i][c] * opcao;
            document.write(resposta[i][c]+ "&nbsp&nbsp")
        }

        document.write("<br>")
    }
    // resposta [2 2 2 ; 4 4 4 ; 6 6 6 ];
    
    return false;
}