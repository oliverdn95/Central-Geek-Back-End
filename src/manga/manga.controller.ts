import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { mangaCadastrados } from "./manga.service.js";
import { criaMangaDTO } from "./dto/criaManga.dto.js";
import { alteraMangaDTO } from "./dto/alteraManga.dto.js";

@ApiTags("manga")
@Controller('/mangas')
export class MangaController {

    constructor(private mangas: mangaCadastrados) {

    }
    
    @Post()
    async cadastroManga(@Body() dadosManga: criaMangaDTO) {
        let retorno = this.mangas.adicionaManga(dadosManga);
        if (retorno) {
            return {
                message: "Cadastro efetuado com sucesso",
                manga: retorno
            }
        } else {
            return {
                message: "Cadastro não efetuado",
                manga: null
            };
        }

    }

    @Get()
    async retornarMangas() {
        return {
            message: "Consulta Efetuada",
            mangas: this.mangas.retornaMangas()
        }
    }
    @Get('/:id')
    async retornarMangaID(@Param('id') id: string) {
        const resposta = this.mangas.retornaMangaId(id);

        return resposta ? { message: "Manga encontrado", manga: resposta } : { message: "Manga não encontrado, tente novamente" };
    }

    @Put("/:id")
    async atualizaManga(@Param("id") id: string, @Body() novosDados: alteraMangaDTO) {
        const retorno = await this.mangas.atualizaManga(id, novosDados)

        if (retorno) {
            return {
                message: "manga atualizado",
                id: retorno
            }
        } else {
            return {
                message: "manga não atualizado",
                id: null
            }
        }
    }

    @Delete("/:id")
    async removeManga(@Param('id') id: string) {
        const mangaRemovido = await this.mangas.apagaManga(id)
        return {
            manga: mangaRemovido,
            message: 'Manga removido.'
        }
    }
}