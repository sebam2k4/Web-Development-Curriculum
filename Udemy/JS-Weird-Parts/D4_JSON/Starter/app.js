var objectLiteral = {
  firstname: 'Sebek',
  isAProgrammer: true
}

console.log(objectLiteral)
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Sebek", "isAProgrammer": true }');

console.log(jsonValue);