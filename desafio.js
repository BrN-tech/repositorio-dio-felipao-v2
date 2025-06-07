

// class heroi{
//     constructor(nome, idade, tipo, ataque){
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//         this.ataque = ataque
//     }
//     atacar(){
//         console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
//     }
// }

// let mago = new heroi("mago", "Magia")
// let guerreiro = new heroi("guerreiro", "Espada")
// let monge = new heroi("monge", "artes marciais")
// let ninja = new heroi("ninja", "usou shuriken")


// mago.atacar()


class Heroi{
		constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
    	console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }

}

let mago = new Heroi(" ", " ", "mago", "Magia")
let guerreiro = new Heroi(" ", " ", "guerreiro", "Espada")
let monge = new Heroi(" ", " ", "monge", "artes marciais")
let ninja = new Heroi(" ", " ", "ninja", "usou shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
