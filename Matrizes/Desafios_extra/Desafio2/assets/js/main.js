function MostrarCompras() {
    //     No Supermercado Alegria, existe um controle em relação ao valor das compras dos
    // clientes nos 03 últimos meses, como mostra a tabela a seguir:
    // Faça um programa que peça os nomes dos 3 clientes e os valores das compras
    // feitas por eles nos 03 últimos meses e calcule:

    // • A quantidade de compras;

    // • A média das compras, considerando essa quantidade.

    // Após os cálculos serem efetuados, você deve exibir o menu a seguir ao usuário:

    // • Ver compras de um cliente (permitir que o dono do supermercado consulte os
    // valores das compras dos 3 meses, da média das compras e quantidade de compras
    // de um cliente qualquer, consultando pelo seu nome);

    // • Ver todas as compras de todos os clientes (mostrar a tabela inteira com todos os
    // valores).

    // Obs.: Quando o cliente não tiver comprado naquele mês, deve ser informado
    // 0 no valor da compra (equivale ao “R$ - “ da tabela). Guarde os nomes dos
    // clientes em um vetor. Os valores da tabela são exemplos, o programa poderá
    // receber quaisquer nomes de clientes e valores de compras.

    let matriz = [], nome = [], media = [], contador = 0, qtde_compra = [], somaCompra = 0.0, total_compra = [];
    let opcao;

    for (let i = 1; i < 4 ; i++) {
        matriz[i] = [];

        somaCompra = 0;
        contador = 0;

        nome[i] = prompt("Favor informe o nome do cliente: ");

        for (let j = 1; j < 4
            ; j++) {


            matriz[i][j] = parseFloat(prompt(j + "° Mês \n\n Favor informe o valor da sua " + (j) + "° compra:  \n\n(Caso você não tenha efetuado alguma compra neste mês, informe 0.)"));

            if (matriz[i][j] != 0) {

                contador++;

            }
            somaCompra += matriz[i][j]

        }
        total_compra[i] = somaCompra;
        qtde_compra[i] = contador;
        media[i] = total_compra[i] / qtde_compra[i]
    }


    do {
        let escolha = parseInt(prompt("===== Menu ==== \n\n Digite uma das opções abaixo: \n 1 - Olhar todos os clientes e suas compras \n 2 - Olhar as compras de um cliente expecifico"));


        switch (escolha) {

            case (1):

                for (let i = 1; i < 4; i++) {
                    console.log("\n\nNome: " + nome[i]);
                    for (let j = 1; j < 4; j++) {

                        console.log(j + "° Mês \n\nCompras: " + matriz[i][j]);

                    }
                    console.log("Média do gasto : " + media[i] + " || Qtde de compras : " + qtde_compra[i]);


                }
            break

            case (2):
                
                nome.forEach((nomes,i) => console.log(i+"° Cliente: "+nomes));
                
                let nome_escolhido = prompt("Favor informe o nome do cliente que deseja visualizar: ");

                nome.forEach((nomes,i) =>{

                    if (nome_escolhido == nomes) {
                        
                        console.log("\n\nNome: " + nome_escolhido);  
                        
                        for (let j = 1; j < 4; j++) {

                            console.log(j + "° Mês \n\nVlr gasto: " + matriz[i][j]);

                        }
                        console.log(" Média do gasto : " + media[i] + " || Qtde de compras : " + qtde_compra[i])

                    }


                } )
            break

                

            default: 
                console.log("Opção inválida.");
            break

        }



    
        opcao = prompt("Deseja continuar a busca? (S/N)").toLowerCase();
        console.clear()
        

    } while (opcao != 'n')




    return false;
}