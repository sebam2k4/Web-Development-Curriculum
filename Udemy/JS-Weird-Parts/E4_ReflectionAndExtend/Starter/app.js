var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;


// example of Reflection

// loop over all of the menbers of the john object 
for (var prop in john) {
    // check for properties only for given object and not in the prototype chain
    if (john.hasOwnProperty(prop)) {
        // pass in 'prop' as string into the bracket operator
        console.log(prop + ': ' + john[prop]);
    }
}


// using underscore.js extend - very useful - look at source code to understand it better!

var jane = {
    address: '111 main St',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return this.firstname;
    }
}

// composes/combines all these objects and adds them to john; (this is not similart to ES6 extends)
_.extend(john, jane, jim);

console.log(john);