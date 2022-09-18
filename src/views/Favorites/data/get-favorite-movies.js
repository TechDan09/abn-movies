import apiClient from '@/api';
import { getFromLocalStorage } from '../services/get-from-local-storage';

export const getFavoriteMovies = async () => {
  const ids = getFromLocalStorage();

  const responses = await Promise.all(
    ids.map(async id => {
      const { data } = await apiClient.get(`/shows/${id}`);
      return data;
    })
  );

  return responses;
};
