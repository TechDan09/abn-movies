export const isInLocalStorage = id => {
  const existingIds = JSON.parse(localStorage.getItem('savedMovies')) || [];

  return { ids: existingIds, isFavorite: existingIds.includes(+id) };
};
