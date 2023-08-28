import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import SelectInput from '~/components/form/SelectInput.vue';

const selectOptions = [
	{
		label: 'Any Nationality',
		value: 'any',
	},
	{
		label: 'France',
		value: 'France',
	},
	{
		label: 'India',
		value: 'India',
	},
	{
		label: 'Ireland',
		value: 'Ireland',
	},
	{
		label: 'New Zealand',
		value: 'New Zealand',
	},
];

describe('SelectInput', () => {
	it('starts closed', () => {
		const wrapper = mount(SelectInput, {
			props: { options: selectOptions, default: selectOptions[0] },
		});
		expect(wrapper.find('.form-select--selected').classes()).not.toContain(
			'open'
		);
	});

	it('displays the chosen option', () => {
		const wrapper = mount(SelectInput, {
			props: { options: selectOptions, default: selectOptions[0] },
		});
		expect(wrapper.find('.form-select--selected').text()).toContain(
			'Any Nationality'
		);
	});

	it('opens when clicked', async () => {
		const wrapper = mount(SelectInput, {
			props: { options: selectOptions, default: selectOptions[0] },
		});
		await wrapper.find('.form-select--selected').trigger('click');
		expect(wrapper.find('.form-select--selected').classes()).toContain(
			'open'
		);
	});

	it('updates its display when an option is chosen', async () => {
		const wrapper = mount(SelectInput, {
			props: { options: selectOptions, default: selectOptions[0] },
		});

		await wrapper.find('.form-select--selected').trigger('click');
		await wrapper
			.find('.form-select--option:nth-of-type(3)')
			.trigger('click');

		expect(wrapper.find('.form-select--selected').text()).toContain(
			'India'
		);
	});

	it('emits an update when an option is chosen', async () => {
		const wrapper = mount(SelectInput, {
			props: { options: selectOptions, default: selectOptions[0] },
		});

		await wrapper.find('.form-select--selected').trigger('click');
		await wrapper
			.find('.form-select--option:nth-of-type(3)')
			.trigger('click');

		expect(wrapper.emitted()).toHaveProperty('updateSelect');
	});
});
