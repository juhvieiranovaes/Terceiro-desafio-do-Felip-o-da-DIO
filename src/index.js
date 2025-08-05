const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class HERO {
    constructor (nome , idade , tipo){
        this.nome = nome 
        this.idade = idade
        this.tipo = tipo 
    } 

    atacar() {
        let ataque;

        if (this.tipo === "ninja"){
            ataque = "shuriquim"

        } else if (this.tipo === "mago") {
            ataque = "magia"

        } else if (this.tipo === "guerreiro") {
            ataque = "espada"

        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } 
        console.log ("O " + this.tipo + " atacou usando " + ataque)       
    }
    
}
   let newHero = new HERO ("Naruto" , "17" , "ninja")
    newHero.atacar()
    