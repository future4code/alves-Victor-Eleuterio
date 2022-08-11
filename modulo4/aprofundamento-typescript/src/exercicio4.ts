type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Exercutar o comando "tsc nomeDoArquivo" no terminal.

//c) Para isso é necessário configurar o arquivo "tsconfig.json" para que os arquivos na pasta src sejam transpilados para outra pasta, usando o comando "tsc nomeDoArquivo".

//d) É possível transpilar todos os aquivos de uma só pasta usando apenas o caminho da mesma.

