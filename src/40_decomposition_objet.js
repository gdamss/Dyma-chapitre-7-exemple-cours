const population = 50;


const terre = {
  population: 7e7,
  satellite: "Lune",
  temperature:{
    min: -70,
    max: 60,
  },
  isOld: false,
};

const { temperature, ...reste } = terre;




console.log(temperature, reste);

