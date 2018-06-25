// ADDING PROTOTYPE METHODS TO AN OBJECT

// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary - add as prototype (stored in __proto__ as not every book may need a summary)
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

// Revise - Change Year (manipulates the data)
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

// Instantiate a new Object from constructor
const book3 = new Book("Book THREE", "John Doe", "2012");
const book4 = new Book("Book FOUR", "Jane Doe", "2018");

console.log(book3);
console.log(book3.title);
console.log(book3.getSummary());
console.log(book3.getAge());


console.log(book4.getSummary());
console.log(book4.getAge());
console.log(book4);

// Revise book 4
book4.revise('2008');
console.log(book4);