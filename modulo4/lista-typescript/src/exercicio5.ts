type User = {
    name: string,
    email: string,
    role: string
}

const emailAdmins = (users: User[]): string[] => {
    return users.filter((user: User) => {
        return user.role === "admin"
    }).map((user: User) => {
        return user.email
    })
}

const userList = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

console.log(emailAdmins(userList)) 