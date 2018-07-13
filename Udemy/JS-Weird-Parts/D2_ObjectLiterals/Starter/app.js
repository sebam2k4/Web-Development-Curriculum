var sebek = {
  firstname: 'Sebek',
  lastname: 'Kulig',
  address: {
    street: '111 Main St.',
    city: 'Galway'
  }
};
console.log(sebek);

sebek.middleInitial = 'B'
console.log(sebek);

function greet(person) {
  console.log('Hi ' + person.firstname );
}

greet(sebek);

// create object dynamically passing it in the greet functin
greet({
  firstname: 'Mary',
  lastname: 'Doe'
});

sebek.address2 = {
  street: '2 Second St.'
}

console.log(sebek);
