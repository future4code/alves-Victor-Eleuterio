type Client = {
    client: string,
    totalBalance: number,
    debts: number[]
}

const customerList: Client[] = [
    { client: "João", totalBalance: 1000, debts: [100, 200, 300] },
    { client: "Paula", totalBalance: 7500, debts: [200, 1040] },
    { client: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
    { client: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
    { client: "Artur", totalBalance: 1800, debts: [200, 300] },
    { client: "Soter", totalBalance: 1200, debts: [] }
]

const balanceCalculator = (customerList: Client[]): Client[] => {
    customerList.map((client: Client) => {
        const netBalance = client.debts.reduce((par1, par2) => par1 + par2, 0)
        client.totalBalance -= netBalance
        client.debts = []

    })

    const negativeBalance = customerList.filter((client) => {
        return client.totalBalance < 0
    })
    return negativeBalance
}

console.log(balanceCalculator(customerList)) 