import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('mounts correctly with default props', () => {
    const wrappers = mount(Button);

    expect(wrappers.text()).toMatch('View More');
  });

  describe('when variant prop and slot is passed', () => {
    it('renders apprioprate button and text', () => {
      const wrappers = mount(Button, {
        slots: {
          default: 'View Movie'
        },
        props: {
          varaint: 'secondary'
        }
      });

      expect(wrappers.text()).toMatch('View Movie');
    });
  });
});
