import { BASEURL } from "./url"
import axios from "axios"
import { Subs } from "../types"

export const getSubscribers = async (): Promise<Subs[]> => {
    const result = await axios.get(`${BASEURL}/subscribers`)

    return result.data.map((res: any)=>{
        return{
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}