// - Implicit Binding
// - Explicit Binding
// - new Binding
// - window Binding

// Implicit Binding:
// Left of the Dot at Call Time

var me = {
  name: 'Tyler',
  age: 25,
  sayName: function () {
    console.log(this.name);
  }
};

me.sayName();
