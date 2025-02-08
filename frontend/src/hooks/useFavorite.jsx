import { useState } from 'react';

export const useFavorite = (countFavorite) => {
  const [favorite, setFavorite] = useState({
    isFavorite: false,
    count: countFavorite
  });

  const handleClickFavorite = () => {
    const setCount = favorite.isFavorite ? favorite.count - 1 : favorite.count + 1;

    setFavorite({
      isFavorite: !favorite.isFavorite,
      count: setCount
    });
  };

  return { favorite, handleClickFavorite };
};
