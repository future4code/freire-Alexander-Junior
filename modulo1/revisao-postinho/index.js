
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
// return `No comparador de igualdade ${a} === ${b} e ${a === b}`
// }
// console.log(checarIgualdade(1,10));

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior (a,b) {
//     return `Na verificação de igualdade ${a} > ${b} é ${a > b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'=false
// d-) 'b'>'a'=true 
// e-) 0!==null=true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = (nomeDoUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade) => {
//     const usuario = []
//     //  Sua lógica aqui
//  if (anoDeNascimento < 2003 && senhaDoUsuario.length > 6 && nacionalidade === "brasileiro") {
//      usuario.push(nomeDoUsuario)
//      usuario.push(nacionalidade)
//      usuario.push(senhaDoUsuario)
//      usuario.push(nacionalidade)
//     }
// return usuario
    
// }
// console.log(cadastro("douglas", 2002, "xanzinn","brasileiro"));

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = (senha1) => {
//     const login = "labenu"
//     //  Sua lógica aqui
// if (senha1 === login) {
//     return "Usuario logado"   
// }else{
//     return "Senha invalida"
// }
// }

// console.log(login("labenu"));

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = (nomeDoUsuario1,vacina) => {
// let tempo 
// let data
//     //  Sua lógica aqui
// if (vacina === "Coronavac") {
//     tempo = 28 
//     data = "20/06"
//     return `Olá ${nomeDoUsuario1}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// }else if (vacina === "Astrazenica"){
//     tempo = 90
//     data = "23/08"
//     return `Olá ${nomeDoUsuario1}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// }else{
//     tempo = 90
//     data = "23/08"
//     return `Olá ${nomeDoUsuario1}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
// }

// }
// console.log(primeiraDose("Xan", "Coronavac"))


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
// const usuariosImunizados = usuarios.map((item)=>{
//  if (nomeDoUsuario === item.nome) {
//      item.imunizacao = "completo"
//  }
//  return item
// })
// return usuariosImunizados
// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
 
//     usuarios.forEach((item1)=>{
//       if (item1.imunizacao === "incompleta") {
//         console.log(`Olá ${item1.nome}! Sua imunização está ${item1.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`); 
//       }
//     })
//     //  Sua lógica aqui
//     }

// console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
//   const usuarios ={
//       nome:prompt("Digite o seu nome:"),
//       ano:prompt("Digite sua data de nascimento:"),
//       senha:prompt("Digite sua senha:"),
//       nacionalidade:prompt("Sua nacionalidade:")
//   }
// return usuarios

// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// const login ={
//     senha:prompt("digite sua senha:")
   
// } 
// if (login.senha === "labenu") {
//      console.log("Usuario logado"); 
//  }else{
//      console.log("Senha invalida"); 
//  }
// }
// console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
 
}
console.log(primeiraDoseDesafio())

const segundaDoseDesafio = (usuarios) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("Barbara"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());