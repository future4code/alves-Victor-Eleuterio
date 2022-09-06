import { Customer } from "./Customer"
import { User } from "./User"

const user1 = new User("001", "user@user.com", "user", "password")

// console.log(user1)

// console.log(user1.password)
// 1.a) Não, pois a  propriedade 'password' é particular e somente é acessível na classe 'User'

// 1.b) Uma vez.

const custom1 = new Customer("001", "custom@user.com", "custom", "passcustom", "222222")

console.log(custom1)

