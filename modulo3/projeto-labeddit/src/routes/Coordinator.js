
export const goToFeed = (navigate) => {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {
        navigate('/')
    } else {
        navigate('/login')
    }
}
export const goToLogin = (navigate) => {
    navigate('/login')
}
export const goToRegistration = (navigate) => {
    navigate('/registration')
}
export const goToPostPage = (navigate, address) => {
    if (localStorage.getItem('token') !== null) {
        navigate(`/postpage/${address}`)
    } else {
        navigate('/login')
    }
}