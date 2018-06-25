// INHERITANCE

// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// prototype method
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Create Magazine object that inherits the Book object

// Magazine Constructor
function Magazine(title, author, year, month) {
  // inherit Book object
  Book.call(this, title, author, year);
  this.month = month;
}

// inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
// Use Magazine Constructor for prototypes
Magazine.prototype.constructor = Magazine;


// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Sebek', '2014', 'Feb');
console.log(mag1);
console.log(mag1.getSummary());
