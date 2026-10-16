import { IsEmail, IsOptional, IsString } from "class-validator";
import { EmailUnico } from "../validator/emailUnico.validator.js";
import { SenhaForte } from "../validator/senhaForte.validator.js";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { VerificaRole } from "../validator/userRole.validator.js";

export class alteraUsuarioDTO {
    
    @IsEmail()
    @EmailUnico({ message: "Ja existe um usuario com esse email." })
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "rafael.silva@example.com",
            description: "Tipo: String/Email; Email do usuário usado para login e identificação do usuário."
    })
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "rafaelcolecionador",
            description: "Tipo: String; Nome de usuário único, usado para login e identificação do usuário."
    })
    username: string;

    @IsString()
    @SenhaForte({ message: "Senha Fraca" })
    @IsOptional()
    @ApiPropertyOptional({
            example: "$argon2id$v=19$MOCK_HASH_USER_001",
            description: "Tipo: String; Senha do usuário, já criptografada."
    })
    passwordHash: string;

    @IsString()
    @VerificaRole({ message: "Role inválida"})
    @IsOptional()
    role: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "Rafael Silva",
            description: "Tipo: String; Nome de exibição do usuário."
    })
    displayName: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "Colecionador de mangás e fã de shonen. Procuro completar minhas coleções.",
            description: "Tipo: String; Breve descrição sobre o usuário."
    })
    bio: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "https://i.pravatar.cc/150?img=12",
            description: "Tipo: String; URL da imagem de avatar do usuário."
    })
    avatarUrl: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "São Paulo",
            description: "Tipo: String; Cidade do usuário."
    })
    city: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "SP",
            description: "Tipo: String; Estado do usuário."
    })
    state: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
            example: "2026-09-01T14:30:00.000Z",
            description: "Tipo: String; Data de criação do usuário."
    })
    createdAt: string;
}