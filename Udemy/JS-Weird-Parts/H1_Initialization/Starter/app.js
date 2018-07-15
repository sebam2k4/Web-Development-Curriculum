var people = [
  {
    // the 'john' object
    firstname: 'John',
    lastname: 'Doe',
    address: [
      '111 Main St',
      '222 Second St.'
    ]
  },
  {
    // the 'jane object
    firstname: 'Jane',
    lastname: 'Doe',
    address: [
      '333 Third St.',
      '444 Fourth St.'
    ],
    greet: function() {
      return 'Hello!';
    }
  }
]

console.log(people);

console.table(people);