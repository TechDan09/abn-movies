import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';
import GenreList from './components/GenreList/GenreList.vue';

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.findComponent(GenreList).exists()).toBeTruthy();
  });
});
