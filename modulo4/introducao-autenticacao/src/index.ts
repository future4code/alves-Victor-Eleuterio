import app from "./app"
import signup from "./endpoint/signup"
import login from "./endpoint/login"
import { profile } from "console"

app.post("/user/signup", signup)
app.post("/login", login)
app.get("/user/profile", profile)