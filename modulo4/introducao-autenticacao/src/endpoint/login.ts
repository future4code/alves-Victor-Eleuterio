import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import Authentication from "../services/AuthenticationData";

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 401
            throw new Error("Ivalid fields")
        }

        if (!email.indexOf("@")) {
            res.statusCode = 401
            throw new Error("Invalid email")
        }

        const user = await new UserData().searchUser(email)
        
        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")
        }
        if (user.password !== password) {
            res.statusCode = 401
            throw new Error("Invalid email or password")
        }

        const id = new Authentication().generateId()

        const token = new Authentication().generateToken(id)

        res.send({ token: token })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
export default login