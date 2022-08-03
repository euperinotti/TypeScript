// Exemplo de código feito sem TypeScript

let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let button = document.getElementById('button');
let res = document.getElementById('result');

function soma(num1, num2) {
    return num1 + num2;
}

button.addEventListener('click', () => {
    res.innerHTML = soma(num1.value, num2.value);
});
