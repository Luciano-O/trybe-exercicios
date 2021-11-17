// let cont = 0;
// for (let n = 2; n <= 150; n += 1) {
//     if ((n % 3) === 0) {
//         cont += 1
//     }
// }
// if (cont === 50) {
//     console.log('mensagem secreta')
// }
// console.log(cont)

// idade = 18
// if (idade >= 18) {
//     console.log('A pessoa é maior de idade')
// } else {
//     console.log('A pessoa é menor de idade')
// } 

// let carolzitaIdade = 0;
// let muriloIdade = 0;
// let baetaIdade = 0;

// if (carolzitaIdade < muriloIdade) {
//     if (carolzitaIdade < baetaIdade) {
//         console.log('Carolzita é a pessoa mais nova')
//     } 
// }
// else if (muriloIdade < baetaIdade) {
//     console.log('Murilo é a pessoa mais nova')
// }
// else {
//     console.log('Baeta é a pessoa mais nova')
// }

let p1 = '';
let p2 = '';

if (p1 === 'pedra') {
    if (p2 === 'papel') {
        console.log('Player 2 won')
    }
    else if (p2 === 'tesoura') {
        console.log('Player 1 won')
    }
    else {
        console.log('Draw')
    }
}
else if (p1 === 'papel') {
    if (p2 === 'papel') {
        console.log('Draw')
    }
    else if (p2 === 'tesoura') {
        console.log('Player 2 won')
    }
    else {
        console.log('Player 1 won')
    }
}
else {
    
}