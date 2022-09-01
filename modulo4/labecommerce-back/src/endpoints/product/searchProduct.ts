import { Request, Response } from 'express'
import selectAllProducts from '../../data/product/selectAllProducts'

const searchProduct = async (req: Request, res: Response) => {
    try {
        const result = await selectAllProducts()
        res.send(result)
    } catch (error: any) {
        
    }
}

export default searchProduct