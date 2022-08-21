import express, { Request, Response } from 'express'
import cors from 'cors'
import * as C from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Ex.1
app.get("/test", (req: Request, res: Response) => {
    try {
        res.statusCode = 200
        res.send("Sua API está funcionando \o/")

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Ex.2

//Ex.3

// app.post("/addproduct", (req: Request, res: Response) => {
//     const { name, price } = req.body
//     const newProduct: C.Product = {
//         id: Date.now().toString(),
//         name,
//         price
//     }

//     try {
//         C.productList.push(newProduct)
//         res.status(200).send(C.productList)
//     } catch (error: any) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

//Ex.4

app.get("/products", (req: Request, res: Response) => {
    res.send(C.productList)
})

//Ex.5
// app.put("/products/:id", (req: Request, res: Response) => {
//     const id = req.params.id
//     const { price } = req.body
//     try {
//         if (!id) {
//             res.statusCode = 401
//             throw new Error(`Não é possivel enviar um id vazio`)
//         }
//         const selectedProduct = C.productList.filter((product) => {
//             return product.id == id
//         })
//         if (!selectedProduct.length) {
//             res.statusCode = 404
//             throw new Error(`Não foi possível encontrar um produto com o id ${id}`)
//         }

//         selectedProduct.map((product) => {
//             const newProduct = {
//                 ...product,
//                 price: price
//             }
//             product = newProduct
//             return (product)
//         })

//         res.status(200)

//     } catch (error) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

//Ex.6
// app.delete("/products/:id", (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         if (!id) {
//             res.statusCode = 401
//             throw new Error(`Não é possivel enviar um id vazio`)
//         }
//         const newList = C.productList.filter((product) => {
//             return product.id !== id
//         })
//         res.send(newList)
//     } catch (error) {
//         res.status(res.statusCode).send({ message: error.message })
//     }
// })

//Ex.7
app.post("/addproduct", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            res.statusCode = 401
            throw new Error(`O body não corresponde com o formatado exigido.`)
        }
        if (typeof (name) !== 'string') {
            res.statusCode = 401
            throw new Error(`É necessário que 'name' seja uma 'string'.`)
        }
        if (typeof (price) !== 'number') {
            res.statusCode = 401
            throw new Error(`É necessário que 'price' seja um 'number'.`)
        }
        if (Number(price) <= 0) {
            res.statusCode = 401
            throw new Error(`É necessário que 'price' seja maior que 0.`)
        }
        const newProduct: C.Product = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        C.productList.push(newProduct)
        res.status(res.statusCode).send(C.productList)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Ex.8 
app.put("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const { price } = req.body
    try {
        if (!id) {
            res.statusCode = 401
            throw new Error(`Não é possivel enviar um id vazio`)
        }
        const selectedProduct = C.productList.filter((product) => {
            return product.id == id
        })
        if (!selectedProduct.length) {
            res.statusCode = 404
            throw new Error(`Não foi possível encontrar um produto com o id ${id}`)
        }
        if (!price) {
            res.statusCode = 401
            throw new Error(`O body não corresponde com o formatado exigido.`)
        }
        if (typeof (price) !== 'number') {
            res.statusCode = 401
            throw new Error(`É necessário que 'price' seja um 'number'.`)
        }
        if (Number(price) <= 0) {
            res.statusCode = 401
            throw new Error(`É necessário que 'price' seja maior que 0.`)
        }

        selectedProduct.map((product) => {
            const newProduct = {
                ...product,
                price: price
            }
            product = newProduct
            return (product)
        })

        res.status(200)

    } catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Ex.9
app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (!id) {
            res.statusCode = 401
            throw new Error(`Não é possivel enviar um id vazio`)
        }
        const newList = C.productList.filter((product) => {
            return product.id !== id
        })
        if(!newList.length){
            res.statusCode = 404
            throw new Error(`Não foi possível encontrar um produto com o id ${id}`)
        }
        res.send(newList)
    } catch (error) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in port 3003")
})
