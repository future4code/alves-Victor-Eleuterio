enum Sectors {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Collaborators = {
    name: string,
    wage: number,
    sector: string,
    presential: boolean
}

const filteredSectors = (collaboratorList: Collaborators[]): Collaborators[] => {
    return collaboratorList.filter((collaborator: Collaborators) => {
        return collaborator.sector === Sectors.MARKETING
    })
}

const collaboratorsList = [
    { name: "Marcos", wage: 2500, sector: Sectors.MARKETING, presential: true },
    { name: "Maria", wage: 1500, sector: Sectors.VENDAS, presential: false },
    { name: "Salete", wage: 2200, sector: Sectors.FINANCEIRO, presential: true },
    { name: "João", wage: 2800, sector: Sectors.MARKETING, presential: false },
    { name: "Josué", wage: 5500, sector: Sectors.FINANCEIRO, presential: true },
    { name: "Natalia", wage: 4700, sector: Sectors.VENDAS, presential: true },
    { name: "Paola", wage: 3500, sector: Sectors.MARKETING, presential: true }
]

console.table(filteredSectors(collaboratorsList))
