import { mount } from '@vue/test-utils';
import MovieStats from './MovieStats.vue';

describe('MovieStats', () => {
  it('mounts apprioprately', () => {
    const wrappers = mount(MovieStats, {
      props: {
        movie: {
          rating: {
            average: '90'
          },
          runtime: '80 mins',
          premiered: '2020-08-12'
        }
      }
    });

    expect(wrappers.text()).toMatch('Rating: 90');
    expect(wrappers.text()).toMatch('Duration: 80 mins');
    expect(wrappers.text()).toMatch('Release Date: 2020');
  });
});
