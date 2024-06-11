const equations = [
    { a: 1, b: -6, c: 9 },
    { a: 1, b: -4, c: -5 }
];

equations.forEach((equation, index) => {
    const D = equation.b ** 2 - 4 * equation.a * equation.c;
    if (D > 0) {
        const x1 = (-equation.b + Math.sqrt(D)) / (2 * equation.a);
        const x2 = (-equation.b - Math.sqrt(D)) / (2 * equation.a);
        console.log(`Ответ к уравнению ${index + 1}: ${x1} и ${x2}`);
    } else if (D === 0) {
        const x = -equation.b / (2 * equation.a);
        console.log(`Ответ к уравнению ${index + 1}: ${x}`);
    } else {
        console.log(`Уравнение ${index + 1} не имеет действительных корней`);
    }
});