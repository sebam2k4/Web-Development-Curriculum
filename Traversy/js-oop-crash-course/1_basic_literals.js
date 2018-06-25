// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};


console.log(book1);

// get values of object
console.log("object values:", Object.values(book1));
// get keys of objects
console.log("Object keys:", Object.keys(book1));

console.log(book1.getSummary());


const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2017',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book2);