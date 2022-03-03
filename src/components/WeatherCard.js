import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const WeatherCard = ({ weatherData, zipCode }) => {
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const low_temp = weatherData.main.temp_min;
  const high_temp = weatherData.main.temp_max;
  const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const dt = weatherData.dt;
  const day_time = new Date(dt * 1000).getHours();

  const sunset = new Date(weatherData.sys.sunset * 1000).getHours();

  const printMessage =
    weatherData.name &&
    `currently ${weatherData.weather[0].description} and ${weatherData.wind.deg} degrees wind with the speed of ${weatherData.wind.speed}`;

  return (
    <div className='WeatherCard'>
      {zipCode !== "" ? (
        <div>
          <p>
            Check out what I can do! See what the weather is where you are at.
          </p>
        </div>
      ) : (
        <h1>No weather data</h1>
      )}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt='weather img'
          height='200'
          width='100'
          image={sunset > day_time ? "/day.svg" : "/night.svg"}
        />

        <img src={icon} alt='' />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            City Name: {city}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            Current Temp: {temp} &deg;C
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Low Temp: {low_temp} &deg;C &nbsp;&nbsp; High Temp: {high_temp}{" "}
            &deg;C
          </Typography>
          <p>{printMessage}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherCard;
