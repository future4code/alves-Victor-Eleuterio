import axios from "axios"
import { BASEURL } from "./url"

export const createNews = async (title: string, content: string, date: number): Promise<void> => {
    const result = await axios.put(`${BASEURL}/news`, {
        title, content, date
    })
}