import { Request, Response } from "express"
import { UserData } from "../data/UserData"
import Authentication from "../services/AuthenticationData"

const signup = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 401
            throw new Error("Invalid fields")
        }

        if (!email.indexOf("@")) {
            res.statusCode = 401
            throw new Error("Invalid email")
        }

        if (password.length < 6) {
            res.statusCode = 401
            throw new Error("Password must contain at least 6 characters")
        }

        const id = new Authentication().generateId()

        const token = new Authentication().generateToken(id)

        await new UserData().insertUser(id, email, password)

        res.send({ token: token })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
export default signup