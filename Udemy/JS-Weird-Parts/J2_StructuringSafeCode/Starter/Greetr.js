// GREETR LIBRARY

// REQUIREMENTS:
// 1. When given a first name, last name, and optional language, it generates formal and informal greetings.
// 2. Support English and Spanish languages.
// 3. Reusable library
// 4. Easy to type structure 'G$()'
// 5. Support jQuery

// semicolon used to make sure that code/library ran before this is closed/finished 
;(function(global, $) {

  // create empty object with 'new' keyword
  var Greetr = function (firstName, lastName, language) {

    // so don't have to set up object in code with 'new' keyword
    return new Greetr.init(firstName, lastName, language);
  }

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // informal greeings
  var  greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  // logger message
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

  // prototype holds methods to add functionality to the objects (and save memory space)
  Greetr.ptototype = {

    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    validate: function() {
      // check if language is found in supported lang array
       if (supportedLangs.indexOf(this.language) === -1 ) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    formalGreeting: function() {
      return `${formalGreetings[this.language]}, ${this.fullName()}`
    },

    // chainable methods return their own containing object
    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      // check first if 'console' object is available
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }

      // make chainable
      return this;
    },

    // change language on fly
    setLang: function(lang) {
      
      // set the language
      this.language = lang;

      // validate
      this.validate();

      // make chainable
      return this;
    },

    // incorporate jQuery selector
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not laoded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // get passed in selector with jquery and add greeting to it as html
      $(selector).html(msg);

      // make chainable
      return this;
    }
  };

  // the actual object is created here, allowing us to 'new' an object
  // without calling 'new'
  Greetr.init = function(firstName, lastName, language) {

    // save reference to 'this'
    var _this = this;

    // set up default properties
    _this.firstName = firstName || 'guest';
    _this.lastName = lastName || '';
    _this.language = language || 'en';

    // validate lang on obj creation
    _this.validate();
  }

  // assign the prototype object
  // this is a trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.ptototype;

  // attach Greetr ato the global object and provide a shorthand '$G'
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));