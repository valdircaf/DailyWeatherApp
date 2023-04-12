import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { HomeContainer } from './styles';
import Weather from '../../Layout/Weather/Weather';
import Loader from '../../Layout/Loader/Loader';

export default function Home() {
  const [cityValue, setCityValue] = useState();
  const [dataWeather, setDataWeather] = useState([]);
  const [unsplashData, setDataUnsplash] = useState();
  const [isLoader, setLoader] = useState(true);
  const apiUnsplashKey = 'yOuNjoi4BgeFvEfIt3lYgwyqC1qfARjOpL_IxpTS8fE';
  const apiOpenWeatherKey = '9e205497e9041ccbe678394f14d3ad66';
  const urlOpenWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiOpenWeatherKey}`;
  const urlUnsplash = `https://api.unsplash.com/search/photos/?query=${cityValue}&client_id=${apiUnsplashKey}`;
  const randomNum = Math.floor(Math.random() * 10);
  const handleOnChangeInput = (e) => {
    setCityValue(e.target.value);
  };

  const submit = () => {
    // eslint-disable-next-line no-alert
    axios.get(urlOpenWeather).then((response) => setDataWeather([response])).catch(() => alert('Digite um local válido'));
    axios.get(urlUnsplash).then((response) => {
      setDataUnsplash(response.data.results[randomNum].urls.raw);
      setLoader(false);
    }).then(setLoader(true), 3000);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submit();
    }
  };

  return (

    <HomeContainer style={{ backgroundImage: `url(${unsplashData})` }}>
      <section className="input">
        <form action="">
          <input
            placeholder="Faça sua pesquisa"
            onChange={(e) => {
              handleOnChangeInput(e);
            }}
            value={cityValue}
            onKeyDown={handleKeyPress}
          />
          <FiSearch onClick={submit} />
        </form>
      </section>

      <section className="weather">
        {isLoader && <Loader />}
        <Weather data={dataWeather} />
      </section>

    </HomeContainer>

  );
}
