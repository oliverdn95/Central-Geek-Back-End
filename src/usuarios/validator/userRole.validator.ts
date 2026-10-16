import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import type { UserRole } from "../types/userRole.string.js";

@Injectable()
@ValidatorConstraint({async:true})
export class userRole implements ValidatorConstraintInterface{
    constructor(){}
    
    async validate(value:string, validationArguments?:ValidationArguments):Promise<boolean>{
        const validRoles: UserRole[] = ['USER', 'MODERATOR', 'ADMIN', 'SUPER_ADMIN'];
        const result = value;
        const verifyRole = typeof result === 'string' && validRoles.includes(result as UserRole);
        return verifyRole;
    }
    
}

export const VerificaRole = (opcoesValidacao:ValidationOptions) => {
    return (objeto: Object, propriedade:string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName:propriedade,
            options:opcoesValidacao,
            constraints:[],
            validator:userRole
        })
    }
}