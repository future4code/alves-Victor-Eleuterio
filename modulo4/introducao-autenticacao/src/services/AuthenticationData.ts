import { v4 } from "uuid"
import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

class Authentication {
    generateId() {
        return v4()
    }

    generateToken(id: string) {
        const token = jwt.sign(
            {
                id: id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "1min"
            }
        )
        return token
    }

    getData(token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    }
}

export default Authentication