// - Implicit Binding
// - Explicit Binding
// - new Binding
// - window Binding

// Explicit Binding
// call, apply, bind

sayName = function (lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['javascript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]);
