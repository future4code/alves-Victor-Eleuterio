import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";
import { BaseUrl } from '../hooks/useRequestData'

const Provider = GlobalContext.Provider

export const GlobalState = (props) => {
    const [authentication, setAuthentication, comments, setComments] = useState(false)

    const values = {
        authentication, setAuthentication,
        comments, setComments
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}