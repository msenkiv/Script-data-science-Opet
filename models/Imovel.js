class Imovel{

    constructor(id,
        areaPrivada,
        areaTotal,
        valorCondominio,
        iptu,
        )
        {
        this.id = id
        this.areaPrivada = areaPrivada
        this.areaTotal = areaTotal
        this.valorCondominio = valorCondominio
        this.iptu = iptu

    }


    getImovel(atributos,localizacao){
        return{
            id: this.id,
            areaPrivativa: this.areaPrivada,
            areaTotal: this.areaTotal,
            valorCondominio: this.valorCondominio,
            iptu:this.iptu,
            atributos: atributos,
            localizacao: localizacao

        }
    }
    getAtributos(){
        return this.atributos
    }
}
module.exports = Imovel;