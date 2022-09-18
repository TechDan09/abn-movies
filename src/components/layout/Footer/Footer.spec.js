import { shallowMount } from '@vue/test-utils';
import Footer from './Footer.vue';
import IconButton from '@/components/IconButton/IconButton.vue';

describe('Footer', () => {
  it('mounts correctly', () => {
    const wrapper = shallowMount(Footer);

    const icons = wrapper.findAllComponents(IconButton);

    expect(icons).toHaveLength(2);
  });
});
