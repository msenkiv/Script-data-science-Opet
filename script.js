const fs = require("fs");
const content = fs.readFileSync("imoveis.json");
const json = JSON.parse(content)
const utils = require('./services/utils.functions.service')
const art = require('./models/Art')

let imoveisLista = []

/// PARA RODAR O PROJETO, BASTA RODAR O SEGUINTE COMANDO NO CONSOLE:
// npm start

for(let i in json){
    let imovel = json[i]
    let parsedImovel = utils.criaImoveis(imovel)
    imoveisLista.push(parsedImovel)

}


console.log("SCRIPT DE TRANSFORMACAO DE DADOS - MARVIN SENKIV")
console.log(art)
console.log(imoveisLista)




