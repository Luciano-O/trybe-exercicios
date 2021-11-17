let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
info['recorrente'] = 'Sim';

  
// Exercicio 1
// console.log('Bem-vinda, ' + info.personagem)

// Exercicio 2
// console.log(info);

// Exercicio 3
// for (key in info) {
//     console.log(key)
// }

// Exercicio 4
// for (val in info) {
//     console.log(info[val])
// }

// Exercicio 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }
// for (marg in info) {
//     if (info[marg] === info2[marg]){
//         console.log('Ambos recorrentes')
//     } else {
//         console.log(info[marg] + ' e ' + info2[marg])
//     }
// }

// Exercicio 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
    ],
};
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' Se chama ' + leitor.livrosFavoritos[0].titulo);

// leitor.livrosFavoritos.push = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editor: 'Rocco',
// }

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' Livros favoritos')


