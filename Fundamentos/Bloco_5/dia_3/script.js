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
  
  // Exercicio 3
  let btt = document.querySelector('#btn-holiday');
  let fers = document.querySelectorAll('.holiday')
  let cor = 'green';
  let bcc = 'rgb(238,238,238)';
  function feriadosCor () {
    for (let x = 0; x < fer.length; x += 1) {
      if (fers[x].style.backgroundColor === cor ) {
        fers[x].style.backgroundColor = bcc;
      } else {
        fers[x].style.backgroundColor = cor;
      }
    }
  }
  btt.addEventListener('click', feriadosCor);

  // Exercicio 4
  let sex = 'Sexta-Feira'
  function sextas(sex) {
    let b = document.createElement('button');
    b.type = 'button';
    b.innerText = sex;
    b.id = 'btn-friday'
    let bt = document.querySelector('.buttons-container')
    bt.appendChild(b)
  }
  sextas(sex);

  // Exercicio 5
  let btt2 = document.querySelector('#btn-friday');
  let sexs = document.querySelectorAll('.friday')
  let text = 'Sexta-feira';
  let sexsArr = [4,11,18,25];
  function sexsText () {
    for (let x = 0; x < sexs.length; x += 1) {
      if (sexs[x].innerHTML == text ) {
        sexs[x].innerHTML = sexsArr[x];
      } else {
        sexs[x].innerHTML = text;
      }
    }
  }
  btt2.addEventListener('click', sexsText);

  // Exercicio 6
  let days = document.querySelector('#days');
  function mouseCima (evento) {
    evento.target.style.fontSize = '30px'
    evento.target.style.fontWeight = '600'
  }
  function mouseFora (evento) {
    evento.target.style.fontSize = '20px'
    evento.target.style.fontWeight = '200'
  }
  days.addEventListener('mouseover', mouseCima);
  days.addEventListener('mouseout', mouseFora)

  // Exercicio 7
  let tasks = document.querySelector('.my-tasks')
  let task = 'cozinhar';
  function tarefa (task) {
    let tar = document.createElement('span')
    tar.innerText = task;
    tasks.appendChild(tar)
  }
  tarefa(task);


  let color = 'green';
  function legenda (cor) {
    let leg = document.createElement('div');
    leg.className = 'task'
    leg.style.backgroundColor = cor; 
    tasks.appendChild(leg);
  }
  legenda(color);