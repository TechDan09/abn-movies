import { shallowMount } from '@vue/test-utils';
import Movie from './Movie.vue';
import router from '@/router/index';
import MovieStats from './components/MovieStats/MovieStats.vue';
import MovieActions from './components/MovieActions/MovieActions.vue';

const mockRouter = {
  push: jest.fn()
};

const mockMovie = {
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
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg'
  },
  summary:
    "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her</p>",
  updated: 1638776591,
  _links: {}
};

describe('Movie', () => {
  beforeEach(() => {});
  it('renders components correctly', () => {
    const wrapper = shallowMount(Movie, {
      global: {
        mocks: {
          $router: mockRouter,
          $route: {
            params: {
              id: '12'
            }
          }
        },
        plugins: [router]
      },
      data() {
        return {
          movie: mockMovie
        };
      }
    });

    expect(wrapper.find('h1').text()).toMatch('Bitten');
    expect(
      wrapper
        .find('img')
        .attributes(
          'src',
          'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg'
        )
    ).toBeTruthy();
    expect(wrapper.findComponent(MovieStats).attributes('movie', mockMovie));
    expect(wrapper.findComponent(MovieActions).attributes('movie', mockMovie));
  });
});
