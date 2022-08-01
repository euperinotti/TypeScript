// para campos html (inputs), é necessario definilos como abaixo
// o restante se mantem da mesma forma que o javascript
var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var button = document.getElementById('button');
var res = document.getElementById('result');
// ao passar paramentros para uma função é necessario identificar
// o tipo do valor a ser recebido
function soma(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    res.innerHTML = soma(+num1.value, +num2.value).toString();
});
