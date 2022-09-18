import { mount } from '@vue/test-utils';
import IconButton from './IconButton.vue';

describe('IconButton', () => {
  it('mounts correctly', () => {
    const wrappers = mount(IconButton, {
      slots: {
        default: 'MockIcon'
      }
    });

    expect(wrappers.text()).toMatch('MockIcon');
  });
});
