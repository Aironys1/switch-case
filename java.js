/*

let dia = 4;
let diaNome = '';

switch (dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:   
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7: 
        diaNome = 'Domingo'
        break;


}

document.getElementById('dia').innerHTML = "Hoje é:" + diaNome;


let data = 2;
let dataNome = '';

switch (data) {
    case 6 :
        dataNome = 'Final de Semana'
        break;
    case 7:
        dataNome = 'Final de Semana'
        break;
    
        default:
            dataNome = 'Dia de Semana'
            break;

}

document.getElementById('data').innerHTML = "Hoje é:"+dataNome;


/*Sistema de Sabor*/

/*

let sabor = 2;
let selecionado = '';

    switch (sabor){
        case 0:
            selecionado = 'Escolha um sabor';
            break;
        case 1:
            selecionado = 'Manga';
            break;
        
        case 2:
            selecionado = 'Morango';
            break;
        case 3:
            selecionado = 'Abacaxi';
            break;
        case 4:
            selecionado = 'Limão';
            break;
        case 5:
            selecionado = 'Uva';
            break;
        
        default:
            selecionado = 'Erro: NENHUM ITEM CADASTRADO'
    }

document.getElementById('sabor').innerHTML = "Seu sabor é:"+selecionado;



let idade = 18;
let suaIdade = 0;

if (idade <=18 ) {
    document.getElementById('idade').innerHTML = 'Você tem:' + idade + 'Anos'; 
}


*/

let nota =8;

if (nota <=4){
    console.log("Reprovado");
}else if (nota <=6) {
    console.log("Recuperação");
}else if (nota <=10){
    console.log("Parabéns, Você foi Aprovado!!!!!!")
} else {
    console.log("Erro: Aceitamos a media de: 0 a 10")
}

let nota1 = 5, nota2 = 10, nota3 = 10;
let media = "";

media = (nota1 + nota2 + nota3) / 3;

if (media <=4) {
    console.log("Você foi reprovado com a média:",+media);
}else if (media <=6){
    console.log("Você vai pra recuperação com a média:",media);
}else if (media <=10){
    console.log("PARABÉNS VC FOI APROVADO!!!!!!!!, SUA MÉDIA",+media)
}