'use strict';
const lista=['carta', 'frutta', 'verdura', 'pasta', 'carne', 'fagioli'];
const ul=document.querySelector('#lista');
let i=0;
while(i < lista.length){
    console.log(i);
    const li=document.createElement('li');
    li.append(lista[i]);
    ul.append(li);
    i++;
}
