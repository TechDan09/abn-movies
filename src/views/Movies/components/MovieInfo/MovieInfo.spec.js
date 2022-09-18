import { shallowMount } from '@vue/test-utils';
import MovieInfo from './MovieInfo.vue';
import GenreChip from '@/components/GenreChip/GenreChip.vue';
import { mockMovie } from '../../mock';

describe('MovieInfo', () => {
  it('mounts correctly', () => {
    const wrappers = shallowMount(MovieInfo, {
      props: {
        movie: mockMovie
      }
    });

    const title = wrappers.find('.title');
    expect(title.text()).toMatch(mockMovie.name);

    const year = wrappers.find('.movie__info-year');
    expect(year.text()).toMatch('2014');

    const runTime = wrappers.find('.movie__info-runtime');
    expect(runTime.text()).toMatch('60 Minutes');

    const language = wrappers.find('.movie__info-language');
    expect(language.text()).toMatch('Language: English');

    const type = wrappers.find('.movie__info-type');
    expect(type.text()).toMatch('Type: Scripted');

    expect(
      wrappers.findComponent(GenreChip).attributes('genres', mockMovie.genres)
    );
  });
});
