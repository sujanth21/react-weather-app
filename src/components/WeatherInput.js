// Styles
import { Button, TextField } from "@mui/material";

const WeatherInput = ({ zipCode, getWeatherData, setZipCode }) => {
  const handleOnChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleOnClick = () => {
    getWeatherData();
  };

  return (
    <div className='weatherInput'>
      <form>
        <div className='center-aligned-verticle'>
          <span>Please enter your zip code for the weather:</span>
          <TextField
            id='outlined-basic'
            label='ZipCode'
            variant='outlined'
            value={zipCode}
            onChange={handleOnChange}
          />
          <Button onClick={handleOnClick} variant='outlined'>
            Get My Forecast
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WeatherInput;
