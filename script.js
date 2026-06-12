function calcular(operacao, num1, num2) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Erro: divisão por zero";
            }
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

// Exemplos de uso
console.log(calcular("+", 10, 5)); // 15
console.log(calcular("-", 10, 5)); // 5
console.log(calcular("*", 10, 5)); // 50
console.log(calcular("/", 10, 5)); // 2
