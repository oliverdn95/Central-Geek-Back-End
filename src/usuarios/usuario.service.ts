import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity.js";
import { v4 as uuid } from "uuid";
import { alteraUsuarioDTO } from "./dto/alteraUsuario.dto.js";

@Injectable()
export class usuarioCadastrados{
    #usuarios:Usuario[] = [];

    adicionaUsuario(dadosUsuario:any){
        let usuario = new Usuario(uuid(), dadosUsuario.email, dadosUsuario.passwordHash, dadosUsuario.role, dadosUsuario.displayName, dadosUsuario.bio, dadosUsuario.avatarUrl, dadosUsuario.city, dadosUsuario.state, dadosUsuario.createdAt)

        this.#usuarios.push(usuario);
        return usuario.id;
    }

    retornaUsuarios(){
        return this.#usuarios;
    }

    retornaUsuarioId(id:string){
        const usuario = this.#usuarios.find((u:Usuario) => u.id === id);
        if(!usuario){
            throw new Error("Usuario não localizado");
        }

        return usuario ? usuario : null;  
    }

    async validaEmail(email:string){
        const possivelUsuario = this.#usuarios.find(usuario => usuario.email === email);
        return (possivelUsuario !== undefined);
    }

    async atualizaUsuario(id:string, dadosAtualizacao: alteraUsuarioDTO){
        let possivelUsuario = this.retornaUsuarioId(id)
        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave === "id"){
                    return;
                }else if(valor === undefined){
                    return;
                }else if(chave == 'senha'){
                    possivelUsuario?.trocaSenha(valor);
                }
                (possivelUsuario as any)[chave] = valor;
            }
        )
        return possivelUsuario? possivelUsuario.id : null;
    }

    async apagaUsuario(id:string){
        let possivelUsuario = this.retornaUsuarioId(id)

        this.#usuarios = this.#usuarios.filter(usuarioSalvo => usuarioSalvo.id !== possivelUsuario?.id)

        return possivelUsuario;
    }

    async buscaEmail(email:string){
        const possivelUsuario = this.#usuarios.find(usuario => usuario.email === email);
        if (!possivelUsuario){
            throw new Error("Usuario não localizado")
        }
        return possivelUsuario;
    }

    async validaLogin(email:string, senha:string){
        const possivelUsuario = await this.buscaEmail(email);
        return possivelUsuario.login(senha) ? possivelUsuario : null
    }
}