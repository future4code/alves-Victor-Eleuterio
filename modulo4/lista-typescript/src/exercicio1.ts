const convertDate = (name: string, date: string) => {
    const separeteDate = date.split("/", 3)

    const month = (): string => {
        switch (separeteDate[1]) {
            case '01':
                return "Janeiro"
            case '02':
                return "Fevereiro"
            case '03':
                return "Março"
            case '04':
                return "Abril"
            case '05':
                return "Maio"
            case '06':
                return "Junho"
            case '07':
                return "Julho"
            case '08':
                return "Agosto"
            case '09':
                return "Setembro"
            case '10':
                return "Outubro"
            case '11':
                return "Novembro"
            case '12':
                return "Dezembro"
        }
    }

    console.log(`Olá me chamo ${name}, nasci no dia ${separeteDate[0]} do mês de ${month()} do ano de ${separeteDate[2]}`)
}
convertDate("victor", "20/05/2003")