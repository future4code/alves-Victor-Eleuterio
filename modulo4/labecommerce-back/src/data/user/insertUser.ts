import { User } from '../../types'
import connection from "../connection";

const insertUser = async (name: string, email: string, password: string) => {
    const user: User = {
        id: Date.now().toString(),
        name,
        email,
        password
    }

    await connection.insert(user).into('labecommerce_users')
}

export default insertUser