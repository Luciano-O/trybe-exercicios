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

let img = document.createElement('img')
img.src = "https://picsum.photos/200"
img.className = 'small-image'
document.querySelector('.left-content').appendChild(img);

let ul = document.createElement('ul');
let ext = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (x of ext) {
    let litem = x;

    let li = document.createElement('li');
    li.innerText = litem;
    
    ul.appendChild(li)
}
document.querySelector('.right-content').appendChild(ul);
