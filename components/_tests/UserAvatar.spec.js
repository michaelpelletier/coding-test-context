import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import UserAvatar from '~/components/UserAvatar.vue';

describe('UserAvatar', () => {
	it('adds a class based on specified size', () => {
		const wrapperSm = mount(UserAvatar, {
			props: { size: 'small', src: 'logotest.png' },
		});
		expect(wrapperSm.classes()).toContain('user-avatar--small');

		const wrapperLg = mount(UserAvatar, {
			props: { size: 'large', src: 'logotest.png' },
		});
		expect(wrapperLg.classes()).toContain('user-avatar--large');
	});

	it('defaults to a medium sized avatar', () => {
		const wrapper = mount(UserAvatar, { props: { src: 'logotest.png' } });
		expect(wrapper.classes()).toContain('user-avatar--medium');
	});

	it('sets the image src based on the passed prop', () => {
		const wrapper = mount(UserAvatar, { props: { src: 'logotest.png' } });
		expect(wrapper.html()).toContain('<img src="logotest.png">');
	});
});
