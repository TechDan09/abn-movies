import { isInLocalStorage } from './is-in-local-storage';

export const toggleFavorites = id => {
  const { ids: existingIds, isFavorite } = isInLocalStorage(id);

  if (isFavorite) {
    const newIds = existingIds.filter(existingId => existingId !== id);

    localStorage.setItem('savedMovies', JSON.stringify(newIds));

    alert('Movie removed from favorites');

    return;
  }

  existingIds.push(id);
  localStorage.setItem('savedMovies', JSON.stringify(existingIds));
  alert('Movie added to favorites');
};
