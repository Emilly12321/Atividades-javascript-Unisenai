function ValidaProc() {

    let turma = 1;
    let alunos = 1;
    let somatoria = 0;
    let somatoriaMedia = 0.0;
    let mediaMaiorSete = 0;
    do {
        escola = parseInt(prompt("Favor informe a quantidade de alunos " + turma + " ° turma"));

        do {

            media = parseFloat(prompt("Favor informe a média do " + alunos + "° aluno: "));

            if (media >= 7) {
                mediaMaiorSete += 1
            }

            alunos += 1
            somatoriaMedia += media;
            console.log("Total da média: " + somatoriaMedia);

        } while (alunos <= escola)


        console.log("A " + turma + "° possui " + mediaMaiorSete + " de alunos com média igual ou acima de 7");
        mediaMaiorSete = 0;
        alunos = 1;
        somatoria += escola;
        turma += 1;

    } while (turma <= 3)

    console.log("A escola possui a média de " + somatoriaMedia / somatoria.toFixed(2));
    return false;
}