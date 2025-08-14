function  Validarresultado(){

    let numeroUm = parseInt(prompt("Favor informar o primeiro número: "));
    let numeroDois = parseInt(prompt("Favor informar o segundo número: "));
    let questao_soma = parseInt(prompt("Favor informar a soma entre "+numeroUm + " + "+ numeroDois +": "));

    let soma_correta = numeroUm + numeroDois;

    while(questao_soma != soma_correta){
        alert("A soma está incorreta")
        questao_soma = parseInt(prompt("Favor informe a soma correta entre os números "+numeroUm+" + "+ numeroDois+" : "));
    }

    alert("Parabéns, você acertou a soma. A soma era : "+ soma_correta);
    return false;
}