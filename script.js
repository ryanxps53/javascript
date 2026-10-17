//console.log() mostra uma informação no console                                
//typeof mostra oque o texto é no console
console.log("Olá, Mundo!");
console.log("6" + "7");

console.log (typeof "Olá, Mundo!"); //string
console.log (typeof 17);//number
console.log (typeof 10.5);//number
console.log (typeof true );//boolean
console.log (typeof false );//boolean

//váriavel e uma caixa que guarda informções 
//const não pode ter seu valor alterado durante o programa
const nome = "Cebolão";
console.log (nome);

//let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);
console.log("Olá " + nome + ", que tem " + idade, "Anos " );

idade = 18;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);


// ------------------- teste-----------------

const nome2 = "valéria";
idade2 = 22
let peso = 63;

console.log(nome2 + " tem " + idade2 + " anos e tem " + peso + " kilos antes da gravidez");
idade2 = 24
peso = 67;

console.log (nome2 + " tem " + idade2 + " anos, e ficou com " + peso + " kilos durante a gravidez");



// METEDOS DE STRING
const texto = "JavasCriPt"

// CONTA QUANTOS CARACTERES A STRING TEM
console.log(texto.length);

// ALTERA TODAS AS LETRAS PRA MAIÚSCULO-
console.log(texto.toUpperCase());

// ALTERA TODAS AS LETRAS PARA MINÚSCULO
console.log(texto.toLowerCase());

const nome_completo = "Ryan da Costa Ribeiro"

console.log(nome_completo.includes("Costa")); // true
console.log(nome_completo.includes("Bezerra")); // false


console.log(10>5); // true
console.log(10<5); // false


console.log(10>=10); //true
console.log(10<=5); //false

console.log("10"== 10); //true porque so ve se 10 e igual a 10
console.log("10"===10); //false porque ve se texto e igual a numero

console.log(10 !==5); //10 e diferente de 5, true



const idadepessoa =17
console.log(idadepessoa >= 18) //false
console.log(idadepessoa >= 16) //true

//------------------------ exercicio------------------


console.log(nome_completo == "Valéria") //false



//coletamos a idade da pessoa

let pessoa_idade = 19;

// verificar se a idade e maior ou igual a 18

if(pessoa_idade >= 18){           // if significa "se" a idade da pessoa for maior de 18 vai ser executado tudo que esta dentro da chave

// se maior ou igual a 18 ela é maior de idade

console.log("Já pode ser preso HAHAHAHA!")

}else{ // tipo um if, porem significa "se não" e ele so pode ser usado se ja tiver um if antes dele
    console.log("não vai pra balada!😂😂")
}

//se menor que 18 ela é menor de idade


//coletamos a idade da pessoa
    let idadeVotação = 16



//verificar se a idade da pessoa e maior que 70
if(idadeVotação>70){
    console.log("Parabéns você não precisa votar em painho")




//se a idade da pessoa for maior ou igual a 18
}else if(idadeVotação>=18){
    console.log("Parabéns, você pode votar em painho")



//senao se a idade da pessoa for maior ou igual a 16
    
}else if(idadeVotação>=16){
    console.log("você não é obrigado a votar, mais se quiser pode votar no painho")

}else{
    console.log("você não pode votar em painho")
}

//se não for nenhuma das alternaivas anteriores
