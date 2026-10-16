import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import type { MangaCondition } from "../types/mangaCondition.string.js";

@Injectable()
@ValidatorConstraint({ async: true })
export class mangaCondition implements ValidatorConstraintInterface {
    constructor() { }

    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const validConditions: MangaCondition[] = ['NOVO', 'COMO_NOVO', 'BOM', 'REGULAR', 'RUIM'];
        const result = value;
        const verifyRole = typeof result === 'string' && validConditions.includes(result as MangaCondition);
        return verifyRole;
    }

}

export const VerificaCondition = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: mangaCondition
        })
    }
}