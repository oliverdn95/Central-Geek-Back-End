import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validator/emailUnico.validator.js";
import { SenhaForte } from "../validator/senhaForte.validator.js";
import { UserRole } from "../../MockData.js";

export class alteraUsuarioDTO {
    
    @IsEmail()
    @EmailUnico({ message: "Ja existe um usuario com esse email." })
    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @SenhaForte({ message: "Senha Fraca" })
    @IsOptional()
    passwordHash: string;

    // @IsString()
    // //TODO RoleValida
    // @IsOptional()
    // role: UserRole;

    @IsString()
    @IsOptional()
    displayName: string;

    @IsString()
    @IsOptional()
    bio: string;

    @IsString()
    @IsOptional()
    avatarUrl: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    state: string;

    @IsString()
    @IsOptional()
    createdAt: string;
}