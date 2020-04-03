const Imovel = require("../models/Imovel")


const fraseToBool = (frase) =>{
    let converted = frase.toLowerCase();

    if(converted == "privativa"){
        return true
    }

    converted == "sim" ? converted = true : converted = false
    return converted
}


module.exports = {

    criaImoveis(imovel){
        let atributos = {
            sacada:fraseToBool(imovel.sacada),
            churrasqueira: fraseToBool(imovel.churrasqueira),
            portaria: fraseToBool(imovel.portaria)
        }
        let localizacao = {
            cidade: imovel.cidade,
            estado: imovel.uf.toUpperCase(),
            bairro: imovel.bairro,
        }
        let parsedImovel = new Imovel(
            imovel.id,
            imovel.area_privativa,
            imovel.area_total,
            imovel.condominio,
            imovel.iptu,
            atributos,
            localizacao
            )
        return parsedImovel.getImovel(atributos,localizacao)


    }
}