import { defineStore } from 'pinia';

export const useClientsStore = defineStore('clients', {
	state: () => {
		return {
			nationality: 'any',
			title: 'any',
		};
	},
});
