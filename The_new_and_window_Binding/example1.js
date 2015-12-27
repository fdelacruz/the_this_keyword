// - Implicit Binding
// - Explicit Binding
// - new Binding
// - window Binding

// new Binding
var Animal = function(color, name, type){
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window Binding
var sayAge = function () {
  console.log(this.age);
};

var me = {
  age: 25
};

sayAge(); // undefined
// window.age = 35;
global.age = 35;
sayAge(); // 35
