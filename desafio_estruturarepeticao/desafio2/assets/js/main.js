function ValidaIMC() {

    do {

            altura = parseFloat(prompt("Favor informe sua altura: "));
            peso = parseFloat(prompt("Favor informar seu peso: "));
            imc = (peso / (altura * altura)).toFixed(1);

            alert("Seu IMC é : " + imc);

            op = prompt("Você deseja continuar calculando o IMC? (S/N) ");

    } while (op == 's' || op == 'S')


    console.log("Finalizado!");

    return false;


}