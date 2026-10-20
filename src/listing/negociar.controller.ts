import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NegociacaoCadastradas } from "./negociar.service.js";
import { criaNegociacaoDTO } from "./dto/criaNegociacao.dto.js";
import { alteraNegociacaoDTO } from "./dto/alteraNegociacao.dto.js";

@ApiTags("negociacao")
@Controller('/negociacoes')
export class NegociacaoController {

    constructor(private negociacoes: NegociacaoCadastradas) {

    }
    
    @Post()
    async cadastroNegociacao(@Body() dadosNegociacao: criaNegociacaoDTO) {
        let retorno = this.negociacoes.adicionaNegociacao(dadosNegociacao);
        if (retorno) {
            return {
                message: "Cadastro efetuado com sucesso",
                negociacao: retorno
            }
        } else {
            return {
                message: "Cadastro não efetuado",
                negociacao: null
            };
        }

    }

    @Get()
    async retornarNegociacoes() {
        return {
            message: "Consulta Efetuada",
            negociacoes: this.negociacoes.retornaNegociacoes()
        }
    }
    @Get('/:id')
    async retornarNegociacaoID(@Param('id') id: string) {
        const resposta = this.negociacoes.retornaNegociacaoId(id);

        return resposta ? { message: "Negociacao encontrada", negociacao: resposta } : { message: "Negociacao não encontrada, tente novamente" };
    }

    @Put("/:id")
    async atualizaNegociacao(@Param("id") id: string, @Body() novosDados: alteraNegociacaoDTO) {
        const retorno = await this.negociacoes.atualizaNegociacao(id, novosDados)

        if (retorno) {
            return {
                message: "negociacao atualizada",
                id: retorno
            }
        } else {
            return {
                message: "negociacao não atualizada",
                id: null
            }
        }
    }

    @Delete("/:id")
    async removeNegociacao(@Param('id') id: string) {
        const negociacaoRemovida = await this.negociacoes.apagaNegociacao(id)
        return {
            negociacao: negociacaoRemovida,
            message: 'Negociacao removida.'
        }
    }
}