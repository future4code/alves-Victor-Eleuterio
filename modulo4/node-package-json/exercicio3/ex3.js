// Exercício 3

const toDoList = ["Lavar a louça",
    "Comprar Leite",
]

toDoList.push(process.argv[2])

console.log(`Tarefa adicionada com sucesso!`)
console.log(`Tarefas: ${toDoList}`)