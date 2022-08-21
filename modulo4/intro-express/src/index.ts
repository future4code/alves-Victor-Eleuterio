import express, { Request, Response } from "express"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from express")
})

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}


const userList: User[] = [
    {
        id: 1,
        name: "Laíssa",
        phone: 123456789,
        email: "lalaisbeautiful@mylove.com",
        website: "www.lalaisbeautiful.com"
    },
    {
        id: 2,
        name: "João",
        phone: 121516789,
        email: "joao@joao.com",
        website: "www.joao.com"
    },
    {
        id: 3,
        name: "Petrick",
        phone: 1561556249,
        email: "petrick@petrick.com",
        website: "www.petrick.com"
    }
]

const postList: Post[] = [
    {
        id: 1,
        title: "Post 1",
        body: "Olá eu sou o post 1 ",
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: "Olá eu sou o post 2",
        userId: 1
    },
    {
        id: 3,
        title: "Post 3",
        body: "Olá eu sou o post 3",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "Olá eu sou o post 4 ",
        userId: 3
    },
    {
        id: 3,
        title: "Post 3",
        body: "Olá eu sou o post 5",
        userId: 3
    },
]

app.get("/posts", (req: Request, res: Response) => {
    res.send(postList)
})

app.get("/users", (req: Request, res: Response) => {
    res.send(userList)
})

app.get("/posts/postsuser", (req: Request, res: Response) => {
    res.send(postList.filter((post) => {
        return post.userId == Number(req.query.id)
    }))
})

app.listen(3003, () => {
    console.log('Server is running')
})