import { IsEmail, IsString } from "class-validator";
import { EmailUnico } from "../validator/emailUnico.validator.js";
import { SenhaForte } from "../validator/senhaForte.validator.js";
import { VerificaRole } from "../validator/userRole.validator.js";
import { ApiProperty } from "@nestjs/swagger";

export class criaUsuarioDTO{
    
        @IsEmail()
        @EmailUnico({ message: "Ja existe um usuario com esse email." })
        @IsString()
        @ApiProperty({
        example: "rafael.silva@example.com",
        description: "Tipo: String/Email; Email do usuário usado para login e identificação do usuário."
        })
        email: string;
    
        @IsString()
        @ApiProperty({
            example: "rafaelcolecionador",
            description: "Tipo: String; Nome de usuário único, usado para login e identificação do usuário."
        })
        username: string;
    
        @IsString()
        @SenhaForte({ message: "Senha Fraca" })
        @ApiProperty({
            example: "$argon2id$v=19$MOCK_HASH_USER_001",
            description: "Tipo: String; Senha do usuário, já criptografada."
        })
        passwordHash: string;
    
        @IsString()
        @VerificaRole({ message: "Role inválida"})
        @ApiProperty({
            example: "USER",
            description: "Tipo: String; Função do usuário, Obrigatoriamente tem que ser uma das seguintes: 'USER' 'MODERATOR' 'ADMIN' 'SUPER_ADMIN'."
        })
        role: string;
    
        @IsString()
        @ApiProperty({
            example: "Rafael Silva",
            description: "Tipo: String; Nome de exibição do usuário."
        })
        displayName: string;
    
        @IsString()
        @ApiProperty({
            example: "Colecionador de mangás e fã de shonen. Procuro completar minhas coleções.",
            description: "Tipo: String; Breve descrição sobre o usuário."
        })
        bio: string;
    
        @IsString()
        @ApiProperty({
            example: "https://i.pravatar.cc/150?img=12",
            description: "Tipo: String; URL da imagem de avatar do usuário."
        })
        avatarUrl: string;
    
        @IsString()
        @ApiProperty({
            example: "São Paulo",
            description: "Tipo: String; Cidade do usuário."
        })
        city: string;
    
        @IsString()
        @ApiProperty({
            example: "SP",
            description: "Tipo: String; Estado do usuário."
        })
        state: string;
    
        @IsString()
        @ApiProperty({
            example: "2026-09-01T14:30:00.000Z",
            description: "Tipo: String; Data de criação do usuário."
        })
        createdAt: string;
}