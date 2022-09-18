import apiClient from '@/api';

export const getMovie = async id => {
  const { data } = await apiClient.get(`/shows/${id}`);

  return data;
};
