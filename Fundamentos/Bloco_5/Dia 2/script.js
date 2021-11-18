let exe = document.createElement('h1');
exe.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(exe);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let secao = document.createElement('section');
secao.className = 'center-content';
document.querySelector('.main-content').appendChild(secao);

let p = document.createElement('p');
p.innerText = 'Um texte aleatorio'
document.querySelector('section').appendChild(p);

let secao2 = document.createElement('section')
secao2.className = 'left-content';
document.querySelector('main').appendChild(secao2)

let secao3 = document.createElement('section')
secao3.className = 'right-content';
document.querySelector('main').appendChild(secao3)
