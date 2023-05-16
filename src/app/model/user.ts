export class User {

    constructor(id: number, username: string, email: string, role: string,
                 description: string, firstName: string, lastName: string, avatar: any) {
        this.username = username;
        this.email = email;
        this.role = role;
        this.description = description
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.avatar = avatar
    }

    id: number
    username: string
    email: string
    role: string
    description: string
    firstName: string
    lastName: string
    avatar: any
}