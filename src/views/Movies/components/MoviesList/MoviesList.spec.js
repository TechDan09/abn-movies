import { shallowMount } from '@vue/test-utils';
import MoviesList from './MoviesList.vue';
import { mockMovie } from '@/mocks/mock';
import MovieCard from '@/components/MovieCard/MovieCard.vue';

describe('MoviesList', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MoviesList, {
      props: {
        movies: [
          {
            show: mockMovie
          }
        ]
      }
    });

    expect(
      wrapper.findComponent(MovieCard).attributes('movie', mockMovie)
    ).toBeTruthy();

    expect(wrapper.findAllComponents(MovieCard)).toHaveLength(1);
  });
});
