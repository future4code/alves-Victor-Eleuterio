import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import { connection } from './connection'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())



const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
    return result[0][0]
}

const serachActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = ${name}
    `)
    return result
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log({ message: error.message })
        res.status(500).send("Unexpected error")
    }
})
app.get("/users/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        console.log(await serachActor(name))

        res.end()
    } catch (error: any) {
        console.log({ message: error.message })
        res.status(500).send("Unexpected error")
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});