function ValidaSalario() {

    let salarioF = 0.0;
    let qtde_F = 0;
    let salarioM = 0.0;
    let qtde_M = 0;
    let pessoas = 0;
    let idades_geral = 0;
    let salario_geral = 0.0;

    do {

        idade = parseInt(prompt("Favor informe sua idade: "));
        salario = parseFloat(prompt("Favor informe seu sálario: "));
        genero = prompt("Favor informe seu gênero, F - Feminino ou M - Masculino");

        if (genero == 'F' || genero == 'f') {

            salarioF += salario;
            qtde_F++;

        } else {

            salarioM += salario;
            qtde_M++;
        }

        

        idades_geral += idade;
        salario_geral += salario;
        pessoas++;

        op = prompt("Caso deseja sair, digite -Finalizar- : ");


    } while (op != "Finalizar" && op != "finalizar");

    let mediaF = salarioF / qtde_F;
    let mediaM = salarioM / qtde_M;
    let media_idade = idades_geral / pessoas;
    let media_geral = salario_geral / pessoas;

    alert("A média do salário de forma geral é: " + media_geral + "\n A média de idades é: " + media_idade + "\n A média de salário feminino: " + mediaF + "\n A média de salário Masculino é : " + mediaM)

    return false;
}