import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { TiposNegociacoes } from "../types/tiposNegociacoes.string.js";

@Injectable()
@ValidatorConstraint({ async: true })
export class tiposNegociacoesValidator implements ValidatorConstraintInterface {
    constructor() { }

    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const validConditions: TiposNegociacoes[] = ['TROCA', 'EMPRESTIMO', 'DOACAO', 'DESAPEGO'];
        const result = value;
        const verifyNegotiation = typeof result === 'string' && validConditions.includes(result as TiposNegociacoes);
        return verifyNegotiation;
    }

}

export const VerificaTiposNegociacoes = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: tiposNegociacoesValidator
        })
    }
}