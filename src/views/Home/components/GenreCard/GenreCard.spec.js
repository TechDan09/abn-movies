import { mount } from '@vue/test-utils';
import GenreCard from './GenreCard.vue';

describe('GenreCard', () => {
  it('mounts properly', () => {
    const wrapper = mount(GenreCard, {
      props: {
        genre: {
          title: 'Action',
          coverImage:
            'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg'
        }
      }
    });

    expect(wrapper.text()).toMatch('Action Shows');
    expect(
      wrapper
        .find('img')
        .attributes(
          'src',
          'https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg'
        )
    ).toBeTruthy();
  });
});
