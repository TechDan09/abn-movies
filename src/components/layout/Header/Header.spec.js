import { shallowMount } from '@vue/test-utils';
import Header from './Header.vue';
import BaseInput from '@/components/BaseInput/BaseInput.vue';
import Button from '@/components/Button/Button.vue';
import router from '@/router/index';

describe('Header', () => {
  it('renders header correctly', () => {
    const mockMethod = jest.spyOn(Header.methods, 'searchMovie');

    const mockRouter = {
      push: jest.fn()
    };

    const wrapper = shallowMount(Header, {
      stubs: ['router-link'],
      global: {
        mocks: {
          $router: mockRouter
        },
        plugins: [router]
      }
    });

    const mockBaseInput = wrapper.findComponent(BaseInput);
    expect(mockBaseInput).toBeDefined();

    const mockButton = wrapper.findComponent(Button);
    mockButton.trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  });
});
