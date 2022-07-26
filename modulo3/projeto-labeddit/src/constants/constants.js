export const token = localStorage.getItem('token')

export const headers = {
    Authorization: token
}