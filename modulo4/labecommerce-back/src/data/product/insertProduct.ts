import { Product } from "../../types";
import connection from "../connection";

const insertProduct = async (name: string, price: number, image: string) => {
    const product: Product = {
        id: Date.now().toString(),
        name,
        price,
        image_url: image
    }
    await connection.insert(product).into('labecommerce_products')
}

export default insertProduct