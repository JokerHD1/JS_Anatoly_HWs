function calculateSum() {
    let n = document.getElementById('numberInput').value;
    
    if (n >= 1 && n <= 9) {
        let nAsString = n.toString();
        let nn = nAsString + nAsString;
        let nnn = nAsString + nAsString + nAsString;
        let sum = parseInt(n, 10) + parseInt(nn, 10) + parseInt(nnn, 10);
        alert(`Сумма равна: ${sum}`);
    } else {
        alert("Введено некорректное число. Пожалуйста, введите целое положительное число от 1 до 9.");
    }
}