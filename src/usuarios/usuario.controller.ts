import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { usuarioCadastrados } from "./usuario.service.js";
import { criaUsuarioDTO } from "./dto/criaUsuario.dto.js";
import { alteraUsuarioDTO } from "./dto/alteraUsuario.dto.js";
import { LoginUsuarioDTO } from "./dto/login.dto.js";

@Controller('/usuarios')
export class UsuarioController{
    
    constructor( private usuarios:usuarioCadastrados){
        
    }

    @Post()
    async loginUsuario(@Body() login: LoginUsuarioDTO){
        const usuario = await this.usuarios.validaLogin(login.email, login.senha);
        if(usuario){
            return {
                message: "Login efetuado com sucesso",
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email:usuario.email,
                    cidade: usuario.cidade
                }
            };
        } else{
            return{
                message: "Email ou senha incorretos",
                usuario: null
            }
        }
    }

    @Post()
    async cadastroUsuario(@Body() dadosUsuario:criaUsuarioDTO){
        let retorno = this.usuarios.adicionaUsuario(dadosUsuario);
        if(retorno){
            return {
                message:"Cadastro efetuado com sucesso",
                usuario:retorno
            }
        } else {
            return {
                message:"Cadastro não efetuado",
                usuario:null
            };
        }
        
    }

    @Get()
    async retornarUsuarios(){
        return {
            message:"Consulta Efetuada",
            usuarios: this.usuarios.retornaUsuarios()
        }
    }
    @Get('/:id')
    async retornarUsuarioID(@Param('id') id:string){
        const resposta = this.usuarios.retornaUsuarioId(id);

        return resposta ?  { message: "Usuario encontrado", usuario:resposta } : { message: "Usuário não encontrado, tente novamente"};
    }

    @Put("/:id")
    async atualizaUsuario(@Param("id") id:string , @Body() novosDados:alteraUsuarioDTO){
        const retorno = await this.usuarios.atualizaUsuario(id, novosDados)

        if(retorno){
            return{
                message:"usuario atualizado",
                id:retorno
            }
        }else{
            return{
                message:"usuario não atualizado",
                id:null
            }
        }
    } 

    @Delete("/:id")
    async removeUsuario(@Param('id') id:string){
        const usuarioRemovido = await this.usuarios.apagaUsuario(id)
        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido.'
        }
    }
}