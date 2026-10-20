export class Negociacao {
    id: string;
    userId: string;
    mangaId: string;
    type: string;
    status: string;
    description: string;
    price: number | null;
    desiredItems: string[];
    city: string;
    state: string;
    createdAt: string;
    expiresAt: string | null;


    constructor(id: string, userId: string, mangaId: string, type: string, status: string, description: string, price: number | null, desiredItems: string[], city: string, state: string, createdAt: string, expiresAt: string | null) {
        this.id = id;
        this.userId = userId;
        this.mangaId = mangaId;
        this.type = type;
        this.status = status;
        this.description = description;
        this.price = price;
        this.desiredItems = desiredItems;
        this.city = city;
        this.state = state;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
    }

}