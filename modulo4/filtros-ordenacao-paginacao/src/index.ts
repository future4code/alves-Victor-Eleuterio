import { app } from "./app";
import { getUsersFilterByName } from "./endpoints/getAllUsers";

app.get("/user", getUsersFilterByName );
