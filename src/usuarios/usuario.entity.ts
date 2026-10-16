//TODO Install BCRYPT
import * as bcrypt from 'bcrypt';

export class Usuario {
    id: string;
    email: string;
    username: string;
    passwordHash: string;
    role: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    city: string;
    state: string;
    createdAt: string;

    constructor(id: string, email: string, username:string, passwordHash: string, role: string, displayName: string, bio: string, avatarUrl: string, city: string, state: string, createdAt: string) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.trocaSenha(passwordHash);
        this.role = role;
        this.displayName = displayName;
        this.bio = bio;
        this.avatarUrl = avatarUrl;
        this.city = city;
        this.state = state;
        this.createdAt = createdAt;
    }

    trocaSenha(senha:string){
        const saltOrRounds = 10;

        this.passwordHash = bcrypt.hashSync(senha, saltOrRounds);
    }

    login(senha:string){
        return bcrypt.compareSync(senha, this.passwordHash)
    }

}