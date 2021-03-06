import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../app/FavoritesSlice';
import Card from './Card';
import { CardsList, PageTitle } from './Favorites.styles';
import { Container } from '../../shared.styles';

function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <PageTitle>
        {favorites.length ? 'Favorites' : 'There are no favorite cities yet!'}
      </PageTitle>
      <CardsList>
        {favorites.map((favorite, i) => {
          return (
            <Card
              key={i}
              place={favorite.location.name}
              temperature={favorite.currentWeather.temperature}
              weatherText={favorite.currentWeather.weatherText}
            />
          );
        })}
      </CardsList>
    </Container>
  );
}

export default Favorites;
