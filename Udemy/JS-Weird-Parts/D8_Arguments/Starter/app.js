function greet(firstname, lastname, language) {

  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('---------------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log("arg 0: " + arguments[0]);
  console.log("-----------");

};

greet();

greet('John');
greet('John', 'Doe', 'en');

greet('John', 'Doe', 'es', 'hello');