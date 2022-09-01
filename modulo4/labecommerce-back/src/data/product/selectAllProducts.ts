import connection from "../connection"

const selectAllProducts = async () => {
    const result = await connection.select("*").from("labecommerce_products")

    return result
}

export default selectAllProducts