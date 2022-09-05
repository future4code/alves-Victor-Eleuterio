import connection from "../connection"

const selectPurchasesByUser = async (userId: string) => {
    const result = await connection.select("*").from("labecommerce_purchases").where("user_id", userId)
    return result[0]
}

export default selectPurchasesByUser