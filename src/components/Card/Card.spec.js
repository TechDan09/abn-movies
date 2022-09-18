import { mount } from '@vue/test-utils';
import Card from './Card.vue';

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>Card child element</p>'
      }
    });

    expect(wrapper.html()).toContain('<p>Card child element</p>');
  });
});
