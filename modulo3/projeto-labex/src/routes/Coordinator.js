
export const GoBack = (navigate) => {
    navigate(-1)
}
export const GoToAdmPage = (navigate, address) =>{
    navigate(`/admin/trips/${address}`)
}
export const GoToListTrips = (navigate, address) =>{
    navigate(`/trips/${address}`)
}