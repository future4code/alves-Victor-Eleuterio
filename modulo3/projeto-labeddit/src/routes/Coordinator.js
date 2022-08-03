
export const goToFeed = (navigate) => {
    if (localStorage.getItem('token') !== null) {
        navigate('/feed')
    } else {
        navigate('/')
    }
}
export const goToLogin = (navigate) => {
    navigate('/')
}
export const goToRegistration = (navigate) => {
    navigate('/registration')
}
export const goToPostPage = (navigate, address) => {
    if (localStorage.getItem('token') !== null) {
        navigate(`/postpage/${address}`)
    } else {
        navigate('/')
    }
}