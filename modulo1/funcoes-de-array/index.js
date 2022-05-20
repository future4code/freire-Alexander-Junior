//atividade de interpretação
//questão 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) O que vai ser impresso no console?
//Ele vai imprimir todos os usuarios que estão no array

// Questão 2
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//a) O que vai ser impresso no console?
//Vai imprimir apenas os nomes das pessoas que estão no array

// Questão 3
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
//Vai imprimir as pessoas que não tem o apelido de "Chijo"

//-----------------------------------------------------------

//Atividade de escrita de codigo
//Questão 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//Letra 
//  const imprimirNome = pets.filter ((pets) =>{
//     console.log(pets.nome);
//     return pets.nome
    
// })
//Letra B 
// const cachorrosSalsicha = pets.filter((pets)=>{
//     if (pets.raca === "Salsicha") {
//         console.log(pets.raca);
//         return true
//     }
// })
//     console.log(cachorrosSalsicha);

//Letra C 

// const petsPoodles = pets.filter((pets)=>{
//    if (pets.raca === "Poodle") {
//        console.log(pets.raca);
//         return pets.raca
//    }
// })
//  console.log(petsPoodles);
  
//  const DescontoDoCliente = petsPoodles.map((petsPoodles)=>{
//      console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " ,petsPoodles.nome, "!");
//   })
 
    
    //Questão2   
    // const produtos = [
    //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    //  ]
                
//Letra A
//  const nomeDoItem = produtos.filter((produtos)=>{
//      console.log(produtos.nome);  
//     return produtos.nome
//  })   
//  console.log(nomeDoItem);
 //Letra B
//  const objetoPreco = produtos.map((nomeDoItem)=>{
//    return {nome: nomeDoItem.nome, preco: nomeDoItem.preco *0.95}
//  })
//   console.log(objetoPreco);

//   //Questão C
//   const objetosBebidas = produtos.filter((objetoPreco)=>{  
//      return objetoPreco.categoria === "Bebidas"
//   })
//   console.log(objetosBebidas);

  //Questão D
//  const itemIpe = produtos.filter((objetoPreco)=>{
//     if (objetoPreco.nome.includes("Ypê")) {
//         return objetoPreco
//     }
//  })
//  console.log(itemIpe);
  
 //Questão E
//  const itemPrecoFiltrado = produtos.filter((itemIpe)=>{
//     if (itemIpe.nome.includes("Ypê")) {
//         return itemIpe  
//      }
    
//  })
//  const itemPreco = itemIpe.map((itemIpe)=>{
//      if  (itemIpe.nome.includes("Ypê")) {
//         return `Compre ${itemIpe.nome} por ${itemIpe.preco}`   
//      }
    
//  })
//  console.log(itemPreco);