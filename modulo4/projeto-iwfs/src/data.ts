export type UserAccount = {
    id: string,
    name: string,

}

export type Transactions = {
    value: number,
    date: string,
    description: string
}
export type User = {
    id: string,
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    extract: Transactions[]
}


export const users: User[] = [
    {
        id: "51578551",
        name: "Alice",
        cpf: 24645156889,
        birthDate: "06/01/1999",
        balance: 0,
        extract: []
    },
    {
        id: "51545651",
        name: "Bob",
        cpf: 24645123889,
        birthDate: "05/02/2004",
        balance: 0,
        extract: []
    },
    {
        id: "51526551",
        name: "CorbirthDatem",
        cpf: 24636556889,
        birthDate: "04/03/2003",
        balance: 0,
        extract: []
    },
    {
        id: "51514451",
        name: "Dory",
        cpf: 24645492889,
        birthDate: "03/04/2002",
        balance: 0,
        extract: []
    },
    {
        id: "51665651",
        name: "Elsa",
        cpf: 24955156889,
        birthDate: "02/05/2001",
        balance: 0,
        extract: []
    },
    {
        id: "51515651",
        name: "Fred",
        cpf: 21595156889,
        birthDate: "01/06/2000",
        balance: 0,
        extract: []
    }
] 