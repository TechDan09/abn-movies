import { shallowMount } from '@vue/test-utils';
import Movies from './Movies.vue';
import { mockMovie } from './mock';
import MoviesList from './components/MoviesList/MoviesList.vue';

describe('Movies', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Movies, {
      data() {
        return {
          movies: [
            {
              mockMovie
            }
          ],
          searchText: ''
        };
      },
      global: {
        mocks: {
          $route: {
            query: {
              q: 'drama'
            }
          }
        }
      }
    });

    expect(wrapper.findComponent(MoviesList).attributes('movies', mockMovie));
  });
});
