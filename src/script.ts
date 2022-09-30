import * as teste from './soma';

// para campos html (inputs), é necessario definilos como abaixo
// o restante se mantem da mesma forma que o javascript
let num1 = document.getElementById('numero1') as HTMLInputElement;
let num2 = document.getElementById('numero2') as HTMLInputElement;
let button = document.getElementById('button');
let res = document.getElementById('result');

// ao passar paramentros para uma função é necessario identificar
// o tipo do valor a ser recebido

button?.addEventListener('click', () => {
    res!.innerHTML = teste.soma(+num1.value, +num2.value).toString();
});
