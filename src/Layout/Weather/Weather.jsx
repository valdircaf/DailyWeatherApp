/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { GiWindyStripes } from 'react-icons/gi';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { WeatherContainer } from './styles';
import Cards from '../Cards/Cards';
import Nublado from '../Images/nublado.png';
import DiaChuvoso from '../Images/dia-chuvoso.png';
import Ensolarado from '../Images/ensolarado.png';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Weather({ data }) {
  const date = new Date();
  const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const [weatherBar, setWeatherBar] = useState(false);

  const showWeather = () => {
    setWeatherBar(!weatherBar);
  };

  return (

    <WeatherContainer>

      <section className={weatherBar ? 'cards' : 'hide'}>
        <Cards png={Nublado} max="29º" min="27º" num={1} />
        <Cards png={DiaChuvoso} max="28º" min="25º" num={2} />
        <Cards png={Ensolarado} max="29º" min="27º" num={3} />
        <Cards png={DiaChuvoso} max="27º" min="26º" num={4} />
        <Cards png={Ensolarado} max="27º" min="26º" num={-2} />
        <Cards png={Nublado} max="27º" min="26º" num={-1} />
        <IoIosArrowDown onClick={() => {
          setWeatherBar(!weatherBar);
        }}
        />
      </section>
      {data.map((result) => (
        <section className={!weatherBar ? 'main' : 'hide'} key={result}>
          <div className={!weatherBar ? 'show' : 'hide'}>
            <IoIosArrowUp onClick={showWeather} />
          </div>
          <h1>{`${parseInt(result.data.main.temp, 10)}º`}</h1>
          <div className="place">
            <h2>
              {result.data.name}
            </h2>
            <h3>{`${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`}</h3>
            <div className="hour">
              <h2>{`${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`}</h2>
            </div>
            <div className="rest">
              <p>
                <GiWindyStripes />
                {result.data.wind.speed}
              </p>
              <p>
                <AiOutlineArrowUp />
                {`${parseInt(result.data.main.temp_max, 10)}º`}
              </p>
              <p>
                <AiOutlineArrowDown />
                {`${parseInt(result.data.main.temp_min, 10)}º`}
              </p>
            </div>
          </div>
        </section>

      ))}

    </WeatherContainer>

  );
}
