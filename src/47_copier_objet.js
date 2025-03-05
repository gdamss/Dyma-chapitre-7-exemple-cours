const a = {
  name: "Toto",
  foo: {
    bar: "zoo",
  },
};

// shallow
// const b = Object.assign({}, a);
// const c = { ...a};

// deep

const b = JSON.parse(JSON.stringify(a));

b.name = "Tata";
b.foo.bar = 123;

console.log(b);
console.log(a);
