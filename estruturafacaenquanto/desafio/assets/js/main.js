function ValidaProc() {

    let turma = 1;
    let qtdealunos = 1;
    let somaAlunos = 0;
    let somatoriaMedia = 0.0;
    let mediaMaiorSete = 0;
    do {

        alunosTurma = parseInt(prompt("Favor informe a quantidade de alunos da " + turma + " ° turma"));

        do {

            media = parseFloat(prompt("Favor informe a média do " + qtdealunos + "° aluno: "));

            if (media >= 7) {
                mediaMaiorSete += 1
            }

            qtdealunos += 1
            somatoriaMedia += media;
            console.log("Total da média: " + somatoriaMedia);

        } while (qtdealunos <= alunosTurma)


        console.log("A " + turma + "° possui " + mediaMaiorSete + " de alunos com média igual ou acima de 7");
        mediaMaiorSete = 0;
        qtdealunos = 1;
        somaAlunos += alunosTurma;
        turma += 1;

    } while (turma <= 3)
        
    // let resposta = somatoriaMedia / somatoria 
    console.log("A escola possui a média de " + (somatoriaMedia / somaAlunos).toFixed(2));
    return false;
}