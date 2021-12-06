const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope =  '${ifScope} ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  let ifScope = 'To aqui agr';
  console.log(` o que estou ${ifScope} fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

