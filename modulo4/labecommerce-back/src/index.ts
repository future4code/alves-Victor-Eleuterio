import app from './app'
import createProduct from './endpoints/product/createProduct'
import createUser from './endpoints/user/createUser'
import searchProduct from './endpoints/product/searchProduct'
import searchUser from './endpoints/user/searchUser'

// User registration
app.post('/users', createUser)

// Search for all users
app.get('/users', searchUser)

// Product registration
app.post('/products', createProduct)

// Search for all products
app.get('/products', searchProduct)
