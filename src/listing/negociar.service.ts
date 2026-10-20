import { Injectable } from "@nestjs/common";
import { Negociacao } from "./negociar.entity.js";
import { v4 as uuid } from "uuid";
import { alteraNegociacaoDTO } from "./dto/alteraNegociacao.dto.js";

@Injectable()
export class NegociacaoCadastradas{
    #negociacao:Negociacao[] = [];

    adicionaNegociacao(dadosNegociacao:any){
        let negociacao = new Negociacao(uuid(), dadosNegociacao.userId, dadosNegociacao.mangaId, dadosNegociacao.type, dadosNegociacao.status, dadosNegociacao.description, dadosNegociacao.price, dadosNegociacao.desiredItems, dadosNegociacao.city, dadosNegociacao.state, dadosNegociacao.createdAt, dadosNegociacao.expiresAt)

        this.#negociacao.push(negociacao);
        return negociacao.id;
    }

    retornaNegociacoes(){
        return this.#negociacao;
    }

    retornaNegociacaoId(id:string){
        const negociacao = this.#negociacao.find((u:Negociacao) => u.id === id);
        if(!negociacao){
            throw new Error("Negociacao não localizada");
        }

        return negociacao ? negociacao : null;  
    }
    
    async atualizaNegociacao(id:string, dadosAtualizacao: alteraNegociacaoDTO){
        let possivelNegociacao = this.retornaNegociacaoId(id)
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave === "id"){
                    return;
                }else if(valor === undefined){
                    return;
                }
                (possivelNegociacao as any)[chave] = valor;
            }
        )
        return possivelNegociacao? possivelNegociacao.id : null;
    }

    async apagaNegociacao(id:string){
        let possivelNegociacao = this.retornaNegociacaoId(id)

        this.#negociacao = this.#negociacao.filter(negociacaoSalva => negociacaoSalva.id !== possivelNegociacao?.id)

        return possivelNegociacao;
    }

}