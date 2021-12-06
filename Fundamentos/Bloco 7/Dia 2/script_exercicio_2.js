const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Parte 1
// const addTurnoNoite = (lesson) => lesson.turno = 'noite';
// addTurnoNoite(lesson2);
// console.log(lesson2);

// Parte 2
// const listKeys = (objeto) => {
//   const keys = Object.keys(objeto);
//   for (index of keys) {
//     console.log(index);
//   }
// }
// listKeys(lesson3);

// Parte 3
// const tamanhoObjeto = (objeto) => console.log(Object.keys(objeto).length);
// tamanhoObjeto(lesson3);

// Parte 4
// const listValues = (objeto) => {
//   const values = Object.values(objeto);
//   for (index of values) {
//     console.log(index);
//   }
// }
// listValues(lesson3);

// Parte 5
// const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3},)
// console.log(allLessons);

// Parte 6
// const numeroEstudantes = (allLessons) => {
//   const values = Object.values(allLessons);
//   let countAlunos = 0;
//   for (index in values){
//     countAlunos += values[index].numeroEstudantes
//   }
//   console.log(countAlunos);
// }
// numeroEstudantes(allLessons);

// Parte 7
// const getValueByNumber = (lesson, number) => {
//   const lessonArr = Object.keys(lesson);
//   console.log(lesson[lessonArr[number]]);
// }
// getValueByNumber(lesson1, 0);

const verifyPair = (lesson, key, value) => {
  const lessonsKeys = Object.keys(lesson);
  const lessonsValues = Object.values(lesson);
  let isRight = false;
  for (index in lessonsKeys) {
    if (lessonsKeys[index] === key) {
      if (lessonsValues[index] === value ) {
        isRight = true;
      }
    }
  }
  return(isRight);
}
const test = verifyPair(lesson3, 'numeroEstudantes', 10);
console.log(test);