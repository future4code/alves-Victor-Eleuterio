import express from 'express'
import cors from 'cors'
import { getSubscribers } from './data/getSubscribers'


const app = express()

app.use(express.json())
app.use(cors())



app.listen(3003, () => {
    console.log('Server is running in port 3003')
})

export default app