import { Request, Response } from "express"
import selectPurchasesByUser from "../../data/purchases/selectPurchasesByUser"

const searchPurchasesByUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.user_id
        if (!id) {
            res.statusCode = 400
            throw new Error("id cannot be null or undefined")
        }

        const result = await selectPurchasesByUser(id)

        if (result?.length == 0) {
            res.statusCode = 404
            throw new Error("There is no purchase record for this user")
        }

        res.send(result)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}

export default searchPurchasesByUser