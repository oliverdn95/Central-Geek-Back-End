import { Injectable } from "@nestjs/common";
import { Manga } from "./manga.entity.js";
import { v4 as uuid } from "uuid";
import { alteraMangaDTO } from "./dto/alteraManga.dto.js";

@Injectable()
export class mangaCadastrados{
    #mangas:Manga[] = [];

    adicionaManga(dadosManga:any){
        let manga = new Manga(uuid(), dadosManga.title, dadosManga.volumeNumber, dadosManga.isbn, dadosManga.author, dadosManga.publisher, dadosManga.genre, dadosManga.synopsis, dadosManga.coverImageUrl, dadosManga.condition, dadosManga.ownerId, dadosManga.notes, dadosManga.createdAt)

        this.#mangas.push(manga);
        return manga.id;
    }

    retornaMangas(){
        return this.#mangas;
    }

    retornaMangaId(id:string){
        const manga = this.#mangas.find((u:Manga) => u.id === id);
        if(!manga){
            throw new Error("Manga não localizado");
        }

        return manga ? manga : null;  
    }
    
    async atualizaManga(id:string, dadosAtualizacao: alteraMangaDTO){
        let possivelManga = this.retornaMangaId(id)
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave === "id"){
                    return;
                }else if(valor === undefined){
                    return;
                }/* else if(chave == 'senha'){
                    possivelManga?.trocaSenha(valor);
                }*/
                (possivelManga as any)[chave] = valor;
            }
        )
        return possivelManga? possivelManga.id : null;
    }

    async apagaManga(id:string){
        let possivelManga = this.retornaMangaId(id)

        this.#mangas = this.#mangas.filter(mangaSalvo => mangaSalvo.id !== possivelManga?.id)

        return possivelManga;
    }

}