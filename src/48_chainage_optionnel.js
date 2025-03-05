const book = {
  author: {
    name: "Jean",
    sayHello() {
        return true;
    },
  },
};

// const username = book.author.name;

// console.log(username);

if (book.author?.sayHello?.()) {
  console.log("il y a un nom");
}
