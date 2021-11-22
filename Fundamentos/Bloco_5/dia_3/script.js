function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (x in dezDaysList) {
    let ul = document.querySelector('#days');
    let li = document.createElement('li');
    li.innerHTML = dezDaysList[x];
    li.className = 'day';
    if (dezDaysList[x] === 24 || dezDaysList[x] === 25 || dezDaysList[x] === 31) {
      li.classList.add(`holiday`);
    }
    if (dezDaysList[x] === 4 || dezDaysList[x] === 11 || dezDaysList[x] === 18 ||dezDaysList[x] === 25) {
      li.classList.add('friday');
    }
    ul.appendChild(li)
  }
  
  // Exercicio 2
  let fer = 'feriados'
  function feriados(fer) {
    let b = document.createElement('button');
    b.type = 'button';
    b.innerText = fer;
    b.id = 'btn-holiday'
    let bt = document.querySelector('.buttons-container')
    bt.appendChild(b)
  }
  feriados(fer);