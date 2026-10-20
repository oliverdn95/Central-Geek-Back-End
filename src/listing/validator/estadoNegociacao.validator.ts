import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { EstadoNegociacao } from "../types/estadoNegociacao.string.js";


@Injectable()
@ValidatorConstraint({ async: true })
export class estadoNegociacaoValidator implements ValidatorConstraintInterface {
    constructor() { }

    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const validConditions: EstadoNegociacao[] = ['RASCUNHO', 'ATIVO', 'NEGOCIANDO', 'CONCLUIDO', 'CANCELADO', 'EXPIRADO'];
        const result = value;
        const verifyState = typeof result === 'string' && validConditions.includes(result as EstadoNegociacao);
        return verifyState;
    }

}

export const VerificaEstadoNegociacao = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: estadoNegociacaoValidator
        })
    }
}