// - Implicit Binding
// - Explicit Binding
// - new Binding
// - window Binding

// Implicit Binding:
// Left of the Dot at Call Time

var sayNameMixin = function (obj) {
  obj.sayName = function () {
    console.log(this.name);
  };
};

var me = {
  name: 'Tyler',
  age: 25
};

var you = {
  name: 'Joey',
  age: 21
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();
