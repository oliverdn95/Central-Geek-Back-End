import { ArrayNotEmpty, IsArray, IsNumber, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { VerificaTiposNegociacoes } from "../validator/tiposNegociacoes.validator.js";
import { VerificaEstadoNegociacao } from "../validator/estadoNegociacao.validator.js";

export class criaNegociacaoDTO {

    @IsString()
    @ApiProperty({
        example: "user-001",
        description: "Tipo: String; ID do usuário."
    })
    userId: string;

    @IsString()
    @ApiProperty({
        example: "manga-001",
        description: "Tipo: String; ID do manga."
    })
    mangaId: string;
    
    @IsString()
    @VerificaTiposNegociacoes({ message: "Tipo de negociação inválido" })
    @ApiProperty({
        example: "TROCA",
        description: "Tipo: String; Tipo de negociação (TROCA, EMPRESTIMO, DOACAO, DESAPEGO)."
    })
    type: string;

    @IsString()
    @VerificaEstadoNegociacao({ message: "Estado de negociação inválido" })
    @ApiProperty({
        example: "ATIVO",
        description: "Tipo: String; Estado da negociação (RASCUNHO ATIVO NEGOCIANDO CONCLUIDO CANCELADO EXPIRADO)."
    })
    status: string;

    @IsString()
    @ApiProperty({
        example: "Estou interessado em trocar meu manga por outro.",
        description: "Tipo: String; Descrição da negociação."
    })
    description: string;

    @IsNumber()
    @ApiPropertyOptional({
        example: 100.00,
        description: "Tipo: Number; Preço da negociação."
    })
    price: number | null;

    @ApiProperty({
        description: 'List of mangas',
        type: String,
        isArray: true,
        example: ["manga-002", "manga-003"],
    })
    @IsArray({ message: 'desiredItems must be an array' })
    @ArrayNotEmpty({ message: 'desiredItems array cannot be empty' })
    @IsString({ each: true, message: 'each manga must be a string' })
    desiredItems: string[];
    

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
        description: "Tipo: String; Data de criação da negociação."
    })
    createdAt: string;

    @IsString()
    @ApiPropertyOptional({
        example: "2026-09-15T14:30:00.000Z",
        description: "Tipo: String; Data de expiração da negociação."
    })
    expiresAt: string | null;
}