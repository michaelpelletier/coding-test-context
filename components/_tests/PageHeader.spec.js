import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import PageHeader from '~/components/PageHeader.vue';

describe('PageHeader', () => {
	it('renders the page title', () => {
		const wrapper = mount(PageHeader, { slots: { default: 'About Us' } });
		expect(wrapper.text()).toContain('About Us');
	});
});
