import { shallowMount } from '@vue/test-utils';
import Favorites from './Favorites.vue';
import MovieCard from '@/components/MovieCard.vue';

describe('Favorites', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Favorites, {
      data() {
        return {
          movies: [
            {
              id: 3,
              url: 'https://www.tvmaze.com/shows/3/bitten',
              name: 'Bitten',
              type: 'Scripted',
              language: 'English',
              genres: ['Drama', 'Horror', 'Romance'],
              status: 'Ended',
              runtime: 60,
              averageRuntime: 60,
              premiered: '2014-01-11',
              ended: '2016-04-15',
              officialSite: 'http://bitten.space.ca/',
              weight: 95,
              image: {
                medium:
                  'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
                original:
                  'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg'
              },
              summary:
                "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her</p>",
              updated: 1638776591,
              _links: {}
            }
          ]
        };
      }
    });

    const mockMovieCards = wrapper.findAllComponents(MovieCard);

    expect(mockMovieCards).toHaveLength(1);

    expect(wrapper.text()).not.toMatch('No Movies in favorites');
  });

  describe('when no movies saved in favorites', () => {
    it('renders apprioprate message', () => {
      const wrapper = shallowMount(Favorites, {
        data() {
          return {
            movies: []
          };
        }
      });

      const mockMovieCards = wrapper.findAllComponents(MovieCard);
      expect(mockMovieCards).toHaveLength(0);

      expect(wrapper.text()).toMatch('No Movies in favorites');
    });
  });
});
