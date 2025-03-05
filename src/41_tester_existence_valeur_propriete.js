const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
};

if (terre.hasOwnProperty("test")) {
    console.log("ok !");
}else {
    console.log("Ko!");
}

