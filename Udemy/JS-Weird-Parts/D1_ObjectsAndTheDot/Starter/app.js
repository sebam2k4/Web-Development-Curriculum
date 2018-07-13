var person = new Object();

// add properties and methods
// [] - computed member access operator
person["firstname"] = "Sebek";
person.lastname = "Kulig";

console.log(person);

person.address = new Object();

person.address.street = "1 Main St.";