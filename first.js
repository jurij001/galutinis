fetch("https://634baec5d90b984a1e3d9aa5.mockapi.io/cars")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);

    const carsWrapper = document.getElementById("cars");

    data.forEach((car) => {
      const carWrapper = document.createElement("div");
      carWrapper.classList.add("car");

      const carImageWrapper = document.createElement("div");
      carImageWrapper.classList.add("car-image-section");
      carImageWrapper.innerHTML = `${car.car}$`;

      const titleSection = document.createElement("div");
      titleSection.classList.add("title-section");

      const title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = `${car.title}$`;

      const buttonSection = document.createElement("div");
      buttonSection.classList.add("button-section");

      const button = document.createElement("button");
      button.classList.add("button");

      const carPrice = document.createElement("div");
      carPrice.classList.add("car-price");
      carPrice.innerHTML = `${car.price}$`;
      

      title.innerHTML = car.about;
      button.innerHTML = "Placiau";

      buttonSection.append(button);
      titleSection.append(carPrice, title, buttonSection);
      carWrapper.append(carImageWrapper, titleSection);
      carsWrapper.append(carWrapper);
    });
  });

  

  
