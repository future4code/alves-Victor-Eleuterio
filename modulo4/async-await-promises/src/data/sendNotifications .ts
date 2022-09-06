import axios from "axios";
import { Subs } from "../types";
import { BASEURL } from "./url";

export const sendNotifications = async (users: Subs[], message: string): Promise<void> => {
    try {
        const promises = users.map((user) => {
            return axios.post(`${BASEURL}/notifications`, {
                subscriberId: user.id,
                message
            })
        })
        await Promise.all(promises)
    } catch {
        console.log("Error")
    }
}