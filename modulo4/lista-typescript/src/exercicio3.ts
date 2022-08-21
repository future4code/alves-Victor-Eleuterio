enum Genre {
    Action = "ação",
    Drama = "drama",
    Comedy = "comédia",
    Romance = "romance",
    Horror = "terror"
}

type Movie = {
    name: string,
    year: number,
    genre: string,
    punctuation?: number
}

const duna: Movie = {
    name: "Duna",
    year: 2021,
    genre: Genre.Action,
    punctuation: 74
}

console.log(duna) 