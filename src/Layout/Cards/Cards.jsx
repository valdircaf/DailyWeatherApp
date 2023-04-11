import React from 'react';
import { CardsContainer } from './styles';

export default function Cards({
  // eslint-disable-next-line react/prop-types, no-unused-vars
  max, min, png, num,
}) {
  const date = new Date();
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return (
    <CardsContainer>
      <section>
        <h3>{`${days[date.getDay() + num]}, ${date.getDate() + num} de ${months[date.getMonth()]} de ${date.getFullYear()}`}</h3>
        <section className="temp">
          <img src={png} alt="Dia Nublado" />
          <div>
            <h2>{max}</h2>
            <h2>{min}</h2>
          </div>
        </section>
      </section>

    </CardsContainer>
  );
}
