import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ListItem from '~/components/client/ListItem.vue';
import clientData from '~/server/api/clients.json';

describe('ListItem', () => {
	it('starts collapsed', () => {
		const client = clientData[0];

		const wrapper = mount(ListItem, { props: { client } });
		expect(wrapper.classes()).not.toContain('client-list-item--open');
	});

	it('expands when clicked', async () => {
		const client = clientData[0];

		const wrapper = mount(ListItem, { props: { client } });
		await wrapper.trigger('click');
		expect(wrapper.classes()).toContain('client-list-item--open');
	});
});
