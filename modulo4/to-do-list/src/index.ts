import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
})

// ______________________________________ Functions ______________________________________

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {

    const result = await connection('ToDoListUser').insert(
        {
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        }
    )
    return result
}

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.select("*").from("ToDoListUser").where('id', id)
    return (result)
}

const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection('ToDoListUser').update({
        name: name,
        nickname: nickname
    }).where("id", id)
    return result
}

const createTask = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    const result = await connection('ToDoListTask').insert({
        id: Date.now().toString(),
        title,
        description,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    })
    return result
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.select("*").from('ToDoListTask').where('id', id)
    return result
}


const getAllUsers = async (): Promise<any> => {
    const result = await connection.select("*").from("ToDoListUser")
    return (result)
}

// ______________________________________ Endpoints ______________________________________

// 1. Create user
app.post('/todolist/users', async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.statusCode = 401
            throw new Error('The body is wrong or incomplete')
        }

        await createUser(name, nickname, email)
        res.send(`User ${nickname} created successfully!`)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 2. Get user by id
app.get('/todolist/user/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 401
            throw new Error('id cannot be null or undefined.')
        }
        const result = await getUserById(id)
        if (!result || result.length == 0) {
            res.statusCode = 404
            throw new Error(`id '${id}' not found`)
        }
        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 3. Edit user
app.put('/todolist/users/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, nickname } = req.body

        if (!id) {
            res.statusCode = 401
            throw new Error('id cannot be null or undefined.')
        }

        const result = await getUserById(id)

        if (!result || result.length == 0) {
            res.statusCode = 404
            throw new Error(`id '${id}' not found.`)
        }
        if (!name && !nickname) {
            res.statusCode = 401
            throw new Error('Information cannot be null. At least one must have a value.')
        }

        await editUser(id, name, nickname)

        res.send('user edited successfully')
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 4. Create Task
app.post('/todolist/tasks', async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 401
            throw new Error('The body is wrong or incomplete.')
        }
        if (typeof (limitDate) == 'number') {
            res.statusCode = 406
            throw new Error("'limitDate' does not match the required format.")
        }
        if (limitDate.length !== 10) {
            res.statusCode = 406
            throw new Error("'limitDate' does not match the required format.")
        }
        if (limitDate.indexOf("/") == -1) {
            res.statusCode = 406
            throw new Error("'limitDate' does not match the required format.")
        }
        const separeteDate = limitDate.split("/", 3)
        const newDate = `${separeteDate[2]}/${separeteDate[1]}/${separeteDate[0]}`
        console.log(newDate)

        await createTask(title, description, newDate, creatorUserId)
        res.send(`Task '${title}' created succesfully!`)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 5. Get Task By Id 
app.get('/todolist/tasks/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 404
            throw new Error(`id cannot be undefined or null.`)
        }

        const result = await getTaskById(id)
        if (!result || result.length == 0) {
            res.statusCode = 404
            throw new Error(`id '${id}' not found`)
        }

        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Get all users
app.get('/todolist/users/all', async (req: Request, res: Response) => {
    try {
        const result = await getAllUsers()
        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log('Server is running in port 3003 ')
})