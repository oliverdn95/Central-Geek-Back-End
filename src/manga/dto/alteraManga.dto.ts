import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class alteraMangaDTO {

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "One Piece",
        description: "Tipo: String; Título do manga."
    })
    title: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({
        example: 42,
        description: "Tipo: Number; Número do volume do manga."
    })
    volumeNumber: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "9788573519870",
        description: "Tipo: String; ISBN do manga."
    })
    isbn: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Eiichiro Oda",
        description: "Tipo: String; Autor do manga."
    })
    author: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Panini",
        description: "Tipo: String; Editora do manga."
    })
    publisher: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "Ação, Aventura, Fantasia",
        description: "Tipo: String; Gênero do manga."
    })
    genre: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "A história segue Monkey D. Luffy e sua tripulação de piratas em busca do tesouro One Piece.",
        description: "Tipo: String; Sinopse do manga."
    })
    synopsis: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "https://example.com/onepiece.jpg",
        description: "Tipo: String; URL da imagem de capa do manga."
    })
    coverImageUrl: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "NOVO",
        description: "Tipo: String; Condição do manga (Novo, Usado, etc.)."
    })
    condition: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "user-uuid-1234",
        description: "Tipo: String; ID do usuário proprietário do manga."
    })
    ownerId: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "Edição especial com capa dura.",
        description: "Tipo: String; Notas adicionais sobre o manga (opcional)."
    })
    notes?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: "2024-06-01T12:00:00Z",
        description: "Tipo: String; Data de criação do registro do manga."
    })
    createdAt: string;
}