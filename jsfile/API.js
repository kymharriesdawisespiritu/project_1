const area = document.querySelector(".row");
const ev = document.querySelector("#navigate");
var myHeaders = new Headers();
const post = (
  id,
  city,
  country,
  latitude,
  longitude,
  temperature,
  weather_description,
  humidity,
  wind_speed
) => {
  const card = `
    <div class="card mt-5" style="width: 10rem">
      <div class="card-body">
        <h4 class="card-title">${country}</h4>
        <p class="card-text">
        ${city}
        </p>
      </div>
      
        <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><div>humidity:</div>${humidity}</a></li>
                  <li><a class="dropdown-item" href="#"><div>wind_speed:</div>${wind_speed}</a></li>
                  <ul class="list-group list-group-flush">
                   <div class="list-group-item">
                   <div>Status:</div>
                   </div>
                    <li class="list-group-item"><div>longitude:</div>${longitude}</li>
                    <li class="list-group-item"><div>temperature:</div>${temperature}</li>
                    <li class="list-group-item">
          <div>weather_description:</div>
          ${weather_description}
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"><div>latitude:</div>${latitude}</a>
                  </li>
                </ul>
              </li>
      <div id="navigate" class="card-body">
      </div>
    </div>`;
  return card;
};
fetch("https://freetestapi.com/api/v1/weathers")
  .then((response) => response.json())
  .then((response) =>
    response.map(
      (item) =>
        (area.innerHTML += post(
          item.id,
          item.city,
          item.country,
          item.latitude,
          item.longitude,
          item.temperature,
          item.weather_description,
          item.humidity,
          item.wind_speed
        ))
    )
  )

  .catch((error) => console.log("error", error));
