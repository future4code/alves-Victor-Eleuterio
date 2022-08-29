import express, { Response, Request } from 'express'
import cors from 'cors'
import * as C from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body

        if (!name || !cpf || !birthDate) {
            res.statusCode = 401
            throw new Error("Body information is missing")
        }
        if (C.users.find((user) => user.cpf === cpf)) {
            res.statusCode = 409
            throw new Error("cpf already registered")
        }
        if (cpf.toString().length !== 11) {
            res.statusCode = 406
            throw new Error("Invalid cpf. quantity does not correspond to the required")
        }
        if (typeof (birthDate) == 'number') {
            res.statusCode = 406
            throw new Error("'birthDate' does not match the required format")
        }
        if (birthDate.length !== 10) {
            res.statusCode = 406
            throw new Error("'birthDate' does not match the required format")
        }
        if (birthDate.indexOf("/") == -1) {
            res.statusCode = 406
            throw new Error("'birthDate' does not match the required format")
        }

        const separeteDate = birthDate.split("/", 3)
        const age: number = 2022 - Number(separeteDate[2])

        if (age < 18) {
            res.statusCode = 401
            throw new Error("User must be at least 18 years old")
        }

        const user: C.User = {
            id: Date.now().toString(),
            name,
            cpf,
            birthDate,
            balance: 0,
            extract: []
        }

        C.users.push(user)
        res.status(201).send("user registered successfully")
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.get("/users", (req: Request, res: Response) => {
    try {
        res.send(C.users)
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.get("/users/balance", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.body

        if (!name || !cpf) {
            res.statusCode = 401
            throw new Error("Body information is missing")
        }

        const user = C.users.find((user) => user.cpf == cpf)

        if (user.name.toLowerCase() !== name.toLowerCase()) {
            res.statusCode = 401
            throw new Error("Name does not belong to the registered cpf")
        }
        if (!user) {
            res.statusCode = 404
            throw new Error(`cpf is not found`)
        }

        res.send({ balance: user.balance })
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/users/balance", (req: Request, res: Response) => {
    try {
        const { name, cpf, value } = req.body

        if (value <= 0) {
            res.statusCode = 401
            throw new Error("The value must be greater than 0")
        }
        if (!name || !cpf || !value) {
            res.statusCode = 401
            throw new Error("Body information is missing")
        }
        const user = C.users.find((user) => user.cpf == cpf)
        if (!user) {
            res.statusCode = 404
            throw new Error(`cpf is not found`)
        }
        if (user.name.toLowerCase() !== name.toLowerCase()) {
            res.statusCode = 401
            throw new Error("Name does not belong to the registered cpf")
        }

        user.balance = user.balance + value

        user.extract.push({
            value: Number(value),
            date: Date.now().toString(),
            description: `Amount of ${value} added to the account. Balance after transaction: ${user.balance} `
        })
        console.log(user)
        res.status(200).send({ newBalance: user.balance })
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post("/payment", (req: Request, res: Response) => {
    try {
        const { date, description, value, cpf } = req.body
        let dateNow = date

        if (!cpf || !value || !description) {
            res.statusCode = 401
            throw new Error("Body information is missing")
        }
        if (!date) {
            dateNow = Date.now().toString()
        }
        const user = C.users.find((user) => user.cpf == cpf)

        if (!user) {
            res.statusCode = 404
            throw new Error(`cpf is not found`)
        }

        if (value > user.balance) {
            res.statusCode = 401
            throw new Error(`Insufficient funds`)
        }

        user.extract.push({
            value: Number(value),
            date: dateNow,
            description: description
        })

        res.status(200).send("payment made")
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

})

app.listen(3003, () => {
    console.log("Server is running in port 3003")
})