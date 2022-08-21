type Products = {
    name: string,
    quantity: number,
    unitaryValue: number | string
}

const stockList: Products[] = [
    { name: "MacMugffin", quantity: 37, unitaryValue: 51.040 },
    { name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0 },
    { name: "Laço da verdade", quantity: 32, unitaryValue: 571.5 },
    { name: "O precioso", quantity: 1, unitaryValue: 9181.923 },
    { name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17 },
    { name: "Plumbus", quantity: 13, unitaryValue: 140.44 },
    { name: "Pokebola", quantity: 200, unitaryValue: 99.9915 }
]

const priceConverter = (price: number): string => {
    const convertedPrice: string = price.toFixed(2).replace('.', ',')
    return "R$ " + convertedPrice
}

const stockOrganizer = (stock: Products[]): Products[] => {
    stock.forEach((product) => product.unitaryValue = priceConverter(product.unitaryValue as number))
    const organizedStock: Products[] = stock.sort((a, b) => a.quantity - b.quantity)
    return organizedStock

}

console.log(stockOrganizer(stockList))