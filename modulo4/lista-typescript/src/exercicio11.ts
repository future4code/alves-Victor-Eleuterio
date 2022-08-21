const checkRomanNumber = (number: any) => {
    if (number > 4000) {
        return "Não é possivel converter números acima de 4000"
    }
    if (number === "") {
        return "Digite um número para converter"
    }
    if (number === 0) {
        return "0 não existe em números romanos"
    }

    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const decimal: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let result = ""

    for (let i = 0; i <= decimal.length; i++) {
        while (number % decimal[i] < number) {
            result += roman[i];
            number -= decimal[i];
        }
    }
    return result
}

console.log(checkRomanNumber(2000)) 