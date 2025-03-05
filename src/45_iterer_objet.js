

const obj = {
    a : "un" ,
    b: "deux" ,
    c:"trois"
}

for(prop in obj) {
    console.log(prop);
    console.log(obj[prop]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

