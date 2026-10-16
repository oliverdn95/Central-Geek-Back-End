export class Manga {
    id: string;
    title: string;
    volumeNumber: number;
    isbn: string;
    author: string;
    publisher: string;
    genre: string;
    synopsis: string;
    coverImageUrl: string;
    condition: string;
    ownerId: string;
    notes?: string;
    createdAt: string;


    constructor(id: string, title: string, volumeNumber: number, isbn: string, author: string, publisher: string, genre: string, synopsis: string, coverImageUrl: string, condition: string, ownerId: string, notes: string | undefined, createdAt: string) {
        this.id = id;
        this.title = title;
        this.volumeNumber = volumeNumber;
        this.isbn = isbn;
        this.author = author;
        this.publisher = publisher;
        this.genre = genre;
        this.synopsis = synopsis;
        this.coverImageUrl = coverImageUrl;
        this.condition = condition;
        this.ownerId = ownerId;
        this.notes = notes;
        this.createdAt = createdAt;
    }
    
}