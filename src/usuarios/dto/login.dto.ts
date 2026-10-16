import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginUsuarioDTO{
    @IsEmail({}, { message: "Email inválido" })
    @ApiProperty({
        example: "rafael.silva@example.com",
        description: "Tipo: String/Email; Email do usuário usado para login e identificação do usuário."
    })
    email: string;

    @IsString()
    @ApiProperty({
        example: "SenhaForte@123456",
        description: "Tipo: String; Senha usada para login, deve seguir padrão de segurança mínimo, evitando padrões."
    })
    passwordHash:string;
}