// Constructor (es5)

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate a new Object from constructor
const book1 = new Book("Book One", "John Doe", "2012");
const book2 = new Book("Book Two", "Jane Doe", "2018");

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());


console.log(book2.getSummary());
console.log(book2);