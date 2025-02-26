const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature: {
    min: -70,
    max: 60,
  },
  isOld: false,
  getTemperature(){
    console.log("15")
  }
};

const copy = terre;

copy.isOld = true;

const prop = "temperature"

terre.getTemperature();
