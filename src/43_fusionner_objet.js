const terre1 = {
    population: 7e7,
    satellite: "Lune",
}

  const terre2 = {
    temperature: {
        min: -70,
        max: 60,
      },
      isOld: false,
    };

  const terre = { ...terre1, ...terre2 };
  

  console.log(terre === terre1 );