import express, { Request, Response } from 'express'
import cors from 'cors'
import * as C from './data'

const app = express()

app.use(express.json())
app.use(cors())

//Ex.1

// a. método GET.
// b. 

// app.get('/users', (req: Request, res: Response) => {
//     try {
//         res.send(C.users)
//     } catch (error) {
//         res.status(500).send('Server error. Please, try again')
//     }
// })

//Ex.2

// app.get('/users', (req: Request, res: Response) => {
//     try {
//         const type: string = req.query.type as string
//         if (!type) {
//             res.send(C.users)
//         }

//         const usersTypeList: C.User[] | undefined = C.users.filter((user) => user.type === type?.toUpperCase())

//         if (!usersTypeList) {
//             res.statusCode = 404
//             throw new Error(`User type '${type}' not found`)
//         }


//         res.send(usersTypeList)
//     } catch (error) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })



// Ex.3 
// app.get('/users', (req: Request, res: Response) => {
//     try {
//         const name: string = req.query.name as string
//         if (!name) {
//             res.send(C.users)
//         }

//         const user: C.User | undefined = C.users.find((user) => user.name.toUpperCase() === name.toUpperCase())

//         if (!user) {
//             res.statusCode = 404
//             throw new Error(`User '${name}' not found`)
//         }

//         res.send(user)
//     } catch (error) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

// Ex.4
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            res.statusCode = 401
            throw new Error("'body' already exists in our database")
        }
        if (C.users.find((user) => user.email == email)) {
            res.statusCode = 409
            throw new Error("'email' ")
        }
        const newUser: C.User = {
            id: Math.floor(Math.random() * 100),
            name,
            email,
            type,
            age
        }

        C.users.push(newUser)
        res.send(newUser)
    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }


})

app.listen(3003, () => {
    console.log("Server is running in port 3003")
})