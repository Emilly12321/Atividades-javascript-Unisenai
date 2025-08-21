function SomarEdificio() {
    
    let matriz = [];
    let familia = 0;
    let somaTudo = 0.0;

    for (let i = 0; i < 2; i++) {

        matriz[i] = [];

        for (let j = 0; j < 3; j++) {

            matriz[i][j] = (parseFloat(prompt((i + 1) + "° Andar \n Favor informar a renda do  " + (j + 1) + "° primeira casa: ")));
            familia++;
            somaTudo += matriz[i][j];
        }
    }

    for (let i = 0; i < 2; i++) {

        for (let j = 0; j < 3; j++) {

            console.log((i+1)+"° Andar \n  A  renda da "+(j+1)+ "° casa é : "+matriz[i][j]);
        }
    }
    console.log("O resultado da média geral deste edificio é : "+ (somaTudo / familia));

    return false;
}