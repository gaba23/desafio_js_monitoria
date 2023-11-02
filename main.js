class Book {
    constructor(title, description, author){
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    constructor(){
       this.books = [] 
    }

    addBook(bookInfo){
        const book = new Book(bookInfo.title, bookInfo.description, bookInfo)
        this.books.push([book, bookInfo.id])
    }

    getBooks(){
        console.log(this.books)
    }

    removeBookById(id){
        const posicao = this.findBook(id)
        this.books.splice(posicao, 1)
            
    }

    findBook(id){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i][1] === id){
                return i
            }
        } 
    }

    getBookById(id){
        const posicao = this.findBook(id)
        console.log(this.books[posicao][0])
    }

    updateBookById(id, newInfo){
        const posicao = this.findBook(id)
        if(newInfo.title){
            this.books[posicao][0].title = newInfo.title
        }
        if(newInfo.description){
            this.books[posicao][0].description = newInfo.description
        }
        if(newInfo.author){
            this.books[posicao][0].author = newInfo.author
        }

    }
}

