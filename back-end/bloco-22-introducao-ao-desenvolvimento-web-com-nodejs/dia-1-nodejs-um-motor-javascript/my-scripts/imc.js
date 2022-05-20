const readline = require('readline-sync')

const peso = readline.questionFloat('peso')
const altura = readline.questionFloat('altura');
const imc = peso / altura ** 2;
console.log(24.9 >= imc >= 18.5);
if (imc < 18.5){
  console.log('Abaixo do peso(magreza)');
} else if ( imc >= 18.5 && imc <= 24.9 ) {
  console.log('Peso normal');
} else if ( imc >= 25 && imc <= 29.9 ) {
  console.log('Acima do peso(sobrepeso)');
} else if ( imc >= 30 && imc <= 34.9 ) {
  console.log('Obesidade grau I');
} else if ( imc >= 35 && imc <= 39.9 ) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidades graus III e IV');
}