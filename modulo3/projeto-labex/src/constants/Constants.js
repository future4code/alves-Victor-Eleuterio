export const BaseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-eleuterio-alves'

export const authenticate = (navigate) =>{
    if(window.localStorage.getItem('token') === null){
        navigate('/login')
      }
}
export const token = localStorage.getItem('token')
