import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";
import { BaseUrl } from '../hooks/useRequestData'

const Provider = GlobalContext.Provider

export const GlobalState = (props) => {
    return(
        <Provider>
            {props.children}
        </Provider>
    )
}