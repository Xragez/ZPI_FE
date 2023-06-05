export class Image {

    constructor(picture: any, author: any, username: any, category: any, id: any, name: any, description: any, date: any, rating: any) {
        this.id = id
        this.picture = picture
        this.author = author
        this.username = username
        this.category = category
        this.name = name
        this.description = description
        this.date = date
        this.rating = rating
    }

    id: any
    picture: any
    author: any
    username: any
    category: any
    name: any
    description: any
    date: any
    rating: any
}