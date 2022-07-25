
export const goToFeed = (navigate) => {
    navigate('/')
}
export const goToLogin = (navigate) => {
    navigate('/login')
}
export const goToRegistration = (navigate) => {
    navigate('/registration')
}
export const goToPostPage = (navigate, address) => {
    navigate(`/postpage/${address}`)
}