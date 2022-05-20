//Atividades de intrerpretão
//Questão 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//Ele conta ate 10 

//Questão 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//A= O console vai imprimir apenas numeros maiores do que 18
//B= È sim, mas eu tambem poderia usar i++

// Questão 3
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Ele pularia as 4 linhas 

//Atividade de codigo escrita
//1

const quantidadeDeBichos = prompt ("Digite quantos bichos voce tem:")
 let arrayResultado = quantidadeDeBichos
   if (quantidadeDeBichos == 0) {
       console.log( "Que pena! Você pode adotar um pet!");   
   }else if (quantidadeDeBichos > 0){
       console.log(prompt ("digite o nome deles:"));
   }
        