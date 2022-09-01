import { Request, Response } from "express";
import insertProduct from "../../data/product/insertProduct";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, image } = req.body

        if (!name || !price || !image) {
            res.statusCode = 401
            throw new Error('body is wrong or incomplete')
        }
        if (isNaN(price)) {
            res.statusCode = 401
            throw new Error('price is not a number')
        }

        await insertProduct(name, price, image)

        res.status(201).send(`Product ${name} created successfully!`)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
}

export default createProduct