// ES6 CLASSES - no need to compile with Babel these days

class Book {
  constructor(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  // static method - doesn't need to be instantiated.
  // need to be called on class. Book.topBookStore()
  static topBookStore() {
    return 'Barned & Noble';
  }
}

// add method
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2017');



console.log(book1);
console.log(book1.getSummary());
book1.revise('2000');
console.log(book1);

console.log(Book.topBookStore());