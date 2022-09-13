import connection from "../connection";

const insertPurchases = async (userId: string, productId: string, quantity: number, totalPrice: number ) => {

    const purchase = {
        id: Date.now().toString(),
        user_id: userId,
        product_id: productId,
        quantity,
        total_price: totalPrice
    }

    await connection.insert(purchase).into("labecommerce_purchases")
}

export default insertPurchases