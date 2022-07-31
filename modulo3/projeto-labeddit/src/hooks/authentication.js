export const authenticate = (navigate) => {
    if (window.localStorage.getItem('token') === null) {
        navigate('/')
    }
}