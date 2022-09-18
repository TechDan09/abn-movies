import apiClient from '@/api';

export const searchMovie = async query => {
  const { data } = await apiClient.get(`search/shows?q=${query}`);

  return data;
};
