function calculateSum() {
    const n = document.getElementById('numberInput').value;
    
    if (n >= 1 && n <= 9) {
        const nAsString = n.toString();
        const nn = nAsString + nAsString;
        const nnn = nAsString + nAsString + nAsString;
        const sum = parseInt(n, 10) + parseInt(nn, 10) + parseInt(nnn, 10);
        alert(`Сумма равна: ${sum}`);
    } else {
        alert("Введено некорректное число. Пожалуйста, введите целое положительное число от 1 до 9.");
    }
}