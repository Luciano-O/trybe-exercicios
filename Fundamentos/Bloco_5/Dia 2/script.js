let exe = document.createElement('h1');
exe.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(exe);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let secao = document.createElement('section');
secao.className = 'center-content';
document.querySelector('.main-content').appendChild(secao);