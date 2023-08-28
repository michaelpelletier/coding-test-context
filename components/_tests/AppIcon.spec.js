import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppIcon from '~/components/AppIcon.vue';

describe('AppIcon', () => {
	it('adds a class based on specified size', () => {
		const wrapperSm = mount(AppIcon, {
			props: { size: 'small', icon: 'chevron' },
		});
		expect(wrapperSm.classes()).toContain('icon--small');

		const wrapperLg = mount(AppIcon, {
			props: { size: 'large', icon: 'chevron' },
		});
		expect(wrapperLg.classes()).toContain('icon--large');
	});

	it('defaults to a medium sized icon', () => {
		const wrapper = mount(AppIcon, { props: { icon: 'chevron' } });
		expect(wrapper.classes()).toContain('icon--medium');
	});

	it('sets the icon src based on the passed prop', () => {
		const wrapper = mount(AppIcon, { props: { icon: 'chevron' } });
		expect(wrapper.html()).toContain('<use href="#icon-chevron"></use>');
	});
});
