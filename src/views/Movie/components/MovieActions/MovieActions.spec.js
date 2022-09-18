import { mount } from '@vue/test-utils';
import MovieActions from './MovieActions.vue';
import router from '@/router/index';

const mockRouter = {
  push: jest.fn()
};

describe('MovieActions', () => {
  it('Renders correctly with default props', () => {
    const wrappers = mount(MovieActions, {
      data() {
        return {
          isFavorite: false
        };
      },
      props: {
        movie: {
          officialSite: 'test-site.com',
          id: '123'
        }
      },
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [router]
      }
    });

    const anchor = wrappers.find('a');
    expect(anchor.text()).toMatch('Watch Trailer');

    const btn = wrappers.find('button');
    expect(btn.text()).toMatch('Add To List');
  });
});
