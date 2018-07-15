function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    // every new object instantiation would create a copy of this method - not good design
    // this.getFullName = function() {
    //     return this.firstname + ' ' + this.lostname;
    // }
    
}

// can add properties to the prototype object at a later stage.
// better to add methods to prototype instead of defining them in the constructor funciton. The method is in memory only once in the prototype chain of the jane and john objects. (saving memory space)
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// new creates an empty object
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

console.log(jane.getFullName());