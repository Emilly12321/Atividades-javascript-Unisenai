function Validaproc(){
    
    let i = 1;
    let acumula = 0;

    while(i<=3){
        number = parseInt(prompt("Digite um número: "));
        i++
        acumula+=number
    }
    console.log("A soma dos números digitado é : ", acumula);

    return false;


}