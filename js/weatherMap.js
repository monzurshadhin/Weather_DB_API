document.getElementById("searchButton").addEventListener("click", () => {
  // console.log('click');
  const inputField = document.getElementById("input-field");
  const inputData = inputField.value;
  console.log(inputData);

  inputField.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=52d0b6f0a59173cbfafdb270f0791a43&units=metric`;

  console.log(url);

  getFetchData(url).then((data) => {
    displayWeather(data);
  });
});

const getFetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const displayWeather = (data) => {
    console.log(data);
  const weatherField = document.getElementById("weather-field");

  // //without destucturing
  // weatherField.innerHTML = `
  
  //   <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" />
  //       <h1>${data.name}</h1>
  //       <h3><span>${data.main.temp}</span>&deg;C</h3>
  //       <h1 class="lead">${data.weather[0].main}</h1>
  //   `;


    //with destucturing 
    const {name}=data;
    const {temp}=data.main;
    const {main,icon} =data.weather[0];
  
    console.log(name);
    console.log(temp);
    console.log(main);
    console.log(icon);

  weatherField.innerHTML = `
  
  <img width="100px" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" />
      <h1>${name}</h1>
      <h3><span>${temp}</span>&deg;C</h3>
      <h1 class="lead">${main}</h1>
  `;
};
