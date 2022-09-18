import { mount } from '@vue/test-utils';
import BaseInput from './BaseInput.vue';

describe('BaseInput', () => {
  it('renders input with default props', () => {
    const wrapper = mount(BaseInput);
    expect(wrapper.attributes('type')).toBe('text');
    expect(wrapper.attributes('placeholder')).toBe('Enter text');
  });
});
