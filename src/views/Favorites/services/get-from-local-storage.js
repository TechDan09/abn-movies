export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('savedMovies')) || [];
};
