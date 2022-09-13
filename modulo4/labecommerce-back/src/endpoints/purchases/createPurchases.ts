import { Request, Response } from "express";
import connection from "../../data/connection";
import insertPurchases from "../../data/purchases/insertPurchases";

const createPurchases = async (req: Request, res: Response) => {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            res.statusCode = 401
            throw new Error("body is wrong or incomplete")
        }

        const checkUserId = await connection.select("id").from("labecommerce_users").where('id', userId)

        if (!checkUserId) {
            res.statusCode = 404
            throw new Error(`User id '${userId}' not found`)
        }

        const checkProductId = await connection.select("id").from("labecommerce_products").where('id', productId)

        if (!checkProductId) {
            res.statusCode = 404
            throw new Error(`Product id '${productId}' not found`)
        }

        const productPrice = await connection.select("price").from("labecommerce_products").where('id', productId)

        const totalPrice = Number(productPrice[0].price) * Number(quantity)
        
        insertPurchases(userId, productId, quantity, totalPrice)

        res.status(201).send('Purchase created successfully!')
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
}

export default createPurchases