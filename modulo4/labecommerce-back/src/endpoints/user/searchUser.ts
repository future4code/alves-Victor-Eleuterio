import { Request, Response } from "express";
import selectAllUsers from "../../data/user/selectAllUsers";

const searchUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await selectAllUsers()
        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
}

export default searchUser