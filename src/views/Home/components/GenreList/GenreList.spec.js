import { shallowMount } from '@vue/test-utils';
import GenreList from './GenreList.vue';
import GenreCard from '../GenreCard/GenreCard.vue';

describe('GenreList', () => {
  it('mounts correctly', () => {
    const wrapper = shallowMount(GenreList);

    expect(wrapper.findAllComponents(GenreCard)).toHaveLength(4);
  });
});
