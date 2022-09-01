import { Request, Response } from "express";
import insertUser from "../../data/user/insertUser";

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.statusCode = 401
            throw new Error('body is wrong or incomplete')
        }

        await insertUser(name, email, password)

        res.status(201).send(`User ${name} created successfully`)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
}
export default createUser