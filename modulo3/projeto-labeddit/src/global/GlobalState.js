import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";
import { BaseUrl } from '../hooks/useRequestData'

const Provider = GlobalContext.Provider

export const GlobalState = (props) => {
    const [authentication, setAuthentication,] = useState()
    const [comments, setComments] = useState()
    const [posts, setPosts] = useState()
    const [postId, setPostId] = useState()

    const values = {
        authentication,
        setAuthentication,
        comments,
        setComments,
        posts,
        setPosts,
        postId,
        setPostId
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}