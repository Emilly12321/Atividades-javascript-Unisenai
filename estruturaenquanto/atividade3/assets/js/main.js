function Validaproc() {

    let i = 1;
    let contador = 0;
    let somatorio = 0;

    while (i <= 3) {
        number = parseInt(prompt("Digite um número: "));

        while (number < 0) {
            number = parseInt(prompt("Digite o número novamente, porém desta vez positivo: "));
        }
        if(number % 5 == 0){
            somatorio += number;
            contador++;

        }
        i++;
    }
    console.log("A soma dos números digitado que são divisiveis por 5 é : "+ somatorio);
    console.log("A quantidade de números divisiveis por 5 são : "+ contador);

    return false;


}