import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';


function App() {
  const [city, setCity] = useState(0);
  const [sem, setSem] = useState(0);
  const [tempmax, setTempmax] = useState(0);
  const [tempmin, setTempmin] = useState(0);
  const [temp, setTemp] = useState(0);
  const [feelslikemax, setFeelslikemax] = useState(0);
  const [feelslikemin, setFeelslikemin] = useState(0);
  const [feelslike, setFeelslike] = useState(0);
  const [dew, setDew] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [moonphase, setMoonphase] = useState(0);
  const [cloudcover, setCloudcover] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [winddir, setWinddir] = useState(0);
  const [hec, setHec] = useState(0);

  const currencies = [
    {
      value: '1',
      label: 'Ampara',
    },
    {
      value: '2',
      label: 'Anuradhapura',
    },
    {
      value: '3',
      label: 'Colombo',
    },
  ];

  const predict = async (e) => {
    e.preventDefault();

    var formData = [
      {
        city: city,
        sem: sem,
        tempmax: 30.314118,
        tempmin: 24.914118,
        temp: 27.862941,
        feelslikemax: 35.094118,
        feelslikemin: 25.493529,
        feelslike: 31.041176,
        dew: 23.321765,
        humidity: 77.208706,
        windspeed: 8.364118,
        moonphase: 0.529706,
        cloudcover: 48.948824,
        visibility: 19.768235,
        winddir: 142.910588,
        hec: 100,
      },
    ];

    axios
      .post(
        '//localhost:5000/predict',
        // 'https://crop-prediction-it19217796.herokuapp.com/predict',
        formData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={(e) => predict(e)}>
      <div className="mx-auto p-20">
        <div className="flex flex-col gap-4">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value="1"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={sem}
            onChange={(e) => setSem(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={tempmax}
            onChange={(e) => setTempmax(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={tempmin}
            onChange={(e) => setTempmin(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={temp}
            onChange={(e) => setTemp(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={feelslikemax}
            onChange={(e) => setFeelslikemax(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={feelslikemin}
            onChange={(e) => setFeelslikemin(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={feelslike}
            onChange={(e) => setFeelslike(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={dew}
            onChange={(e) => setDew(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={humidity}
            onChange={(e) => setHumidity(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={windspeed}
            onChange={(e) => setWindspeed(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={moonphase}
            onChange={(e) => setMoonphase(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={cloudcover}
            onChange={(e) => setCloudcover(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={visibility}
            onChange={(e) => setVisibility(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={winddir}
            onChange={(e) => setWinddir(e.value)}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={hec}
            onChange={(e) => setHec(e.value)}
          />

          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
}

export default App;
