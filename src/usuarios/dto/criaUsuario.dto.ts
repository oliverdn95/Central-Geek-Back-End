import { IsEmail, IsNumber, IsString } from "class-validator";
import { EmailUnico } from "../validator/emailUnico.validator.js";
import { SenhaForte } from "../validator/senhaForte.validator.js";

export class criaUsuarioDTO{
    
        @IsEmail()
        @EmailUnico({ message: "Ja existe um usuario com esse email." })
        @IsString()
        email: string;
    
        @IsString()
        username: string;
    
        @IsString()
        @SenhaForte({ message: "Senha Fraca" })
        passwordHash: string;
    
        // @IsString()
        // //TODO RoleValida
        // role: UserRole;
    
        @IsString()
        displayName: string;
    
        @IsString()
        bio: string;
    
        @IsString()
        avatarUrl: string;
    
        @IsString()
        city: string;
    
        @IsString()
        state: string;
    
        @IsString()
        createdAt: string;
}