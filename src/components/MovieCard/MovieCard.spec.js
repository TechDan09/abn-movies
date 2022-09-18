import { mount } from '@vue/test-utils';
import MovieCard from './MovieCard.vue';
import { mockMovie } from '@/mocks/mock';

describe('MovieCard', () => {
  it('renders correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: mockMovie
      }
    });

    const img = wrapper.find('img');
    expect(img.attributes('src', mockMovie.image.medium));
    expect(img.attributes('alt', mockMovie.name));
  });
});
