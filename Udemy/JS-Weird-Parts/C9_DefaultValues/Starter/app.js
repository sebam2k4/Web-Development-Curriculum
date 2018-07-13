function greet(name) {
  name = name || '<Your name here>';
  console.log('Hello ' + name);
}

greet('Sebek');
greet(1);
greet(0);
greet('');
greet();