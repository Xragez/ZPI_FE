export class User {

    constructor(id: number, username: string, email: string, role: string, description: string) {
        this.username = username;
        this.email = email;
        this.role = role;
        this.description = description
        this.id = id
    }

    id: number
    username: string
    email: string
    role: string
    description: string | undefined | null
}