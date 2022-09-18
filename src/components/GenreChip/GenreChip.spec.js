import { mount } from '@vue/test-utils';
import GenreChip from './GenreChip.vue';

const mockGenres = ['drama', 'action', 'romance'];

describe('GenreChip', () => {
  it('renders Correctly', () => {
    const wrapper = mount(GenreChip, {
      props: {
        genres: mockGenres
      }
    });

    expect(wrapper.text()).toMatch('drama');
    expect(wrapper.text()).toMatch('action');
    expect(wrapper.text()).toMatch('romance');
  });

  describe('when genres is empty', () => {
    const wrapper = mount(GenreChip, {
      props: {
        genres: []
      }
    });

    expect(wrapper.findAll('li')).toEqual([]);
  });
});
