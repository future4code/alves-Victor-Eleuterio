import express, { Response, Request } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//Ex.1
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong")
})

//Ex.2
type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Ex.3
const taskList: Task[] = [
    {
        userId: 1,
        id: 1,
        title: "Do the lessons",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Go to run",
        completed: true
    },
    {
        userId: 2,
        id: 3,
        title: "Take out the trash",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Wash the dishes",
        completed: false
    },
    {
        userId: 2,
        id: 5,
        title: "read emails",
        completed: true
    },
]

//Ex.4
app.get("/completetasks", (req: Request, res: Response) => {
    const completeTasks = taskList.filter((task) => {
        return task.completed === true
    })
    res.send(completeTasks)
})

//Ex.5
app.post("/createtask", (req: Request, res: Response) => {
    const { userId, id, title, completed }: Task = req.body
    if (req.body) {
        taskList.push(
            {
                userId: userId,
                id: id,
                title: title,
                completed: completed
            }
        )
    } else {
        res.status(400).send("Verifique as informações do body")
    }
    res.status(200).send(taskList)
})

//Ex.6 
app.put("/edittask/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const selectedTask = taskList.filter((task) => {
        if (task.id === id) {
            if (task.completed == true) {
                task.completed = false
                return task
            } else {
                task.completed = true
                return task
            }
        }
    })
    res.send(selectedTask)
})

//Ex.7 
app.delete("/deletetask/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const deleteTask = taskList.find((task) => {
        return task.id === id
    })
    taskList.filter((task) => {
        return task !== deleteTask
    })

    res.send(taskList)
})

//Ex.8

app.listen(3003, () => {
    console.log("Server is running in port 3003")
})