var numShelves = 0;

var Library = {
	numShelves : numShelves,
    shelves : []
};

function Shelf(subject, numBooks){
    this.subject = subject;
    this.numBooks = numBooks;
    this.books = [];
    Library.numShelves += 1;
    Library.shelves.push(this);
}

function Book(shelf, Title, author) {
    this.Title = Title;
    this.author = author;
    this.shelf = shelf;
    this.shelf.numBooks++;
    this.shelf.books.push(this);
    this.changeShelf = function(newShelf) {
        var index = this.shelf.books.indexOf(this);
        this.shelf.books.splice(index, 1);
        this.shelf = newShelf;
        this.shelf.books.push(this);
    };
}

var Mystery = new Shelf(Mystery, 0);
var Book1 = new Book(Mystery, "Murder She Wrote", "Angela Lansbury");
var Comedy = new Shelf(Comedy, 0);
Book1.changeShelf(Comedy);

