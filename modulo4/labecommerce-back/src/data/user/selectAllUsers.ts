import connection from "../connection"

const selectAllUsers = async () => {
    const result = await connection.select('name', 'email').from('labecommerce_users')

    return result
}

export default selectAllUsers