
export const GoBack = (navigate, address) => {
    while (navigate === address) {
        navigate(-1)
    }
    navigate(-1)
}
export const GoToAdmPage = (navigate, address) => {
    if (localStorage.getItem('token') !== null) {
        navigate(`/admin/trips/${address}`)
    } else {
        navigate(`/login`)
    }
}
export const GoToListTrips = (navigate, address) => {
    navigate(`/trips/${address}`)
}
export const GoHome = (navigate) => {
    navigate('/')
}