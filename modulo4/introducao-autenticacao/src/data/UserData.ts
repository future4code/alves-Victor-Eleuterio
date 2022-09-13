import connection from "./connection"

export class UserData {
    async insertUser(id: string, email: string, password: string) {
        await connection.insert({
            id,
            email,
            password
        }).into("User_table_name")
    }
    async searchUser(email: string): Promise<any> {
        const result = await connection.select("*").from("User_table_name").where("email", email)

        return result[0]
    }
    async getUserById(id: string): Promise<any> {
        const result = await connection.select("*").from("User_table_name").where("id", id)

        return result[0]  
    }
}
